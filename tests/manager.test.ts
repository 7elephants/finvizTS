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
        'Portfolio Manager': 'Warren Buffett',
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

    expect(result.items).toEqual([
      {
        name: 'Berkshire Hathaway Inc',
        manager: 'Warren Buffett',
        id: '1067983',
        reportDate: new Date(2026, 2, 31),
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

  it('leaves missing/empty numeric fields undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Name: 'Some Fund',
      },
    ]);

    const result = await getManagers(client, { search: 'Some Fund' });

    expect(result.errors).toEqual([]);
    expect(result.items).toEqual([
      expect.objectContaining({
        name: 'Some Fund',
        manager: undefined,
        id: undefined,
        portfolioValue: undefined,
        numInvestments: undefined,
        newPurchases: undefined,
        soldOut: undefined,
        added: undefined,
        reduced: undefined,
        top10ConcentrationPct: undefined,
        turnOverPct: undefined,
        timeHeldTopTen: undefined,
        timeHeldAll: undefined,
      }),
    ]);
    expect(result.items[0]?.reportDate).toBeUndefined();
  });

  it('leaves empty-string numeric fields undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Name: 'Some Fund',
        'Portfolio Manager': 'Some Manager',
        'Investor ID': '123',
        'Report Date': '',
        'Portfolio Value': '',
        '# Investments': '',
        'New Purchased': '',
        'Sold Out': '',
        Added: '',
        Reduced: '',
        'Top 10 Concentration (%)': '',
        'Turnover (%)': '',
        'Time Held Top 10': '',
        'Time Held All': '',
      },
    ]);

    const result = await getManagers(client, { search: 'Some Fund' });

    expect(result.errors).toEqual([]);
    expect(result.items).toEqual([
      expect.objectContaining({
        portfolioValue: undefined,
        numInvestments: undefined,
        newPurchases: undefined,
        soldOut: undefined,
        added: undefined,
        reduced: undefined,
        top10ConcentrationPct: undefined,
        turnOverPct: undefined,
        timeHeldTopTen: undefined,
        timeHeldAll: undefined,
      }),
    ]);
  });
});
