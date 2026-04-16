/*
 * ---
 * Workflow Summary
 * Invocation: Imported by client.ts for the FinvizClient constructor options type.
 *
 * | Step | Description                        | Input | Output                   |
 * |------|------------------------------------|-------|--------------------------|
 * | 1    | Export FinvizClientOptions         | —     | Typed constructor options|
 * ---
 */

/** Options passed when constructing a FinvizClient instance. */
export interface FinvizClientOptions {
  /** Finviz Elite API token */
  apiToken: string;
  /** Base URL override (defaults to https://elite.finviz.com) */
  baseUrl?: string;
  /** Request timeout in milliseconds (default: 10000) */
  timeout?: number;
  /**
   * Minimum interval between outgoing requests in milliseconds.
   * Proactively delays requests that arrive before this interval has elapsed.
   * Default: 5000 (matches Finviz's 1 request per 5 second limit).
   */
  rateLimitMs?: number;
  /**
   * Maximum number of times to retry a request after a 429 response.
   * Default: 3.
   */
  maxRetries?: number;
  /**
   * Milliseconds to wait before each retry when no Retry-After header is present.
   * Default: 5000.
   */
  retryDelayMs?: number;
}
