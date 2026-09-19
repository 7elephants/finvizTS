/*
 * ---
 * Workflow Summary
 * Invocation: Imported by calendar.ts and re-exported from types/index.ts.
 *
 * | Step | Description                             | Input | Output                       |
 * |------|------------------------------------------|-------|-------------------------------|
 * | 1    | Export CalendarOptions interface         | —     | Typed request options         |
 * | 2    | Export Calendar response type            | —     | Typed calendar event row      |
 * | 3    | Export EarningsOrderType const + type    | —     | Typed sort column constants   |
 * | 4    | Export EarningsCalendarOptions interface | —     | Typed request options         |
 * | 5    | Export EarningsCalendarItem interface    | —     | Typed earnings calendar row   |
 * | 6    | Export DividendsCalendarOptions interface| —     | Typed request options         |
 * | 7    | Export DividendsCalendarItem interface   | —     | Typed dividends calendar row  |
 * ---
 */

import { SortDirection } from '.';

/** Options for an economic calendar request. */
export interface CalendarOptions {
  /** Start date of the range to fetch events for. */
  from: Date;
  /** Optional end date of the range to fetch events for. */
  to?: Date;
}

/** A single row returned by the economic calendar endpoint. */
export type Calendar = Record<string, string>;

/** Valid sort columns for the earnings calendar endpoint. */
export const EarningsOrderType = {
  EARNINGS_DATE: 'earningsDate',
  TICKER: 'ticker',
  COMPANY: 'company',
  MARKET_CAP: 'marketCap',
  EPS_ESTIMATE: 'epsEstimate',
  EPS_ACTUAL: 'epsActual',
  EPS_SURPRISE: 'epsSurprise',
  EPS_GAAP_ESTIMATE: 'epsReportedEstimate',
  EPS_GAAP_ACTUAL: 'epsReportedActual',
  EPS_GAAP_SURPRISE: 'epsReportedSurprise',
  REVENUE_ESTIMATE: 'salesEstimate',
  REVENUE_ACTUAL: 'salesActual',
  REVENUE_SURPRISE: 'salesSurprise',
  ONE_DAY_PRICE_REACTION: 'oneDayPriceReaction',
} as const;
export type EarningsOrderType = (typeof EarningsOrderType)[keyof typeof EarningsOrderType];

/** Options for an earnings calendar request. */
export interface EarningsCalendarOptions {
  /** Start date of the range to fetch earnings for (required). */
  from: Date;
  /** Optional end date of the range to fetch earnings for (max 90 days from `from`). */
  to?: Date;
  /** Column to sort by. */
  order?: EarningsOrderType;
  /** Sort direction (either '' or '-'). */
  orderDirection?: SortDirection;
}

/** A single row returned by the earnings calendar endpoint. */
export interface EarningsCalendarItem {
  date: Date;
  ticker: string;
  company: string;
  marketCap: number;
  epsEstimate: number;
  epsActual: number;
  epsSurprise: number;
  epsGaapEstimate: number;
  epsGaapActual: number;
  epsGaapSurprise: number;
  revenueEstimate: number;
  revenueActual: number;
  revenueSurprise: number;
  oneDayPriceReaction: number;
}

/** Options for a dividends calendar request. */
export interface DividendsCalendarOptions {
  /** Start date of the range to fetch dividends for (required). */
  from: Date;
  /** Optional end date of the range to fetch dividends for (max 90 days from `from`). */
  to?: Date;
}

/** A single row returned by the dividends calendar endpoint. */
export interface DividendsCalendarItem {
  ticker: string;
  company: string;
  exDate: Date;
  amount: number;
  special: number;
  dividendEstYield: number;
}

