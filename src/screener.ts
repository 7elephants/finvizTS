/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getScreener(client, options)`. Fetches a multi-row CSV from the
 * Finviz screener export endpoint and returns each row as a key/value record.
 *
 * | Step | Method        | Input                         | Output                 |
 * |------|---------------|-------------------------------|------------------------|
 * | 1    | getScreener() | FinvizClient, ScreenerOptions | Promise<Screener[]> |
 * ---
 */

import type { FinvizClient } from './client';
import type { ScreenerOptions, Screener } from './types';

import { buildFilters } from './filters';

/**
 * Query the Finviz screener with optional view, fields, filters, ordering, and pagination.
 * The API returns a multi-row CSV; each data row becomes a key/value record.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Screener options (view, fields, filters, order, rows, signal)
 */
export async function getScreener(
  client: FinvizClient,
  options: ScreenerOptions = {},
): Promise<Screener[]> {
  return client.getRecords('/export.ashx', {
    v: options.view,
    c: options.fields?.join(','),
    f: Array.isArray(options.filters) ? buildFilters(options.filters) : options.filters,
    o: options.order,
    r: options.rows,
    s: options.signal,
  });
}