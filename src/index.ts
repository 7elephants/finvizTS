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
 * | 4    | Re-export types       | —     | `export *` of types/ — every public type and const object     |
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
export { getInsiders } from './insider';
export { getManagers } from './manager';
export { getFunds } from './fund';
export { getEconomicCalendar, getEarningsCalendar, getDividendsCalendar } from './calendar';
export { getFutures } from './futures';
export { getForex } from './forex';
export { getCrypto } from './crypto';
export { FinvizError } from './errors';
export * from './utils';
// Every public type and const object (filters, sort columns, views, response types, …). Wildcard
// so new constants in types/ can't be forgotten here.
export * from './types';
