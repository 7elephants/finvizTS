/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getGroups(client, group, viewId, options)`. Fetches a multi-row CSV
 * for a market group (sector, industry, country, capitalization) with optional subgroup filter.
 *
 * | Step | Method       | Input                                              | Output              |
 * |------|--------------|----------------------------------------------------|---------------------|
 * | 1    | getGroups()  | FinvizClient, GroupName, GroupView | number, GroupOptions | Promise<FinvizResponse<Group, F>> |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, GroupName, GroupOptions, Group, FormatOption, ResponseFormat } from './types';
import { formatOf, rawResponse } from './parse';

/**
 * Fetch aggregated market data for a group (sector, industry, country, or capitalization).
 * The API returns a multi-row CSV; each row represents one group entry.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param group   - Group name (e.g. GroupName.Sector)
 * @param viewId  - View ID controlling which fields are returned (e.g. GroupView.Overview)
 * @param options - Optional subgroup filter and column selection, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getGroups<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  group: GroupName,
  viewId: number,
  options: GroupOptions & FormatOption<F> = {},
): Promise<FinvizResponse<Group, F>> {
  const rows = await client.getRecords('/export/groups', {
    g: group,
    v: viewId,
    sg: options.subgroup,
    c: options.fields?.join(','),
  });
  return rawResponse(rows, formatOf(client, options));
}
