/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/insider.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                           | Output                     |
 * |------|------------------------------------------------|---------------------------------|----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()                       | Controlled mock            |
 * | 2    | Call getInsiders with request options          | InsiderOptions                  | Forwarded params           |
 * | 3    | Assert getRecords was called with correct args | Captured call args              | Passing assertions         |
 * | 4    | Assert response mapping to InsiderItem shape   | Mock CSV row records            | Normalized InsiderItem[]   |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getInsiders } from '../src/insider';
import { InsiderTransactionType, InsiderOwnerRelationshipType, InsiderOrderType, SortDirection } from '../src/types';

describe('getInsiders', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the insiders endpoint and no filters by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getInsiders(client);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/insiders', {
      t: undefined,
      tc: undefined,
      or: undefined,
      tv: undefined,
      oc: undefined,
      o: '',
    });
  });

  it('passes the ticker when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getInsiders(client, { ticker: 'AAPL' });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/insiders', {
      t: 'AAPL',
      tc: undefined,
      or: undefined,
      tv: undefined,
      oc: undefined,
      o: '',
    });
  });

  it('passes transaction type, owner relationship, minimum value, and owner CIK', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getInsiders(client, {
      type: InsiderTransactionType.SALE,
      ownerRel: InsiderOwnerRelationshipType.EXCLUDE_TEN_PERCENT,
      minimumTransactionValue: 50000,
      ownerCIK: 123456,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/insiders', {
      t: undefined,
      tc: InsiderTransactionType.SALE,
      or: InsiderOwnerRelationshipType.EXCLUDE_TEN_PERCENT,
      tv: 50000,
      oc: 123456,
      o: '',
    });
  });

  it('combines order and orderDirection into the o param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getInsiders(client, {
      order: InsiderOrderType.TRANSACTION_VALUE,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/insiders', {
      t: undefined,
      tc: undefined,
      or: undefined,
      tv: undefined,
      oc: undefined,
      o: '-transactionValue',
    });
  });

  it('omits orderDirection when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getInsiders(client, { order: InsiderOrderType.TICKER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/insiders',
      expect.objectContaining({ o: 'ticker' }),
    );
  });

  it('maps CSV rows to InsiderItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Ticker: 'AAPL',
        Owner: 'Cook Timothy D',
        'Owner CIK': '1214156',
        Relationship: 'Officer',
        Date: '4/11/2026',
        Transaction: 'Sale',
        Cost: '198.5',
        '#Shares': '50000',
        'Value ($)': '9925000',
        '#Shares Total': '3200000',
        'SEC Form 4': '4/13/2026',
        'SEC Form 4 Link': 'https://www.sec.gov/example',
      },
    ]);

    const result = await getInsiders(client, { ticker: 'AAPL' });

    expect(result).toEqual([
      {
        ticker: 'AAPL',
        owner: 'Cook Timothy D',
        ownerCIK: 1214156,
        relationship: 'Officer',
        date: new Date('4/11/2026'),
        transactionType: 'Sale',
        cost: 198.5,
        shares: 50000,
        value: 9925000,
        totalShares: 3200000,
        SECForm: new Date('4/13/2026'),
        SECFormUrl: 'https://www.sec.gov/example',
      },
    ]);
  });

  it('defaults missing/empty fields to zero values', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Ticker: 'MSFT',
      },
    ]);

    const result = await getInsiders(client, { ticker: 'MSFT' });

    expect(result).toEqual([
      expect.objectContaining({
        ticker: 'MSFT',
        owner: '',
        ownerCIK: 0,
        relationship: '',
        transactionType: '',
        cost: 0,
        shares: 0,
        value: 0,
        totalShares: 0,
        SECFormUrl: '',
      }),
    ]);
    expect(result[0]!.date.getTime()).toBeNaN();
    expect(result[0]!.SECForm.getTime()).toBeNaN();
  });
});
