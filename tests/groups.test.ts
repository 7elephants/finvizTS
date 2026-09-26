/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/groups.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input               | Output                          |
 * |------|-------------------------------------------------|---------------------|----------------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()           | Controlled mock                 |
 * | 2    | Call getGroups with group, view and options    | GroupName, GroupView, GroupOptions | Forwarded params |
 * | 3    | Assert records are wrapped unchanged           | Mock CSV row records | `{ items, errors: [] }`        |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getGroups } from '../src/groups';
import { GroupName, GroupView, IndustrySubgroup } from '../src/types';

describe('getGroups', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the group and view and no optional params by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getGroups(client, GroupName.SECTOR, GroupView.OVERVIEW);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/groups', {
      g: 'sector',
      v: 110,
      sg: undefined,
      c: undefined,
    });
  });

  it('passes subgroup and comma-joined fields', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getGroups(client, GroupName.INDUSTRY, GroupView.VALUATION, {
      subgroup: IndustrySubgroup.TECHNOLOGY,
      fields: [0, 1, 2],
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/groups', {
      g: 'industry',
      v: 120,
      sg: 'technology',
      c: '0,1,2',
    });
  });

  it('returns the records unchanged with no errors', async () => {
    const rows = [{ 'No.': '1', Name: 'Basic Materials', 'P/E': '' }];
    mockGetRecords.mockResolvedValueOnce(rows);

    const result = await getGroups(client, GroupName.SECTOR, GroupView.OVERVIEW);

    expect(result).toEqual({ items: rows, errors: [] });
  });
});
