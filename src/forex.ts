/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getForex(client, options)`. Fetches a multi-row CSV of forex performance
 * (price and 5-minute to 1-year performance), optionally sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                 |
 * |------|------------|-------------------------------|------------------------|
 * | 1    | getForex() | FinvizClient, ForexOptions    | Promise<FinvizResponse<ForexItem>>    |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, ForexItem, ForexOptions } from './types';

import { ForexUnit } from './types';
import { getPerformanceItems } from './performance';

/**
 * Fetch forex performance, in percent or pips, optionally sorted by order/direction. With
 * `unit: 'pips'` the CSV performance headers read `Performance in Pips (…)`.
 * The API returns a multi-row CSV; each row is mapped to a ForexItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Unit and sort options
 */
export async function getForex(
  client: FinvizClient,
  options: ForexOptions = {},
): Promise<FinvizResponse<ForexItem>> {
  const isPips = options.unit === ForexUnit.PIPS;
  return getPerformanceItems(
    client,
    '/export/forex/performance',
    options,
    { unit: options.unit },
    isPips ? 'Performance in Pips' : 'Performance',
  );
}
