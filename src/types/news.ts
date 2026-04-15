/*
 * ---
 * Workflow Summary
 * Invocation: Imported by news.ts and re-exported from types/index.ts.
 *
 * | Step | Description                     | Input | Output                 |
 * |------|---------------------------------|-------|------------------------|
 * | 1    | Export NewsType const + type    | —     | Typed news type enum   |
 * | 2    | Export NewsOptions interface    | —     | Typed request options  |
 * | 3    | Export NewsItem interface       | —     | Typed news row         |
 * ---
 */

/** Valid news type values for the news endpoint. */
export const NewsType = {
  MARKET_BY_TIME: 1,
  MARKET_BY_SOURCE: 2,
  STOCK: 3,
  ETF: 4,
  CRYPTO: 5,
} as const;
export type NewsType = (typeof NewsType)[keyof typeof NewsType];

/** Options for a news request. */
export interface NewsOptions {
  /** Type of news to retrieve (defaults to MARKET_BY_TIME). */
  type?: NewsType;
  /** Portfolio ID to filter news by (only for STOCK or ETF type). */
  portfolioId?: string;
  /** Comma-separated ticker symbols to filter news by (only for STOCK, ETF, or CRYPTO type). */
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
