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
  Overview: 111,
  Valuation: 121,
  Performance: 131,
  Ownership: 141,
  Custom: 151,
  Financial: 161,
  Technical: 171,
  ETF: 181,
  ETFPerformance: 191,
  Charts: 211,
  Basic: 311,
  News: 321,
  Snapshot: 341,
  TA: 351,
  Tickers: 411,
  Maps: 711,
} as const;

/** Union of all known screener view ID values. */
export type ScreenerView = (typeof ScreenerView)[keyof typeof ScreenerView];

// ---------------------------------------------------------------------------
// Screener field IDs
// ---------------------------------------------------------------------------

/** All documented screener field IDs for the `c` query parameter. */
export const ScreenerField = {
  No: 0,
  Ticker: 1,
  Company: 2,
  Sector: 3,
  Industry: 4,
  Country: 5,
  MarketCap: 6,
  PE: 7,
  ForwardPE: 8,
  PEG: 9,
  PS: 10,
  PB: 11,
  PCash: 12,
  PFreeCashFlow: 13,
  DividendYield: 14,
  PayoutRatio: 15,
  EPS: 16,
  EPSGrowthThisYear: 17,
  EPSGrowthNextYear: 18,
  EPSGrowthPast5Y: 19,
  EPSGrowthNext5Y: 20,
  SalesGrowthPast5Y: 21,
  EPSGrowthQtrOverQtr: 22,
  SalesGrowthQtrOverQtr: 23,
  SharesOutstanding: 24,
  SharesFloat: 25,
  InsiderOwnership: 26,
  InsiderTransactions: 27,
  InstitutionalOwnership: 28,
  InstitutionalTransactions: 29,
  ShortFloat: 30,
  ShortRatio: 31,
  ReturnOnAssets: 32,
  ReturnOnEquity: 33,
  ReturnOnInvestedCapital: 34,
  CurrentRatio: 35,
  QuickRatio: 36,
  LongTermDebtEquity: 37,
  TotalDebtEquity: 38,
  GrossMargin: 39,
  OperatingMargin: 40,
  NetProfitMargin: 41,
  PerformanceWeek: 42,
  PerformanceMonth: 43,
  PerformanceQuarter: 44,
  PerformanceHalfYear: 45,
  PerformanceYear: 46,
  PerformanceYTD: 47,
  Beta: 48,
  AverageTrueRange: 49,
  VolatilityWeek: 50,
  VolatilityMonth: 51,
  SMA20: 52,
  SMA50: 53,
  SMA200: 54,
  High50Day: 55,
  Low50Day: 56,
  High52Week: 57,
  Low52Week: 58,
  RSI: 59,
  ChangeFromOpen: 60,
  Gap: 61,
  AnalystRecommendation: 62,
  AverageVolume: 63,
  RelativeVolume: 64,
  Price: 65,
  Change: 66,
  Volume: 67,
  EarningsDate: 68,
  TargetPrice: 69,
  IPODate: 70,
  BookValuePerShare: 73,
  CashPerShare: 74,
  Dividend: 75,
  Employees: 76,
  EPSEstimateNextQuarter: 77,
  Income: 78,
  Index: 79,
  Optionable: 80,
  PreviousClose: 81,
  Sales: 82,
  Shortable: 83,
  ShortInterest: 84,
  FloatOutstanding: 85,
  Open: 86,
  High: 87,
  Low: 88,
  AssetType: 100,
  Category: 103,
  Tags: 105,
  NetExpenseRatio: 107,
  TotalHoldings: 108,
  AUM: 109,
  NetFlows1M: 112,
  NetFlows1MPct: 113,
  NetFlows3M: 114,
  NetFlows3MPct: 115,
  NetFlowsYTD: 116,
  NetFlowsYTDPct: 117,
  Return1Y: 120,
  Return3Y: 121,
  Return5Y: 122,
  AllTimeHigh: 125,
  AllTimeLow: 126,
  EPSSurprise: 127,
  RevenueSurprise: 128,
  Exchange: 129,
  DividendTTM: 130,
  DividendExDate: 131,
  EPSYoYTTM: 132,
  SalesYoYTTM: 133,
  Range52Week: 134,
  NewsTime: 135,
  NewsURL: 136,
  NewsTitle: 137,
  Performance3Y: 138,
  Performance5Y: 139,
  Performance10Y: 140,
  EPSGrowthPast3Y: 142,
  SalesGrowthPast3Y: 143,
  EnterpriseValue: 144,
  EVEBITDA: 145,
  EVSales: 146,
  DividendGrowth1Y: 147,
  DividendGrowth3Y: 148,
  DividendGrowth5Y: 149,
  DailyDigest: 150,
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
   * Use the `ScreenerView` constants (e.g. `ScreenerView.Overview`) or a custom numeric ID.
   */
  view?: number;
  /**
   * Columns to include in the response. Maps to the `c` query param as a comma-separated list.
   * Use the `ScreenerField` constants (e.g. `ScreenerField.Ticker`, `ScreenerField.Price`).
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
  /** Sort order column (prefix with "-" for descending) */
  order?: string;
  /** Starting row index for pagination (1-based) */
  rows?: number;
  /** Signal filter (e.g. "ta_topgainers") */
  signal?: string;
}

// ---------------------------------------------------------------------------
// Filter imports
// ---------------------------------------------------------------------------

export * from './descriptive-filters';
export * from './fundamental-filters';
export * from './technical-filters';
export * from './news-filters';
export * from './etf-filters';