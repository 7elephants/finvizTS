/*
 * ---
 * Workflow Summary
 * Invocation: Main package entry point. Re-exports the public API surface so consumers can
 * import everything from "finviz-ts".
 *
 * | Step | Description           | Input | Output                                                       |
 * |------|-----------------------|-------|--------------------------------------------------------------|
 * | 1    | Re-export client      | —     | FinvizClient class                                           |
 * | 2    | Re-export modules     | —     | getQuote, getScreener, getNews, getPortfolio, getGroups, etc |
 * | 3    | Re-export CSV utils   | —     | parseRecord, parseRecords                                    |
 * | 4    | Re-export types       | —     | All public TypeScript types and const objects                |
 * ---
 */

export { FinvizClient } from './client.js';
export { getQuote } from './quote.js';
export { getScreener } from './screener.js';
export { getNews } from './news.js';
export { getPortfolio } from './portfolio.js';
export { getLatestFilings } from './filings.js';
export { getOptionsChain } from './options.js';
export { getGroups } from './groups.js';
export { FinvizApiError } from './errors.js';
export {
  ScreenerView,
  ScreenerField,
  QuotePeriod,
  QuoteRange,
  NewsType,
  GroupName,
  IndustrySubgroup,
  GroupView,
  FilingFilter,
  OptionsViewType,
} from './types.js';
export type {
  FinvizClientOptions,
  QuoteOptions,
  Quote,
  ScreenerOptions,
  Screener,
  NewsOptions,
  NewsItem,
  PortfolioOptions,
  Portfolio,
  GroupOptions,
  Group,
  FilingOptions,
  Filing,
  OptionsChainOptions,
  Option,
} from './types.js';
