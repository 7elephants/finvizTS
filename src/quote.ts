/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getQuote(client, ticker)`. Fetches fundamental and price data for a
 * single ticker symbol from the Finviz quote endpoint.
 *
 * | Step | Method     | Input                         | Output             |
 * |------|------------|-------------------------------|--------------------|
 * | 1    | getQuote() | FinvizClient, ticker: string  | Promise<QuoteData> |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { QuoteData } from './types.js';

/**
 * Fetch fundamental and price data for a single ticker symbol.
 *
 * @param client - Authenticated FinvizClient instance
 * @param ticker - Stock ticker symbol (e.g. "AAPL")
 */
export async function getQuote(client: FinvizClient, ticker: string): Promise<QuoteData> {
  return client.get<QuoteData>('/api/quote.ashx', { t: ticker });
}
