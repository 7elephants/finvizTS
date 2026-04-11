/*
 * ---
 * Workflow Summary
 * Invocation: Instantiated by consumers via `new FinvizClient({ apiToken })`. All API modules
 * receive the client instance and call `getRecord()` or `getRecords()` to make authenticated
 * requests. Raw CSV text is fetched via axios and parsed by the csv utility.
 *
 * | Step | Method        | Input                             | Output                             |
 * |------|---------------|-----------------------------------|------------------------------------|
 * | 1    | constructor() | FinvizClientOptions               | Configured axios instance          |
 * | 2    | getRecord()   | path, params                      | Parsed single-row Record           |
 * | 3    | getRecords()  | path, params                      | Parsed multi-row Record[]          |
 * ---
 */

import axios, { isAxiosError, type AxiosInstance } from 'axios';
import { config as loadEnv } from 'dotenv';
import { parseRecord, parseRecords } from './csv.js';
import { FinvizApiError } from './errors.js';
import type { FinvizClientOptions } from './types.js';

const DEFAULT_BASE_URL = 'https://elite.finviz.com';
const DEFAULT_TIMEOUT = 10_000;

export class FinvizClient {
  private readonly http: AxiosInstance;
  private readonly apiToken: string;

  constructor(options: FinvizClientOptions) {
    // Load .env.local only when no baseUrl is explicitly provided, so library consumers
    // who manage their own env loading are not affected by this side-effect.
    if (!options.baseUrl) {
      loadEnv({ path: '.env.local' });
    }

    this.apiToken = options.apiToken;
    this.http = axios.create({
      baseURL: options.baseUrl ?? process.env['FINVIZ_BASE_URL'] ?? DEFAULT_BASE_URL,
      timeout: options.timeout ?? DEFAULT_TIMEOUT,
      headers: {
        Accept: 'text/csv',
      },
    });
  }

  private async fetchCsv(
    path: string,
    params: Record<string, string | number | undefined>,
  ): Promise<string> {
    try {
      const response = await this.http.get<string>(path, {
        responseType: 'text',
        params: { ...params, auth: this.apiToken },
      });
      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        const status = err.response?.status;
        const message =
          status === 429
            ? 'Finviz rate limit exceeded (1 request per 5 seconds)'
            : status === 401
              ? 'Finviz API authentication failed — check your API token'
              : `Finviz API request failed: ${err.message}`;
        throw new FinvizApiError(message, status);
      }
      throw err;
    }
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
