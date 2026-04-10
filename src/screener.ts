/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getScreener(client, options)`. Queries the Finviz screener endpoint
 * with optional filters, view, order, and pagination parameters.
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
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Screener filter and display options
 */
export async function getScreener(
  client: FinvizClient,
  options: ScreenerOptions = {},
): Promise<ScreenerRow[]> {
  return client.get<ScreenerRow[]>('/api/screener.ashx', {
    f: options.filters,
    v: options.view,
    o: options.order,
    r: options.rows,
    s: options.signal,
  });
}
