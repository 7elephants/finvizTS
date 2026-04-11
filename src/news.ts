/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getNews(client, options)`. Fetches a multi-row CSV of news items
 * filtered by type and optional ticker/portfolio.
 *
 * | Step | Method    | Input                      | Output              |
 * |------|-----------|----------------------------|---------------------|
 * | 1    | getNews() | FinvizClient, NewsOptions  | Promise<NewsItem[]> |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { NewsItem, NewsOptions } from './types.js';
import { NewsType } from './types.js';

/**
 * Fetch financial news filtered by type and optionally by ticker or portfolio.
 * The API returns a multi-row CSV; each row is mapped to a NewsItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - News type, optional ticker(s) or portfolio ID
 */
export async function getNews(
  client: FinvizClient,
  options: NewsOptions = {},
): Promise<NewsItem[]> {
  const rows = await client.getRecords('/news_export.ashx', {
    v: options.type ?? NewsType.MarketByTime,
    pid: options.portfolioId,
    t: options.tickers,
  });
  return rows.map((row) => ({
    title: row['Title'] ?? '',
    source: row['Source'] ?? '',
    date: row['Date'] ?? '',
    url: row['Url'] ?? '',
    category: row['Category'] ?? '',
    ticker: row['Ticker'] ?? '',
  }));
}
