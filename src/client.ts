/*
 * ---
 * Workflow Summary
 * Invocation: Instantiated by consumers via `new FinvizClient({ apiToken })`. All API modules
 * receive the client instance and call `getRecord()` or `getRecords()` to make authenticated
 * requests. Raw CSV text is fetched via fetchCsv, which enforces rate limiting and retries.
 *
 * | Step | Method        | Input                             | Output                             |
 * |------|---------------|-----------------------------------|------------------------------------|
 * | 1    | constructor() | FinvizClientOptions               | Configured axios instance + limits + default `format` |
 * | 2    | fetchCsv()    | path, params                      | Raw CSV string (with rate limiting and 429 retry) |
 * | 3    | getRecord()   | path, params                      | Parsed single-row Record           |
 * | 4    | getRecords()  | path, params                      | Parsed multi-row Record[]          |
 * ---
 */

import axios, { isAxiosError, type AxiosInstance } from 'axios';
import { parseRecord, parseRecords } from './csv';
import { FinvizError } from './errors';
import { type FinvizClientOptions, ErrorLevel, ResponseFormat } from './types';

const DEFAULT_BASE_URL = 'https://elite.finviz.com';
const DEFAULT_TIMEOUT = 10000;
const DEFAULT_RATE_LIMIT_MS = 5000;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_RETRY_DELAY_MS = 5000;

/**
 * Authenticated HTTP transport for the Finviz Elite API.
 * Injects the API token and rate-limits/retries requests; endpoint modules call
 * `getRecord()` or `getRecords()` on an instance to fetch and parse CSV responses.
 *
 * `F` is the default ResponseFormat of `get*` calls made with this client, inferred from the
 * `format` option (`parsed` when omitted).
 */
export class FinvizClient<F extends ResponseFormat = 'parsed'> {
  /** Default response format for `get*` calls; each call may override it via `format`. */
  readonly format: F;
  /** Configured axios instance used for all requests. */
  private readonly http: AxiosInstance;
  /** Finviz Elite API token appended to every request. */
  private readonly apiToken: string;
  /** Minimum interval between outgoing requests, in milliseconds. */
  private readonly rateLimitMs: number;
  /** Maximum number of retries after a 429 response. */
  private readonly maxRetries: number;
  /** Fallback delay between retries when no `Retry-After` header is present. */
  private readonly retryDelayMs: number;
  /** Timestamp of the last outgoing request, used for proactive rate limiting. */
  private lastRequestTime: number = 0;

  /** Construct a client from the given options. Throws FinvizError if `apiToken` is missing. */
  constructor(options: FinvizClientOptions<F>) {
    if (!options.apiToken) throw new FinvizError('Missing Finviz API token', ErrorLevel.FATAL);

    this.apiToken = options.apiToken;
    // Without `format`, F defaults to 'parsed', so this cast matches the inferred type.
    this.format = options.format ?? (ResponseFormat.PARSED as F);
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

  /** Resolve after the given number of milliseconds. */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Fetch a raw CSV response for the given path/params, injecting the API token.
   * Proactively delays to respect `rateLimitMs` between requests, and retries on
   * HTTP 429 (honoring the `Retry-After` header when present) up to `maxRetries` times.
   */
  private async fetchCsv(
    path: string,
    params: Record<string, string | number | undefined>,
  ): Promise<string> {
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;
    
    if (elapsed < this.rateLimitMs) {
      await this.delay(this.rateLimitMs - elapsed);
    }
    this.lastRequestTime = Date.now();

    let attempt = 0;
    let lastError: FinvizError | undefined;

    while (attempt <= this.maxRetries) {
      if (attempt > 0) {
        const waitMs = (lastError?.retryAfter !== undefined) ? lastError.retryAfter * 1000 : this.retryDelayMs;
        
        await this.delay(waitMs);
      }

      try {
        const response = await this.http.get<string>(path, {
          responseType: 'text',
          params: { ...params, auth: this.apiToken },
        });
        return response.data;
      } catch (err) {
        if (isAxiosError(err) && (err.response?.status === 429)) {
          const retryAfterHeader = err.response?.headers?.['retry-after'] as string | undefined;
          const retryAfter = (retryAfterHeader !== undefined) 
            ? Number(retryAfterHeader)
            : undefined;
          const message = (attempt < this.maxRetries)
            ? 'Finviz rate limit exceeded'
            : `Finviz rate limit exceeded — exhausted ${this.maxRetries} retries`;

          lastError = new FinvizError(message, ErrorLevel.ERROR, 429, retryAfter, { cause: err });
          attempt++;
          continue;
        }  
                
        throw new FinvizError('Unable to complete request', ErrorLevel.ERROR, undefined, undefined, {cause: err} );
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
