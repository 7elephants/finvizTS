/*
 * ---
 * Workflow Summary
 * Invocation: Imported by forex.ts and re-exported from types/index.ts.
 *
 * | Step | Description                                  | Input | Output                        |
 * |------|-----------------------------------------------|-------|--------------------------------|
 * | 1    | Export ForexUnit const + type                 | —     | Typed performance unit values  |
 * | 2    | Export ForexPipsOrderType const + type        | —     | Typed pips sort columns        |
 * | 3    | Export ForexOptions interface                 | —     | Typed request options          |
 * | 4    | Alias ForexItem to PerformanceItem            | —     | Typed forex performance row    |
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

/** Options for a forex performance request. */
export interface ForexOptions {
  /** Performance unit; percent by default. Sort columns must match the unit. */
  unit?: ForexUnit;
  /** Column to sort by (use `ForexPipsOrderType` performance columns with `unit: 'pips'`). */
  order?: PerformanceOrderType | ForexPipsOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/** A single forex performance row returned by the forex endpoint. */
export type ForexItem = PerformanceItem;
