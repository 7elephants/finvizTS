/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getNews(client, options)`. Fetches financial news items, optionally
 * filtered by ticker symbol.
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
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Optional ticker filter
 */
export async function getNews(
  client: FinvizClient,
  options: NewsOptions = {},
): Promise<NewsItem[]> {
  return client.get<NewsItem[]>('/api/news.ashx', {
    t: options.ticker,
  });
}
