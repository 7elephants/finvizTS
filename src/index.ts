/*
 * ---
 * Workflow Summary
 * Invocation: Main package entry point. Re-exports the public API surface so consumers can
 * import everything from "finviz-ts".
 *
 * | Step | Description       | Input | Output                                   |
 * |------|-------------------|-------|------------------------------------------|
 * | 1    | Re-export client  | —     | FinvizClient class                       |
 * | 2    | Re-export modules | —     | getQuote, getScreener, getNews           |
 * | 3    | Re-export types   | —     | All public TypeScript types              |
 * ---
 */

export { FinvizClient } from './client.js';
export { getQuote } from './quote.js';
export { getScreener } from './screener.js';
export { getNews } from './news.js';
export type {
  FinvizClientOptions,
  QuoteData,
  ScreenerOptions,
  ScreenerRow,
  NewsOptions,
  NewsItem,
} from './types.js';
