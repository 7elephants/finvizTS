/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getQuote(client, ticker, options)`. Fetches an OHLCV time-series CSV
 * for a single ticker and returns each row as a typed QuoteRow object.
 *
 * | Step | Method     | Input                                     | Output               |
 * |------|------------|-------------------------------------------|----------------------|
 * | 1    | getQuote() | FinvizClient, ticker: string, QuoteOptions| Promise<QuoteRow[]>  |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { QuoteOptions, QuoteRow } from './types.js';

/**
 * Fetch OHLCV time-series data for a single ticker symbol.
 * The API returns a multi-row CSV (header + data rows); each row becomes a QuoteRow.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param ticker  - Stock ticker symbol (e.g. "AAPL")
 * @param options - Period (required) and optional range
 */
export async function getQuote(
  client: FinvizClient,
  ticker: string,
  options: QuoteOptions,
): Promise<QuoteRow[]> {
  const rows = await client.getRecords('/quote_export.ashx', {
    t: ticker,
    p: options.period,
    r: options.range,
  });
  return rows.map((row) => ({
    Date: row['Date'] ?? '',
    Open: row['Open'] ?? '',
    High: row['High'] ?? '',
    Low: row['Low'] ?? '',
    Close: row['Close'] ?? '',
    Volume: row['Volume'] ?? '',
  }));
}
