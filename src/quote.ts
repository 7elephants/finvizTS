/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getQuote(client, ticker, options)`. Fetches an OHLCV time-series CSV
 * for a single ticker and returns each row as a typed Quote object.
 *
 * | Step | Method     | Input                                     | Output               |
 * |------|------------|-------------------------------------------|----------------------|
 * | 1    | getQuote() | FinvizClient, ticker: string, QuoteOptions| Promise<FinvizResponse<Quote>>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, QuoteOptions, Quote } from './types';

import { parseRows, text, type RowSchema } from './parse';

/** Quote property → CSV column mapping. */
const QUOTE_SCHEMA: RowSchema<Quote> = {
  Date: text('Date'),
  Open: text('Open'),
  High: text('High'),
  Low: text('Low'),
  Close: text('Close'),
  Volume: text('Volume'),
};

/**
 * Fetch OHLCV time-series data for a single ticker symbol.
 * The API returns a multi-row CSV (header + data rows); each row becomes a Quote.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param ticker  - Stock ticker symbol (e.g. "AAPL")
 * @param options - Period (required) and optional range
 */
export async function getQuote(
  client: FinvizClient,
  ticker: string,
  options: QuoteOptions,
): Promise<FinvizResponse<Quote>> {
  const rows = await client.getRecords('/export/stock', {
    t: ticker,
    p: options.period,
    r: options.range,
  });
  return parseRows(rows, QUOTE_SCHEMA);
}
