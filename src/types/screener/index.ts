/*
 * ---
 * Workflow Summary
 * Invocation: Imported by screener.ts and re-exported from types/index.ts.
 *
 * | Step | Description                          | Input | Output                        |
 * |------|--------------------------------------|-------|-------------------------------|
 * | 1    | Export Screener response type        | —     | Typed screener row            |
 * | 2    | Export ScreenerView const + type     | —     | Typed view ID constants       |
 * | 3    | Export ScreenerField const + type    | —     | Typed field ID constants      |
 * | 4    | Export ScreenerOptions interface     | —     | Typed request options         |
 * ---
 */

/** A single row returned by the screener endpoint. */
export type Screener = Record<string, string>;

// ---------------------------------------------------------------------------
// Screener view IDs
// ---------------------------------------------------------------------------

/** All known screener view IDs. Pass as the `view` option to `getScreener()`. */
export const ScreenerView = {
  OVERVIEW: 111,
  VALUATION: 121,
  PERFORMANCE: 131,
  OWNERSHIP: 141,
  CUSTOM: 151,
  FINANCIAL: 161,
  TECHNICAL: 171,
  ETF: 181,
  ETF_PERFORMANCE: 191,
  CHARTS: 211,
  BASIC: 311,
  NEWS: 321,
  SNAPSHOT: 341,
  TA: 351,
  TICKERS: 411,
  MAPS: 711,
} as const;

/** Union of all known screener view ID values. */
export type ScreenerView = (typeof ScreenerView)[keyof typeof ScreenerView];

// ---------------------------------------------------------------------------
// Screener field IDs
// ---------------------------------------------------------------------------

/** All documented screener field IDs for the `c` query parameter. */
export const ScreenerField = {
  NO: 0,
  TICKER: 1,
  COMPANY: 2,
  SECTOR: 3,
  INDUSTRY: 4,
  COUNTRY: 5,
  MARKET_CAP: 6,
  PE: 7,
  FORWARD_PE: 8,
  PEG: 9,
  PS: 10,
  PB: 11,
  P_CASH: 12,
  P_FREE_CASH_FLOW: 13,
  DIVIDEND_YIELD: 14,
  PAYOUT_RATIO: 15,
  EPS: 16,
  EPS_GROWTH_THIS_YEAR: 17,
  EPS_GROWTH_NEXT_YEAR: 18,
  EPS_GROWTH_PAST_5Y: 19,
  EPS_GROWTH_NEXT_5Y: 20,
  SALES_GROWTH_PAST_5Y: 21,
  EPS_GROWTH_QTR_OVER_QTR: 22,
  SALES_GROWTH_QTR_OVER_QTR: 23,
  SHARES_OUTSTANDING: 24,
  SHARES_FLOAT: 25,
  INSIDER_OWNERSHIP: 26,
  INSIDER_TRANSACTIONS: 27,
  INSTITUTIONAL_OWNERSHIP: 28,
  INSTITUTIONAL_TRANSACTIONS: 29,
  SHORT_FLOAT: 30,
  SHORT_RATIO: 31,
  RETURN_ON_ASSETS: 32,
  RETURN_ON_EQUITY: 33,
  RETURN_ON_INVESTED_CAPITAL: 34,
  CURRENT_RATIO: 35,
  QUICK_RATIO: 36,
  LONG_TERM_DEBT_EQUITY: 37,
  TOTAL_DEBT_EQUITY: 38,
  GROSS_MARGIN: 39,
  OPERATING_MARGIN: 40,
  NET_PROFIT_MARGIN: 41,
  PERFORMANCE_WEEK: 42,
  PERFORMANCE_MONTH: 43,
  PERFORMANCE_QUARTER: 44,
  PERFORMANCE_HALF_YEAR: 45,
  PERFORMANCE_YEAR: 46,
  PERFORMANCE_YTD: 47,
  BETA: 48,
  AVERAGE_TRUE_RANGE: 49,
  VOLATILITY_WEEK: 50,
  VOLATILITY_MONTH: 51,
  SMA_20: 52,
  SMA_50: 53,
  SMA_200: 54,
  HIGH_50_DAY: 55,
  LOW_50_DAY: 56,
  HIGH_52_WEEK: 57,
  LOW_52_WEEK: 58,
  RSI: 59,
  CHANGE_FROM_OPEN: 60,
  GAP: 61,
  ANALYST_RECOMMENDATION: 62,
  AVERAGE_VOLUME: 63,
  RELATIVE_VOLUME: 64,
  PRICE: 65,
  CHANGE: 66,
  VOLUME: 67,
  EARNINGS_DATE: 68,
  TARGET_PRICE: 69,
  IPO_DATE: 70,
  BOOK_VALUE_PER_SHARE: 73,
  CASH_PER_SHARE: 74,
  DIVIDEND: 75,
  EMPLOYEES: 76,
  EPS_ESTIMATE_NEXT_QUARTER: 77,
  INCOME: 78,
  INDEX: 79,
  OPTIONABLE: 80,
  PREVIOUS_CLOSE: 81,
  SALES: 82,
  SHORTABLE: 83,
  SHORT_INTEREST: 84,
  FLOAT_OUTSTANDING: 85,
  OPEN: 86,
  HIGH: 87,
  LOW: 88,
  ASSET_TYPE: 100,
  CATEGORY: 103,
  TAGS: 105,
  NET_EXPENSE_RATIO: 107,
  TOTAL_HOLDINGS: 108,
  AUM: 109,
  NET_FLOWS_1M: 112,
  NET_FLOWS_1M_PCT: 113,
  NET_FLOWS_3M: 114,
  NET_FLOWS_3M_PCT: 115,
  NET_FLOWS_YTD: 116,
  NET_FLOWS_YTD_PCT: 117,
  RETURN_1Y: 120,
  RETURN_3Y: 121,
  RETURN_5Y: 122,
  ALL_TIME_HIGH: 125,
  ALL_TIME_LOW: 126,
  EPS_SURPRISE: 127,
  REVENUE_SURPRISE: 128,
  EXCHANGE: 129,
  DIVIDEND_TTM: 130,
  DIVIDEND_EX_DATE: 131,
  EPS_YOY_TTM: 132,
  SALES_YOY_TTM: 133,
  RANGE_52_WEEK: 134,
  NEWS_TIME: 135,
  NEWS_URL: 136,
  NEWS_TITLE: 137,
  PERFORMANCE_3Y: 138,
  PERFORMANCE_5Y: 139,
  PERFORMANCE_10Y: 140,
  EPS_GROWTH_PAST_3Y: 142,
  SALES_GROWTH_PAST_3Y: 143,
  ENTERPRISE_VALUE: 144,
  EV_EBITDA: 145,
  EV_SALES: 146,
  DIVIDEND_GROWTH_1Y: 147,
  DIVIDEND_GROWTH_3Y: 148,
  DIVIDEND_GROWTH_5Y: 149,
  DAILY_DIGEST: 150,
} as const;

