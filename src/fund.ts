/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getFunds(client, options)`. Fetches a multi-row CSV of fund
 * portfolios, optionally filtered by a search term and sorted by order/direction.
 *
 * | Step | Method     | Input                        | Output                |
 * |------|------------|-------------------------------|-----------------------|
 * | 1    | getFunds() | FinvizClient, FundOptions    | Promise<FinvizResponse<FundItem>>   |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, FundItem, FundOptions } from './types';

import { getFundManagerItems } from './fund-manager';

/**
 * Fetch fund portfolios, optionally filtered by a search term and sorted by order/direction.
 * The API returns a multi-row CSV; each row is mapped to a FundItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Search term and sort options
 */
export async function getFunds(
  client: FinvizClient,
  options: FundOptions = {},
): Promise<FinvizResponse<FundItem>> {
  return getFundManagerItems(client, '/export/funds', 'Fund', options);
}
