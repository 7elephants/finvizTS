/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getQuote(client, ticker)`. Fetches a two-row CSV (headers + values)
 * for a single ticker and returns it as a flat key/value record.
 *
 * | Step | Method     | Input                        | Output             |
 * |------|------------|------------------------------|--------------------|
 * | 1    | getQuote() | FinvizClient, ticker: string | Promise<QuoteData> |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { QuoteData } from './types.js';

/**
 * Fetch fundamental and price data for a single ticker symbol.
 * The API returns a two-row CSV (header + values); the result is a flat key/value record.
 *
 * @param client - Authenticated FinvizClient instance
 * @param ticker - Stock ticker symbol (e.g. "AAPL")
 */
export async function getQuote(client: FinvizClient, ticker: string): Promise<QuoteData> {
  return client.getRecord('/api/quote.ashx', { t: ticker });
}
