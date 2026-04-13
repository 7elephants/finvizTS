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

/** A single row returned by the portfolio endpoint. */
export type Portfolio = Record<string, string>;
