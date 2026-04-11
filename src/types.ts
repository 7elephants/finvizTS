/*
 * ---
 * Workflow Summary
 * Invocation: Imported by all other modules for shared type definitions. No runtime execution.
 *
 * | Step | Description                                | Input           | Output                  |
 * |------|--------------------------------------------|-----------------|-------------------------|
 * | 1    | Export FinvizClientOptions                 | Consumer config | Typed options object    |
 * | 2    | Export domain types (Quote, Screener, etc) | API responses   | Typed response shapes   |
 * | 3    | Export ScreenerView and ScreenerField      | —               | Typed screener constants|
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
  /** Filter string as it appears in the Finviz screener URL (e.g. "exch_nasd,geo_usa") */
  filters?: string;
  /** Sort order column (prefix with "-" for descending) */
  order?: string;
  /** Starting row index for pagination (1-based) */
  rows?: number;
  /** Signal filter (e.g. "ta_topgainers") */
  signal?: string;
}

// ---------------------------------------------------------------------------
// Quote types
// ---------------------------------------------------------------------------

/** Valid period/interval values for the quote endpoint. */
export const QuotePeriod = {
  Minute1: 'i1',
  Minute3: 'i3',
  Minute5: 'i5',
  Minute15: 'i15',
  Minute30: 'i30',
  Hour1: 'h',
  Daily: 'd',
  Weekly: 'w',
  Monthly: 'm',
} as const;
export type QuotePeriod = (typeof QuotePeriod)[keyof typeof QuotePeriod];

/** Valid range values for the quote endpoint. */
export const QuoteRange = {
  Day1: 'd1',
  Day5: 'd5',
  Month1: 'm1',
  Month3: 'm3',
  Month6: 'm6',
  Year1: 'y1',
  Year2: 'y2',
  Year5: 'y5',
  YTD: 'ytd',
  Max: 'max',
} as const;
export type QuoteRange = (typeof QuoteRange)[keyof typeof QuoteRange] | `range_${string}` | `prev_${string}`;

/** Options for a quote request. */
export interface QuoteOptions {
  /** Period/interval of quote data (required). */
  period: QuotePeriod;
  /** Range of time to return data for (optional). */
  range?: QuoteRange | string;
}

/** A single OHLCV row returned by the quote endpoint. */
export interface Quote {
  Date: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
  Volume: string;
}

// ---------------------------------------------------------------------------
// News types
// ---------------------------------------------------------------------------

/** Valid news type values for the news endpoint. */
export const NewsType = {
  MarketByTime: 1,
  MarketBySource: 2,
  Stock: 3,
  ETF: 4,
  Crypto: 5,
} as const;
export type NewsType = (typeof NewsType)[keyof typeof NewsType];

/** Options for a news request. */
export interface NewsOptions {
  /** Type of news to retrieve (defaults to MarketByTime). */
  type?: NewsType;
  /** Portfolio ID to filter news by (only for Stock or ETF type). */
  portfolioId?: string;
  /** Comma-separated ticker symbols to filter news by (only for Stock, ETF, or Crypto type). */
  tickers?: string;
}

/** A single news item returned by the news endpoint. */
export interface NewsItem {
  title: string;
  source: string;
  date: string;
  url: string;
  category: string;
  ticker: string;
}

// ---------------------------------------------------------------------------
// Portfolio types
// ---------------------------------------------------------------------------

/** Options for a portfolio request. */
export interface PortfolioOptions {
  /** Column to sort by (prefix with "-" for descending, e.g. "-price"). */
  order?: string;
  /** Column indices to include (comma-separated list maps to the `c` query param). */
  fields?: number[];
}

/** A single row returned by the portfolio endpoint. */
export type Portfolio = Record<string, string>;

// ---------------------------------------------------------------------------
// Groups types
// ---------------------------------------------------------------------------

/** Valid group names for the groups endpoint. */
export const GroupName = {
  Sector: 'sector',
  Industry: 'industry',
  Country: 'country',
  Capitalization: 'capitalization',
} as const;
export type GroupName = (typeof GroupName)[keyof typeof GroupName];

/** Valid industry subgroup names for the groups endpoint. */
export const IndustrySubgroup = {
  BasicMaterials: 'basicmaterials',
  CommunicationServices: 'communicationservices',
  ConsumerCyclical: 'consumercyclical',
  ConsumerDefensive: 'consumerdefensive',
  Energy: 'energy',
  Financial: 'financial',
  Healthcare: 'healthcare',
  Industrials: 'industrials',
  RealEstate: 'realestate',
  Technology: 'technology',
  Utilities: 'utilities',
} as const;
export type IndustrySubgroup = (typeof IndustrySubgroup)[keyof typeof IndustrySubgroup];

/** Valid view IDs for the groups endpoint. */
export const GroupView = {
  Overview: 110,
  Valuation: 120,
  Performance: 140,
  Custom: 150,
  PerformanceChart: 210,
  Spectrum: 310,
  Charts: 410,
  Maps: 510,
} as const;
export type GroupView = (typeof GroupView)[keyof typeof GroupView];

/** Options for a groups request. */
export interface GroupOptions {
  /** Subgroup name (only applicable for certain groups). */
  subgroup?: IndustrySubgroup | string;
  /** Column indices to include in the response. */
  fields?: number[];
}

/** A single row returned by the groups endpoint. */
export type Group = Record<string, string>;

// ---------------------------------------------------------------------------
// Latest Filings types
// ---------------------------------------------------------------------------

/** Valid filing filter values for the latest-filings endpoint. */
export const FilingFilter = {
  AnnualQuarterlyCurrent: 'annual-quarterly-current',
  InsiderEquity: 'insider-equity',
  BeneficialOwnership: 'beneficial-ownership',
  ExemptOfferings: 'exempt-offerings',
  RegistrationStatements: 'registration-statements',
  FilingReviewCorrespondence: 'filing-review-correspondence',
  SECOrdersNotices: 'sec-orders-notices',
  ProxyMaterials: 'proxy-materials',
  TrustIndentures: 'trust-indentures',
} as const;
export type FilingFilter = (typeof FilingFilter)[keyof typeof FilingFilter];

/** Options for a latest-filings request. */
export interface FilingOptions {
  /** Column to sort by (prefix with "-" for descending, e.g. "-filingDate"). */
  order?: string;
  /** Filter by filing type. */
  filter?: FilingFilter;
}

/** A single row returned by the latest-filings endpoint. */
export interface Filing {
  filingDate: string;
  reportDate: string;
  form: string;
  description: string;
  filing: string;
  document: string;
}

// ---------------------------------------------------------------------------
// Options types
// ---------------------------------------------------------------------------

/** Valid view types for the options endpoint. */
export const OptionsViewType = {
  Prices: 'oc',
  VolatilityGreeks: 'ocv',
} as const;
export type OptionsViewType = (typeof OptionsViewType)[keyof typeof OptionsViewType];

/** Options for an options chain request. */
export interface OptionsChainOptions {
  /** Option expiration date in yyyy-mm-dd format. */
  expiration: string;
  /** View type (Prices or Volatility & Greeks). */
  viewType?: OptionsViewType;
}

/** A single row returned by the options endpoint. */
export type Option = Record<string, string>;