/** Union of all known screener field ID values. */
export type ScreenerField = (typeof ScreenerField)[keyof typeof ScreenerField];

// ---------------------------------------------------------------------------
// Screener options
// ---------------------------------------------------------------------------

/** Options for a screener request. */
export interface ScreenerOptions {
  /**
   * Screener view ID controlling which columns are returned.
   * Use the `ScreenerView` constants (e.g. `ScreenerView.OVERVIEW`) or a custom numeric ID.
   */
  view?: number;
  /**
   * Columns to include in the response. Maps to the `c` query param as a comma-separated list.
   * Use the `ScreenerField` constants (e.g. `ScreenerField.TICKER`, `ScreenerField.PRICE`).
   */
  fields?: number[];
  /**
   * Filters for the `f` query parameter. Accepts either:
   * - A pre-built filter string (e.g. `"exch_nasd,geo_usa"`)
   * - An array of filter groups passed directly to `buildFilters()`:
   *   each element is a single filter value (string) or multiple OR'd values (string[])
   *
   * @example
   * filters: [ScreenerExchangeFilter.NASDAQ, ScreenerCountryFilter.USA]
   * // → 'exch_nasd,geo_usa'
   *
   * @example
   * filters: [[ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA]
   * // → 'exch_amex|nasd,geo_usa'
   */
  filters?: string | (string | string[])[];
  /** Sort order column */
  order?: string;
  /** Sort order column direction (either '' or '-') */
  orderDirection?: string;
  /** Starting row index for pagination (1-based) */
  rows?: number;
  /** Signal filter shortcut (e.g. `ScreenerSignal.TOP_GAINERS`) */
  signal?: string;
  /** Ticker symbols (e.g. "AAPL") */
  tickers?: string | string[];
}

// ---------------------------------------------------------------------------
// Filter imports
// ---------------------------------------------------------------------------

export * from './descriptive-filters';
export * from './fundamental-filters';
export * from './technical-filters';
export * from './news-filters';
export * from './etf-filters';

export * from './order';
export * from './signal';
