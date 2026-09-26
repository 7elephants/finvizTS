/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getForex(client, options)`. Fetches a multi-row CSV of forex performance
 * (price and 5-minute to 1-year performance), optionally sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                 |
 * |------|------------|-------------------------------|------------------------|
 * | 1    | getForex() | FinvizClient, ForexOptions    | Promise<ForexItem[]>    |
 * ---
 */

import type { FinvizClient } from './client';
import type { ForexItem, ForexOptions } from './types';

import { getPerformanceItems } from './performance';

/**
 * Fetch forex performance, optionally sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a ForexItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Sort options
 */
export async function getForex(
  client: FinvizClient,
  options: ForexOptions = {},
): Promise<ForexItem[]> {
  return getPerformanceItems(client, '/export/forex/performance', options);
}
