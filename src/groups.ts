/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getGroups(client, group, viewId, options)`. Fetches a multi-row CSV
 * for a market group (sector, industry, country, capitalization) with optional subgroup filter.
 *
 * | Step | Method       | Input                                              | Output              |
 * |------|--------------|----------------------------------------------------|---------------------|
 * | 1    | getGroups()  | FinvizClient, GroupName, GroupView | number, GroupOptions | Promise<GroupRow[]> |
 * ---
 */

import type { FinvizClient } from './client.js';
import type { GroupName, GroupOptions, GroupRow, GroupView } from './types.js';

/**
 * Fetch aggregated market data for a group (sector, industry, country, or capitalization).
 * The API returns a multi-row CSV; each row represents one group entry.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param group   - Group name (e.g. GroupName.Sector)
 * @param viewId  - View ID controlling which fields are returned (e.g. GroupView.Overview)
 * @param options - Optional subgroup filter and column selection
 */
export async function getGroups(
  client: FinvizClient,
  group: GroupName,
  viewId: GroupView | number,
  options: GroupOptions = {},
): Promise<GroupRow[]> {
  return client.getRecords('/grp_export.ashx', {
    g: group,
    v: viewId,
    sg: options.subgroup,
    c: options.fields?.join(','),
  });
}
