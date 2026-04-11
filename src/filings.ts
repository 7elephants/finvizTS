/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getLatestFilings(client, ticker, options)`. Fetches a multi-row CSV
 * of recent SEC filings for a single ticker and returns each row as a typed Filing.
 *
 * | Step | Method              | Input                                     | Output                |
 * |------|---------------------|-------------------------------------------|-----------------------|
 * | 1    | getLatestFilings()  | FinvizClient, ticker: string, FilingOptions | Promise<Filing[]> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FilingOptions, Filing } from './types';

/**
 * Fetch recent SEC filings for a single ticker symbol.
 * The API returns a multi-row CSV; each row is mapped to a Filing.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param ticker  - Stock ticker symbol (e.g. "MSFT")
 * @param options - Optional sort order and filing type filter
 */
export async function getLatestFilings(
  client: FinvizClient,
  ticker: string,
  options: FilingOptions = {},
): Promise<Filing[]> {
  const rows = await client.getRecords('/export/latest-filings', {
    t: ticker,
    o: options.order,
    f: options.filter,
  });
  return rows.map((row) => ({
    filingDate: row['Filing Date'] ?? '',
    reportDate: row['Report Date'] ?? '',
    form: row['Form'] ?? '',
    description: row['Description'] ?? '',
    filing: row['Filing'] ?? '',
    document: row['Document'] ?? '',
  }));
}
