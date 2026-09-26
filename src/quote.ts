/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getQuote(client, ticker, options)`. Fetches an OHLCV time-series CSV
 * for a single ticker and returns each row as a typed Quote object.
 *
 * | Step | Method     | Input                                     | Output               |
 * |------|------------|-------------------------------------------|----------------------|
 * | 1    | getQuote() | FinvizClient, ticker: string, QuoteOptions| Promise<FinvizResponse<Quote, F>>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, QuoteOptions, Quote, FormatOption, ResponseFormat } from './types';

import { formatOf, parseRows, text, type RowSchema } from './parse';

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
 * @param options - Period (required) and optional range, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getQuote<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  ticker: string,
  options: QuoteOptions & FormatOption<F>,
): Promise<FinvizResponse<Quote, F>> {
  const rows = await client.getRecords('/export/stock', {
    t: ticker,
    p: options.period,
    r: options.range,
  });
  return parseRows(rows, QUOTE_SCHEMA, formatOf(client, options));
}
