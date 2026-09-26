/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/filings.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                           | Output                     |
 * |------|------------------------------------------------|---------------------------------|----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()                       | Controlled mock            |
 * | 2    | Call getLatestFilings with request options     | ticker, FilingOptions           | Forwarded params           |
 * | 3    | Assert getRecords was called with correct args | Captured call args              | Passing assertions         |
 * | 4    | Assert order and orderDirection combine        | order, orderDirection           | Combined `o` param         |
 * | 5    | Assert response mapping to Filing shape        | Mock CSV row records            | Normalized Filing objects  |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getLatestFilings } from '../src/filings';
import { FilingFilter, FilingOrder, SortDirection } from '../src/types';

describe('getLatestFilings', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the latest filings endpoint and ticker', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getLatestFilings(client, 'MSFT');

    expect(mockGetRecords).toHaveBeenCalledWith('/export/latest-filings', {
      t: 'MSFT',
      o: '',
      f: undefined,
    });
  });

  it('passes ascending order when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getLatestFilings(client, 'AAPL', { order: FilingOrder.DATE });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/latest-filings', {
      t: 'AAPL',
      o: 'filingDate',
      f: undefined,
    });
  });

  it('combines order and orderDirection into the `o` param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getLatestFilings(client, 'AAPL', {
      order: FilingOrder.DATE,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/latest-filings', {
      t: 'AAPL',
      o: '-filingDate',
      f: undefined,
    });
  });

  it('passes the filter option when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getLatestFilings(client, 'GOOG', { filter: FilingFilter.INSIDER_EQUITY });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/latest-filings', {
      t: 'GOOG',
      o: '',
      f: 'insider-equity',
    });
  });

  it('maps CSV rows to Filing shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        'Filing Date': '3/27/2026',
        'Report Date': '',
        Form: 'SCHEDULE 13G/A',
        Description: '',
        Filing: 'https://www.sec.gov/example',
        Document: 'https://www.sec.gov/example/doc.xml',
      },
    ]);

    const result = await getLatestFilings(client, 'MSFT');

    expect(result.items).toEqual([
      {
        filingDate: '3/27/2026',
        reportDate: undefined,
        form: 'SCHEDULE 13G/A',
        description: undefined,
        filing: 'https://www.sec.gov/example',
        document: 'https://www.sec.gov/example/doc.xml',
      },
    ]);
  });
});
