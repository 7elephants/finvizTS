/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/manager.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                           | Output                     |
 * |------|------------------------------------------------|---------------------------------|----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()                       | Controlled mock            |
 * | 2    | Call getManagers with request options          | ManagerOptions                  | Forwarded params           |
 * | 3    | Assert getRecords was called with correct args | Captured call args              | Passing assertions         |
 * | 4    | Assert response mapping to ManagerItem shape   | Mock CSV row records            | Normalized ManagerItem[]   |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getManagers } from '../src/manager';
import { ManagerFundOrderType, SortDirection } from '../src/types';

describe('getManagers', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the managers endpoint and no filters by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getManagers(client);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/managers', {
      search: undefined,
      sort: '',
    });
  });

  it('passes the search term when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getManagers(client, { search: 'Berkshire' });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/managers', {
      search: 'Berkshire',
      sort: '',
    });
  });

  it('combines order and orderDirection into the sort param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getManagers(client, {
      order: ManagerFundOrderType.PORTFOLIO_VALUE,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/managers', {
      search: undefined,
      sort: '-portfolio_value',
    });
  });

  it('omits orderDirection when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getManagers(client, { order: ManagerFundOrderType.TURNOVER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/managers',
      expect.objectContaining({ sort: 'turnover' }),
    );
  });

  it('maps CSV rows to ManagerItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Name: 'Berkshire Hathaway Inc',
        Manager: 'Warren Buffett',
        'Investor ID': '1067983',
        'Report Date': '3/31/2026',
        'Portfolio Value': '350000000000',
        '# Investments': '45',
        'New Purchased': '2',
        'Sold Out': '1',
        Added: '3',
        Reduced: '4',
        'Top 10 Concentration (%)': '85.5',
        'Turnover (%)': '5.2',
        'Time Held Top 10': '12',
        'Time Held All': '10',
      },
    ]);

    const result = await getManagers(client, { search: 'Berkshire' });

    expect(result).toEqual([
      {
        name: 'Berkshire Hathaway Inc',
        manager: 'Warren Buffett',
        id: '1067983',
        reportDate: new Date('3/31/2026'),
        portfolioValue: 350000000000,
        numInvestments: 45,
        newPurchases: 2,
        soldOut: 1,
        added: 3,
        reduced: 4,
        top10ConcentrationPct: 85.5,
        turnOverPct: 5.2,
        timeHeldTopTen: 12,
        timeHeldAll: 10,
      },
    ]);
  });

  it('defaults missing/empty numeric fields to zero', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Name: 'Some Fund',
      },
    ]);

    const result = await getManagers(client, { search: 'Some Fund' });

    expect(result).toEqual([
      expect.objectContaining({
        name: 'Some Fund',
        manager: '',
        id: '',
        portfolioValue: 0,
        numInvestments: 0,
        newPurchases: 0,
        soldOut: 0,
        added: 0,
        reduced: 0,
        top10ConcentrationPct: 0,
        turnOverPct: 0,
        timeHeldTopTen: 0,
        timeHeldAll: 0,
      }),
    ]);
    expect(result[0]!.reportDate.getTime()).toBeNaN();
  });
});
