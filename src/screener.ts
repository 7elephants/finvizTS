/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getScreener(client, options)`. Fetches a multi-row CSV from the
 * Finviz screener export endpoint and returns each row as a key/value record.
 *
 * | Step | Method        | Input                         | Output                 |
 * |------|---------------|-------------------------------|------------------------|
 * | 1    | getScreener() | FinvizClient, ScreenerOptions | Promise<FinvizResponse<Screener, F>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, ScreenerOptions, Screener, FormatOption, ResponseFormat } from './types';

import { buildFilters } from './filters';
import { buildSortParam } from './utils';
import { formatOf, rawResponse } from './parse';

/**
 * Query the Finviz screener with optional view, fields, filters, ordering, and pagination.
 * The API returns a multi-row CSV; each data row becomes a key/value record.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Screener options (view, fields, filters, order, rows, signal), plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getScreener<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  options: ScreenerOptions & FormatOption<F> = {},
): Promise<FinvizResponse<Screener, F>> {
  const rows = await client.getRecords('/export/screener', {
    v: options.view,
    c: options.fields?.join(','),
    f: Array.isArray(options.filters) ? buildFilters(options.filters) : options.filters,
    o: buildSortParam(options.order, options.orderDirection),
    r: options.rows,
    s: options.signal,
    t: Array.isArray(options.tickers) ? options.tickers.join(',') : options.tickers,
  });
  return rawResponse(rows, formatOf(client, options));
}