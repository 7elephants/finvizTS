/*
 * ---
 * Workflow Summary
 * Invocation: Imported by portfolio.ts and re-exported from types/index.ts.
 *
 * | Step | Description                         | Input | Output                 |
 * |------|-------------------------------------|-------|------------------------|
 * | 1    | Export PortfolioOptions interface   | —     | Typed request options  |
 * | 2    | Export Portfolio response type      | —     | Typed portfolio row    |
 * ---
 */

/** Options for a portfolio request. */
export interface PortfolioOptions {
  /** Column to sort by. */
  order?: string;
  /** Sort direction (either '' or '-'). */
  orderDirection?: string;
  /** Column indices to include (comma-separated list maps to the `c` query param). */
  fields?: number[];
}

/** All documented portfolio field IDs for the `c` query parameter. */
export const PortfolioField = {
  TICKER: 0,
  COMPANY: 1,
  PRICE: 2,
  CHANGE_PERCENT: 3,
  VOLUME: 4,
  TRANSACTION: 5,
  DATE: 6,
  SHARES: 7,
  COST: 8,
  MARKET_VALUE: 9,
  GAIN: 10,
  GAIN_PERCENT: 11,
  CHANGE: 12,
} as const;

/** Union of all known portfolio field ID values. */
export type PortfolioField = (typeof PortfolioField)[keyof typeof PortfolioField];

/** All documented portfolio sort column values for the `o` query parameter. */
export const PortfolioOrder = {
  TICKER: 'ticker',
  COMPANY: 'company',
  PRICE: 'price',
  CHANGE_PERCENT: 'changepct',
  VOLUME: 'volume',
} as const;

/** Union of all known portfolio order values. */
export type PortfolioOrder = (typeof PortfolioOrder)[keyof typeof PortfolioOrder];

/** A single row returned by the portfolio endpoint. */
export type Portfolio = Record<string, string>;
