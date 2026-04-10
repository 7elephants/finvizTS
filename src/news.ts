/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getNews(client, options)`. Fetches a multi-row CSV of news items,
 * optionally filtered by ticker symbol.
 *
 * | Step | Method    | Input                      | Output              |
 * |------|-----------|----------------------------|---------------------|
 * | 1    | getNews() | FinvizClient, NewsOptions  | Promise<NewsItem[]> |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { NewsItem, NewsOptions } from './types.js';

/**
 * Fetch financial news, optionally filtered by ticker symbol.
 * The API returns a multi-row CSV; each row is mapped to a NewsItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Optional ticker filter
 */
export async function getNews(
  client: FinvizClient,
  options: NewsOptions = {},
): Promise<NewsItem[]> {
  const rows = await client.getRecords('/api/news.ashx', { t: options.ticker });
  return rows.map((row) => ({
    date: row['Date'] ?? '',
    title: row['Title'] ?? '',
    source: row['Source'] ?? '',
    url: row['URL'] ?? '',
  }));
}
