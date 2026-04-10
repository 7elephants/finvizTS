/*
 * ---
 * Workflow Summary
 * Invocation: Instantiated by consumers via `new FinvizClient({ apiToken })`. All API modules
 * receive the client instance and call `client.get()` to make authenticated requests.
 *
 * | Step | Method        | Input                | Output                     |
 * |------|---------------|----------------------|----------------------------|
 * | 1    | constructor() | FinvizClientOptions  | Configured axios instance  |
 * | 2    | get()         | path, params         | Parsed response data       |
 * ---
 */

import axios, { type AxiosInstance } from 'axios';
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
        Accept: 'application/json',
      },
    });
  }

  async get<T>(path: string, params: Record<string, string | number | undefined> = {}): Promise<T> {
    const response = await this.http.get<T>(path, {
      params: {
        ...params,
        auth_token: this.apiToken,
      },
    });
    return response.data;
  }
}
