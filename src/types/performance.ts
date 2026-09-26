/*
 * ---
 * Workflow Summary
 * Invocation: Imported by types/futures.ts, types/forex.ts and types/crypto.ts (which alias these
 * as FuturesOptions/FuturesItem, ForexOptions/ForexItem and CryptoOptions/CryptoItem), and
 * re-exported from types/index.ts. Also imported by src/performance.ts, the internal
 * implementation shared by getFutures()/getForex()/getCrypto().
 *
 * | Step | Description                                | Input | Output                            |
 * |------|---------------------------------------------|-------|------------------------------------|
 * | 1    | Export PerformanceOrderType const + type    | —     | Typed sort column constants        |
 * | 2    | Export PerformanceOptions interface         | —     | Typed request options              |
 * | 3    | Export PerformanceItem interface            | —     | Typed performance row              |
 * ---
 */

import type { SortDirection } from '.';

/** Valid sort columns for the futures, forex and crypto performance endpoints. */
export const PerformanceOrderType = {
  TICKER: 'ticker',
  NAME: 'name',
  PRICE: 'last',
  PERF_5_MIN: 'perf5minPct',
  PERF_HOUR: 'perfHourPct',
  PERF_DAY: 'perfDayPct',
  PERF_WEEK: 'perfWeekPct',
  PERF_MONTH: 'perfMonthPct',
  PERF_MONTH_TO_DATE: 'perfMtdPct',
  PERF_QUARTER: 'perfQuarterPct',
  PERF_HALF_YEAR: 'perfHalfYearPct',
  PERF_YEAR_TO_DATE: 'perfYtdPct',
  PERF_YEAR: 'perfYearPct',
} as const;
export type PerformanceOrderType = (typeof PerformanceOrderType)[keyof typeof PerformanceOrderType];

/**
 * Options shared by the futures, forex and crypto performance endpoints (same request and
 * response shape). `FuturesOptions`/`ForexOptions`/`CryptoOptions` alias this.
 */
export interface PerformanceOptions {
  /** Column to sort by. Finviz defaults to day performance, best first. */
  order?: PerformanceOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/**
 * A single futures, forex or crypto performance row. Performance values are percentages
 * (pips for forex requested with `unit: 'pips'`). Blank CSV cells (e.g. newly listed crypto with
 * no long-range history) are `undefined`. `FuturesItem`/`ForexItem`/`CryptoItem` alias this.
 */
export interface PerformanceItem {
  /** Instrument ticker, e.g. `@GC` (futures/crypto) or `EUR/USD` (forex). */
  ticker: string | undefined;
  /** Instrument name. */
  name: string | undefined;
  /** Last price. */
  price: number | undefined;
  /** Performance over the last 5 minutes. */
  perf5Min: number | undefined;
  /** Performance over the last hour. */
  perf1Hour: number | undefined;
  /** Performance over the day. */
  perfDay: number | undefined;
  /** Performance over the week. */
  perfWeek: number | undefined;
  /** Performance over the month. */
  perfMonth: number | undefined;
  /** Performance month to date. */
  perfMonthToDate: number | undefined;
  /** Performance over the quarter. */
  perfQuarter: number | undefined;
  /** Performance over the half year. */
  perfHalfYear: number | undefined;
  /** Performance year to date. */
  perfYearToDate: number | undefined;
  /** Performance over the year. */
  perfYear: number | undefined;
}
