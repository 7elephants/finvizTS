/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper called by getFutures() (futures.ts), getForex() (forex.ts) and
 * getCrypto() (crypto.ts). The three endpoints share one request/response shape — this is not
 * part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                  | Input                                      | Output                      |
 * |------|--------------------------|----------------------------------------------|------------------------------|
 * | 1    | buildSortParam()        | order?, orderDirection?                     | `sort` query param          |
 * | 2    | client.getRecords()     | path, sort + extraParams                    | CSV row records             |
 * | 3    | parseRows()             | rows, performanceSchema(perfColumn)         | Promise<FinvizResponse<PerformanceItem, F>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, PerformanceItem, PerformanceOptions, ForexOptions, FormatOption, ResponseFormat } from './types';

import { formatOf, number, parseRows, text, type RowSchema } from './parse';
import { buildSortParam } from './utils';

/** Endpoint paths served by getPerformanceItems(). */
type PerformancePath =
  | '/export/futures/performance'
  | '/export/forex/performance'
  | '/export/crypto/performance';

/**
 * Build the PerformanceItem property → CSV column mapping for the given performance header
 * prefix (`Performance`, or `Performance in Pips` for forex pips).
 */
function performanceSchema(perfColumn: string): RowSchema<PerformanceItem> {
  return {
    ticker: text('Ticker'),
    name: text('Name'),
    price: number('Price'),
    perf5Min: number(`${perfColumn} (5 Minutes)`),
    perf1Hour: number(`${perfColumn} (1 Hour)`),
    perfDay: number(`${perfColumn} (Day)`),
    perfWeek: number(`${perfColumn} (Week)`),
    perfMonth: number(`${perfColumn} (Month)`),
    perfMonthToDate: number(`${perfColumn} (Month To Date)`),
    perfQuarter: number(`${perfColumn} (Quarter)`),
    perfHalfYear: number(`${perfColumn} (Half Year)`),
    perfYearToDate: number(`${perfColumn} (Year To Date)`),
    perfYear: number(`${perfColumn} (Year)`),
  };
}

/**
 * Fetch futures, forex or crypto performance rows, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a PerformanceItem via
 * parseRows().
 *
 * @param client  - Authenticated FinvizClient instance
 * @param path    - `/export/futures/performance`, `/export/forex/performance` or
 *                  `/export/crypto/performance`
 * @param options - Sort options, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 * @param extraParams - Endpoint-specific query params (e.g. forex `unit`, crypto `c`)
 * @param perfColumn  - CSV header prefix of the performance columns (forex pips uses
 *                      `Performance in Pips`)
 *
 * Blank cells (e.g. newly listed crypto with no long-range history) are `undefined`.
 */
export async function getPerformanceItems<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  path: PerformancePath,
  options: (PerformanceOptions | ForexOptions) & FormatOption<F>,
  extraParams: Record<string, string | undefined> = {},
  perfColumn = 'Performance',
): Promise<FinvizResponse<PerformanceItem, F>> {
  const rows = await client.getRecords(path, {
    ...extraParams,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return parseRows(rows, performanceSchema(perfColumn), formatOf(client, options));
}
