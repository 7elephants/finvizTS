/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/fund.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                           | Output                     |
 * |------|------------------------------------------------|---------------------------------|----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()                       | Controlled mock            |
 * | 2    | Call getFunds with request options             | FundOptions                     | Forwarded params           |
 * | 3    | Assert getRecords was called with correct args | Captured call args              | Passing assertions         |
 * | 4    | Assert response mapping to FundItem shape      | Mock CSV row records            | Normalized FundItem[]      |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getFunds } from '../src/fund';
import { ManagerFundOrderType, SortDirection } from '../src/types';

describe('getFunds', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the funds endpoint and no filters by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFunds(client);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/funds', {
      search: undefined,
      sort: '',
    });
  });

  it('passes the search term when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFunds(client, { search: 'Vanguard' });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/funds', {
      search: 'Vanguard',
      sort: '',
    });
  });

  it('combines order and orderDirection into the sort param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFunds(client, {
      order: ManagerFundOrderType.PORTFOLIO_VALUE,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/funds', {
      search: undefined,
      sort: '-portfolio_value',
    });
  });

  it('omits orderDirection when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFunds(client, { order: ManagerFundOrderType.TURNOVER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/funds',
      expect.objectContaining({ sort: 'turnover' }),
    );
  });

  it('maps CSV rows to FundItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Name: 'Vanguard Total Stock Market Index Fund',
        Fund: 'Vanguard Group',
        'Investor ID': '2011124',
        'Report Date': '3/31/2026',
        'Portfolio Value': '1500000000000',
        '# Investments': '3800',
        'New Purchased': '50',
        'Sold Out': '30',
        Added: '900',
        Reduced: '850',
        'Top 10 Concentration (%)': '25.1',
        'Turnover (%)': '2.3',
        'Time Held Top 10': '20',
        'Time Held All': '18',
      },
    ]);

    const result = await getFunds(client, { search: 'Vanguard' });

    expect(result).toEqual([
      {
        name: 'Vanguard Total Stock Market Index Fund',
        manager: 'Vanguard Group',
        id: '2011124',
        reportDate: new Date('3/31/2026'),
        portfolioValue: 1500000000000,
        numInvestments: 3800,
        newPurchases: 50,
        soldOut: 30,
        added: 900,
        reduced: 850,
        top10ConcentrationPct: 25.1,
        turnOverPct: 2.3,
        timeHeldTopTen: 20,
        timeHeldAll: 18,
      },
    ]);
  });

  it('defaults missing/empty numeric fields to zero', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Name: 'Some Fund',
      },
    ]);

    const result = await getFunds(client, { search: 'Some Fund' });

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
