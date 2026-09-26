/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getLatestFilings(client, ticker, options)`. Fetches a multi-row CSV
 * of recent SEC filings for a single ticker and returns each row as a typed Filing.
 *
 * | Step | Method              | Input                                     | Output                |
 * |------|---------------------|-------------------------------------------|-----------------------|
 * | 1    | getLatestFilings()  | FinvizClient, ticker: string, FilingOptions | Promise<FinvizResponse<Filing>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, FilingOptions, Filing } from './types';

import { buildSortParam } from './utils';
import { parseRows, text, type RowSchema } from './parse';

/** Filing property → CSV column mapping. */
const FILING_SCHEMA: RowSchema<Filing> = {
  filingDate: text('Filing Date'),
  reportDate: text('Report Date'),
  form: text('Form'),
  description: text('Description'),
  filing: text('Filing'),
  document: text('Document'),
};

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
): Promise<FinvizResponse<Filing>> {
  const rows = await client.getRecords('/export/latest-filings', {
    t: ticker,
    o: buildSortParam(options.order, options.orderDirection),
    f: options.filter,
  });
  return parseRows(rows, FILING_SCHEMA);
}
