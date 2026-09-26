/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getManagers(client, options)`. Fetches a multi-row CSV of fund
 * manager portfolios, optionally filtered by a search term and sorted by order/direction.
 *
 * | Step | Method        | Input                          | Output                  |
 * |------|---------------|---------------------------------|-------------------------|
 * | 1    | getManagers() | FinvizClient, ManagerOptions   | Promise<FinvizResponse<ManagerItem>>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, ManagerItem, ManagerOptions } from './types';

import { getFundManagerItems } from './fund-manager';

/**
 * Fetch fund manager portfolios, optionally filtered by a search term and sorted by
 * order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Search term and sort options
 */
export async function getManagers(
  client: FinvizClient,
  options: ManagerOptions = {},
): Promise<FinvizResponse<ManagerItem>> {
  return getFundManagerItems(client, '/export/managers', 'Portfolio Manager', options);
}
