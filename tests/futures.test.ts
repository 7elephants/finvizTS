/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/futures.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                 | Output                    |
 * |------|--------------------------------------------------|------------------------|-----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()             | Controlled mock           |
 * | 2    | Call getFutures with sort options                | FuturesOptions           | Forwarded params          |
 * | 3    | Assert getRecords was called with correct args | Captured call args    | Passing assertions        |
 * | 4    | Assert response mapping to FuturesItem shape      | Mock CSV row records  | Normalized FuturesItem[]     |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getFutures } from '../src/futures';
import { PerformanceOrderType, SortDirection } from '../src/types';

describe('getFutures', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the futures performance endpoint and no sort by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFutures(client);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/futures/performance', { sort: '' });
  });

  it('combines order and orderDirection into the sort param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFutures(client, {
      order: PerformanceOrderType.PERF_DAY,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/futures/performance', {
      sort: '-perfDayPct',
    });
  });

  it('omits orderDirection when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getFutures(client, { order: PerformanceOrderType.TICKER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/futures/performance',
      expect.objectContaining({ sort: 'ticker' }),
    );
  });

  it('maps CSV rows to FuturesItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        'No.': '1',
        Ticker: '@GC',
        Name: 'Gold',
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

    const result = await getFutures(client);

    expect(result.items).toEqual([
      {
        ticker: '@GC',
        name: 'Gold',
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

  it('parses scientific notation and leaves missing columns undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([{ Price: '6.04E-06' }]);

    const { items: [row] } = await getFutures(client);

    expect(row?.price).toBe(6.04e-6);
    expect(row?.ticker).toBeUndefined();
    expect(row?.name).toBeUndefined();
    expect(row?.perfYear).toBeUndefined();
  });
});
