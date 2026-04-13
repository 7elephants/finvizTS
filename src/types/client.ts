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
}
