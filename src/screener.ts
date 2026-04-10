/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getScreener(client, options)`. Fetches a multi-row CSV from the
 * Finviz screener endpoint and returns each row as a key/value record.
 *
 * | Step | Method        | Input                         | Output                 |
 * |------|---------------|-------------------------------|------------------------|
 * | 1    | getScreener() | FinvizClient, ScreenerOptions | Promise<ScreenerRow[]> |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { ScreenerOptions, ScreenerRow } from './types.js';

/**
 * Query the Finviz screener with optional filters, ordering, and pagination.
 * The API returns a multi-row CSV; each data row becomes a key/value record.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Screener filter and display options
 */
export async function getScreener(
  client: FinvizClient,
  options: ScreenerOptions = {},
): Promise<ScreenerRow[]> {
  return client.getRecords('/api/screener.ashx', {
    f: options.filters,
    v: options.view,
    o: options.order,
    r: options.rows,
    s: options.signal,
  });
}
