/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getNews(client, options)`. Fetches a multi-row CSV of news items
 * filtered by type and optional ticker/portfolio.
 *
 * | Step | Method    | Input                      | Output              |
 * |------|-----------|----------------------------|---------------------|
 * | 1    | getNews() | FinvizClient, NewsOptions  | Promise<FinvizResponse<NewsItem>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, NewsItem, NewsOptions } from './types';
import { NewsType } from './types';
import { parseRows, text, type RowSchema } from './parse';

/** NewsItem property → CSV column mapping. */
const NEWS_SCHEMA: RowSchema<NewsItem> = {
  title: text('Title'),
  source: text('Source'),
  date: text('Date'),
  url: text('Url'),
  category: text('Category'),
  ticker: text('Ticker'),
};

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
): Promise<FinvizResponse<NewsItem>> {
  const rows = await client.getRecords('/export/news', {
    v: options.type ?? NewsType.MARKET_BY_TIME,
    pid: options.portfolioId,
    t: options.tickers,
  });
  return parseRows(rows, NEWS_SCHEMA);
}
