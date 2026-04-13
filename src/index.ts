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

export { FinvizClient } from './client';
export { buildFilters } from './filters';
export { getQuote } from './quote';
export { getScreener } from './screener';
export { getNews } from './news';
export { getPortfolio } from './portfolio';
export { getLatestFilings } from './filings';
export { getOptionsChain } from './options';
export { getGroups } from './groups';
export { FinvizApiError } from './errors';
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
} from './types';
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
} from './types';
