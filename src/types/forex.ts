/*
 * ---
 * Workflow Summary
 * Invocation: Imported by forex.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                  | Input | Output                        |
 * |------|-----------------------------------------------|-------|--------------------------------|
 * | 1    | Export ForexUnit const + type                 | —     | Typed performance unit values  |
 * | 2    | Export ForexPipsOrderType const + type        | —     | Typed pips sort columns        |
 * | 3    | Export ForexPercentOptions/ForexPipsOptions   | —     | Typed request options per unit |
 * | 4    | Export ForexOptions union                     | —     | Unit-checked request options   |
 * | 5    | Alias ForexItem to PerformanceItem            | —     | Typed forex performance row    |
 * ---
 */

import type { SortDirection } from '.';
import type { PerformanceItem, PerformanceOrderType } from './performance';

/** Valid `unit` values for the forex endpoint. */
export const ForexUnit = {
  PERCENT: 'pct',
  PIPS: 'pips',
} as const;
export type ForexUnit = (typeof ForexUnit)[keyof typeof ForexUnit];

/**
 * Performance sort columns valid when `unit` is `pips`. Finviz requires the sort column to
 * match the unit, so these replace the `Pct` performance columns (ticker, name and price
 * sort keys are shared with `PerformanceOrderType`).
 */
export const ForexPipsOrderType = {
  PERF_5_MIN: 'perf5minPips',
  PERF_HOUR: 'perfHourPips',
  PERF_DAY: 'perfDayPips',
  PERF_WEEK: 'perfWeekPips',
  PERF_MONTH: 'perfMonthPips',
  PERF_MONTH_TO_DATE: 'perfMtdPips',
  PERF_QUARTER: 'perfQuarterPips',
  PERF_HALF_YEAR: 'perfHalfYearPips',
  PERF_YEAR_TO_DATE: 'perfYtdPips',
  PERF_YEAR: 'perfYearPips',
} as const;
export type ForexPipsOrderType = (typeof ForexPipsOrderType)[keyof typeof ForexPipsOrderType];

/** Non-performance sort columns, valid with either unit. */
type ForexSharedOrderType = Extract<PerformanceOrderType, 'ticker' | 'name' | 'last'>;

/** Forex request options in percent (the default unit). */
export interface ForexPercentOptions {
  /** Performance unit; percent by default. */
  unit?: typeof ForexUnit.PERCENT;
  /** Column to sort by. */
  order?: PerformanceOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/** Forex request options in pips. Finviz requires the sort column to match the unit. */
export interface ForexPipsOptions {
  /** Performance unit. */
  unit: typeof ForexUnit.PIPS;
  /** Column to sort by; performance columns must be the `Pips` variants. */
  order?: ForexPipsOrderType | ForexSharedOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/**
 * Options for a forex performance request. A discriminated union on `unit`, so a sort column
 * that doesn't match the unit (e.g. `perfWeekPips` with percent) is a compile-time error.
 */
export type ForexOptions = ForexPercentOptions | ForexPipsOptions;

/**
 * A single forex performance row returned by the forex endpoint. Performance values are in
 * pips when the request used `unit: 'pips'`, otherwise percent.
 */
export type ForexItem = PerformanceItem;
