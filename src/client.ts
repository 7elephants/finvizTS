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

import axios, { type AxiosInstance } from 'axios';
import { parseRecord, parseRecords } from './csv.js';
import type { FinvizClientOptions } from './types.js';

const DEFAULT_BASE_URL = 'https://elite.finviz.com';
const DEFAULT_TIMEOUT = 10_000;

export class FinvizClient {
  private readonly http: AxiosInstance;
  private readonly apiToken: string;

  constructor(options: FinvizClientOptions) {
    this.apiToken = options.apiToken;
    this.http = axios.create({
      baseURL: options.baseUrl ?? DEFAULT_BASE_URL,
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
    const response = await this.http.get<string>(path, {
      responseType: 'text',
      params: { ...params, auth_token: this.apiToken },
    });
    return response.data;
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
