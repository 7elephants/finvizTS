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
  /** Column to sort by (prefix with "-" for descending, e.g. "-price"). */
  order?: string;
  /** Column indices to include (comma-separated list maps to the `c` query param). */
  fields?: number[];
}

/** All documented portfolio field IDs for the `c` query parameter. */
export const PortfolioField = {
  Ticker: 0,
  Company: 1,
  Price: 2,
  ChangePercent: 3,
  Volume: 4,
  Transaction: 5,
  Date: 6,
  Shares: 7,
  Cost: 8,
  MarketValue: 9,
  Gain: 10,
  GainPercent: 11,
  Change: 12,
} as const;

/** Union of all known screener field ID values. */
export type PortfolioField = (typeof PortfolioField)[keyof typeof PortfolioField];


/** All documented portfolio field IDs for the `c` query parameter. */
export const PortfolioOrder = {
  Ticker: 'ticker',
  Company: 'company',
  Price: 'price',
  ChangePercent: 'changepct',
  Volume: 'volume',
} as const;

/** Union of all known screener field ID values. */
export type PortfolioOrder = (typeof PortfolioOrder)[keyof typeof PortfolioOrder];

/** A single row returned by the portfolio endpoint. */
export type Portfolio = Record<string, string>;
