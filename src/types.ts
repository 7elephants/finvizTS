/*
 * ---
 * Workflow Summary
 * Invocation: Imported by all other modules for shared type definitions. No runtime execution.
 *
 * | Step | Description                                | Input           | Output                  |
 * |------|--------------------------------------------|-----------------|-------------------------|
 * | 1    | Export FinvizClientOptions                 | Consumer config | Typed options object    |
 * | 2    | Export domain types (Quote, Screener, etc) | API responses   | Typed response shapes   |
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

/** Raw key-value map returned by the Finviz quote endpoint. */
export type QuoteData = Record<string, string>;

/** A single row returned by the screener endpoint. */
export type ScreenerRow = Record<string, string>;

/** Options for a screener request. */
export interface ScreenerOptions {
  /** Filter string as it appears in the Finviz screener URL (e.g. "exch_nasd,geo_usa") */
  filters?: string;
  /** Column view (e.g. "111" for Overview). Defaults to Overview. */
  view?: string;
  /** Sort order column (prefix with "-" for descending) */
  order?: string;
  /** Starting row index for pagination (1-based) */
  rows?: number;
  /** Signal filter (e.g. "ta_topgainers") */
  signal?: string;
}

/** Options for a news request. */
export interface NewsOptions {
  /** Ticker symbol to filter news by */
  ticker?: string;
}

/** A single news item returned by the news endpoint. */
export interface NewsItem {
  date: string;
  title: string;
  source: string;
  url: string;
}
