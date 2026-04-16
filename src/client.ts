/*
 * ---
 * Workflow Summary
 * Invocation: Instantiated by consumers via `new FinvizClient({ apiToken })`. All API modules
 * receive the client instance and call `getRecord()` or `getRecords()` to make authenticated
 * requests. Raw CSV text is fetched via fetchCsv, which enforces rate limiting and retries.
 *
 * | Step | Method        | Input                             | Output                             |
 * |------|---------------|-----------------------------------|------------------------------------|
 * | 1    | constructor() | FinvizClientOptions               | Configured axios instance + limits |
 * | 2    | fetchCsv()    | path, params                      | Raw CSV string (with rate limiting and 429 retry) |
 * | 3    | getRecord()   | path, params                      | Parsed single-row Record           |
 * | 4    | getRecords()  | path, params                      | Parsed multi-row Record[]          |
 * ---
 */

import axios, { isAxiosError, type AxiosInstance } from 'axios';
import { parseRecord, parseRecords } from './csv';
import { FinvizApiError } from './errors';
import type { FinvizClientOptions } from './types';

const DEFAULT_BASE_URL = 'https://elite.finviz.com';
const DEFAULT_TIMEOUT = 10000;
const DEFAULT_RATE_LIMIT_MS = 5000;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_RETRY_DELAY_MS = 5000;

export class FinvizClient {
  private readonly http: AxiosInstance;
  private readonly apiToken: string;
  private readonly rateLimitMs: number;
  private readonly maxRetries: number;
  private readonly retryDelayMs: number;
  private lastRequestTime: number = 0;

  constructor(options: FinvizClientOptions) {
    this.apiToken = options.apiToken;
    this.http = axios.create({
      baseURL: options.baseUrl ?? DEFAULT_BASE_URL,
      timeout: options.timeout ?? DEFAULT_TIMEOUT,
      headers: {
        Accept: 'text/csv',
      },
    });
    this.rateLimitMs = options.rateLimitMs ?? DEFAULT_RATE_LIMIT_MS;
    this.maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;
    this.retryDelayMs = options.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async fetchCsv(
    path: string,
    params: Record<string, string | number | undefined>,
  ): Promise<string> {
    // Proactive rate limiting: delay if last request was too recent
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;
    if (elapsed < this.rateLimitMs) {
      await this.delay(this.rateLimitMs - elapsed);
    }
    this.lastRequestTime = Date.now();

    let attempt = 0;
    let lastError: FinvizApiError | undefined;

    while (attempt <= this.maxRetries) {
      if (attempt > 0) {
        const waitMs =
          lastError?.retryAfter !== undefined
            ? lastError.retryAfter * 1000
            : this.retryDelayMs;
        await this.delay(waitMs);
      }

      try {
        const response = await this.http.get<string>(path, {
          responseType: 'text',
          params: { ...params, auth: this.apiToken },
        });
        return response.data;
      } catch (err) {
        if (isAxiosError(err)) {
          const status = err.response?.status;

          if (status === 429) {
            const retryAfterHeader = err.response?.headers?.['retry-after'] as string | undefined;
            const retryAfter =
              retryAfterHeader !== undefined ? Number(retryAfterHeader) : undefined;
            const message =
              attempt < this.maxRetries
                ? 'Finviz rate limit exceeded (1 request per 5 seconds)'
                : `Finviz rate limit exceeded — exhausted ${this.maxRetries} retries`;
            lastError = new FinvizApiError(message, status, retryAfter);
            attempt++;
            continue;
          }

          const message =
            status === 401
              ? 'Finviz API authentication failed — check your API token'
              : `Finviz API request failed: ${err.message}`;
          throw new FinvizApiError(message, status);
        }
        throw err;
      }
    }

    throw lastError!;
  }

  /** Fetch a single-row CSV response and return it as a flat key/value record. */
  async getRecord(
    path: string,
    params: Record<string, string | number | undefined> = {},
  ): Promise<Record<string, string>> {
    const csv = await this.fetchCsv(path, params);
    return parseRecord(csv);
  }

  /** Fetch a multi-row CSV response and return it as an array of key/value records. */
  async getRecords(
    path: string,
    params: Record<string, string | number | undefined> = {},
  ): Promise<Record<string, string>[]> {
    const csv = await this.fetchCsv(path, params);
    return parseRecords(csv);
  }
}
