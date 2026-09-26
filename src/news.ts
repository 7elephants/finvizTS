/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getNews(client, options)`. Fetches a multi-row CSV of news items
 * filtered by type and optional ticker/portfolio.
 *
 * | Step | Method    | Input                      | Output              |
 * |------|-----------|----------------------------|---------------------|
 * | 1    | getNews() | FinvizClient, NewsOptions  | Promise<FinvizResponse<NewsItem, F>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, NewsItem, NewsOptions, FormatOption, ResponseFormat } from './types';
import { NewsType } from './types';
import { formatOf, parseRows, text, type RowSchema } from './parse';

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
 * @param options - News type, optional ticker(s) or portfolio ID, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getNews<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  options: NewsOptions & FormatOption<F> = {},
): Promise<FinvizResponse<NewsItem, F>> {
  const rows = await client.getRecords('/export/news', {
    v: options.type ?? NewsType.MARKET_BY_TIME,
    pid: options.portfolioId,
    t: options.tickers,
  });
  return parseRows(rows, NEWS_SCHEMA, formatOf(client, options));
}
