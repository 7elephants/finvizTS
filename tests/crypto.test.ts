/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/crypto.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                 | Output                    |
 * |------|--------------------------------------------------|------------------------|-----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()             | Controlled mock           |
 * | 2    | Call getCrypto with sort options                | CryptoOptions           | Forwarded params          |
 * | 3    | Assert getRecords was called with correct args | Captured call args    | Passing assertions        |
 * | 4    | Assert response mapping to CryptoItem shape      | Mock CSV row records  | Normalized CryptoItem[]     |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getCrypto } from '../src/crypto';
import { CryptoCurrency, PerformanceOrderType, SortDirection } from '../src/types';

describe('getCrypto', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the crypto performance endpoint and no sort by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getCrypto(client);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/crypto/performance', { c: undefined, sort: '' });
  });

  it('combines order and orderDirection into the sort param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getCrypto(client, {
      order: PerformanceOrderType.PERF_DAY,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/crypto/performance', {
      c: undefined,
      sort: '-perfDayPct',
    });
  });

  it('omits orderDirection when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getCrypto(client, { order: PerformanceOrderType.TICKER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/crypto/performance',
      expect.objectContaining({ sort: 'ticker' }),
    );
  });

  it('passes the quote currency as the c param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getCrypto(client, { currency: CryptoCurrency.EUR });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/crypto/performance', {
      c: 'EUR',
      sort: '',
    });
  });

  it('maps CSV rows to CryptoItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        'No.': '1',
        Ticker: '@BTC',
        Name: 'Bitcoin',
        Price: '4320.5',
        'Performance (5 Minutes)': '-0.02',
        'Performance (1 Hour)': '-0.14',
        'Performance (Day)': '0.54',
        'Performance (Week)': '-2.34',
        'Performance (Month)': '-7.95',
        'Performance (Month To Date)': '-3.58',
        'Performance (Quarter)': '5.18',
        'Performance (Half Year)': '-7.63',
        'Performance (Year To Date)': '-4.04',
        'Performance (Year)': '8.83',
      },
    ]);

    const result = await getCrypto(client);

    expect(result).toEqual([
      {
        ticker: '@BTC',
        name: 'Bitcoin',
        price: 4320.5,
        perf5Min: -0.02,
        perf1Hour: -0.14,
        perfDay: 0.54,
        perfWeek: -2.34,
        perfMonth: -7.95,
        perfMonthToDate: -3.58,
        perfQuarter: 5.18,
        perfHalfYear: -7.63,
        perfYearToDate: -4.04,
        perfYear: 8.83,
      },
    ]);
  });

  it('parses scientific notation and defaults missing columns', async () => {
    mockGetRecords.mockResolvedValueOnce([{ Price: '6.04E-06' }]);

    const [row] = await getCrypto(client);

    expect(row?.price).toBe(6.04e-6);
    expect(row?.ticker).toBe('');
    expect(row?.name).toBe('');
    expect(row?.perfYear).toBe(0);
  });
});
