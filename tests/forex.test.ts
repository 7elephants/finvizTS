/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/forex.test.ts` or `npm test`.
 *
 * | Step | Description                                      | Input                 | Output                    |
 * |------|----------------------------------------------------|------------------------|-----------------------------|
 * | 1    | Mock FinvizClient.getRecords                     | jest.fn()             | Controlled mock           |
 * | 2    | Call getForex with unit and sort options         | ForexOptions          | Forwarded params          |
 * | 3    | Assert getRecords was called with correct args   | Captured call args    | Passing assertions        |
 * | 4    | Assert percent and pips response mapping         | Mock CSV row records  | Normalized ForexItem[]    |
 * | 5    | Assert unit/sort mismatches fail to compile      | @ts-expect-error      | Type-level assertions     |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getForex } from '../src/forex';
import { ForexPipsOrderType, ForexUnit, PerformanceOrderType, SortDirection } from '../src/types';

describe('getForex', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the forex performance endpoint and no sort by default', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getForex(client);

    expect(mockGetRecords).toHaveBeenCalledWith('/export/forex/performance', {
      unit: undefined,
      sort: '',
    });
  });

  it('combines order and orderDirection into the sort param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getForex(client, {
      order: PerformanceOrderType.PERF_DAY,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/forex/performance', {
      unit: undefined,
      sort: '-perfDayPct',
    });
  });

  it('omits orderDirection when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getForex(client, { order: PerformanceOrderType.TICKER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/forex/performance',
      expect.objectContaining({ sort: 'ticker' }),
    );
  });

  it('passes the unit param and pips sort key', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getForex(client, {
      unit: ForexUnit.PIPS,
      order: ForexPipsOrderType.PERF_WEEK,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/forex/performance', {
      unit: 'pips',
      sort: '-perfWeekPips',
    });
  });

  it('allows shared sort columns with the pips unit', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getForex(client, { unit: ForexUnit.PIPS, order: PerformanceOrderType.TICKER });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export/forex/performance',
      expect.objectContaining({ unit: 'pips', sort: 'ticker' }),
    );
  });

  it('rejects sort columns that do not match the unit at compile time', () => {
    const check = (): unknown[] => [
      // @ts-expect-error percent sort column with the pips unit
      getForex(client, { unit: ForexUnit.PIPS, order: PerformanceOrderType.PERF_WEEK }),
      // @ts-expect-error pips sort column with the percent unit
      getForex(client, { unit: ForexUnit.PERCENT, order: ForexPipsOrderType.PERF_WEEK }),
      // @ts-expect-error pips sort column with the default (percent) unit
      getForex(client, { order: ForexPipsOrderType.PERF_WEEK }),
    ];
    // Never invoked: the assertions are the @ts-expect-error directives, checked by ts-jest.
    expect(typeof check).toBe('function');
  });

  it('maps percent CSV rows to ForexItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        'No.': '4',
        Ticker: 'EUR/USD',
        Name: 'Euro',
        Price: '1.13905',
        'Performance (5 Minutes)': '-0.01',
        'Performance (1 Hour)': '-0.04',
        'Performance (Day)': '0.09',
        'Performance (Week)': '-0.83',
        'Performance (Month)': '-2.42',
        'Performance (Month To Date)': '-1.95',
        'Performance (Quarter)': '0.19',
        'Performance (Half Year)': '-1.45',
        'Performance (Year To Date)': '-2.96',
        'Performance (Year)': '-2.35',
      },
    ]);

    const result = await getForex(client);

    expect(result.items).toEqual([
      {
        ticker: 'EUR/USD',
        name: 'Euro',
        price: 1.13905,
        perf5Min: -0.01,
        perf1Hour: -0.04,
        perfDay: 0.09,
        perfWeek: -0.83,
        perfMonth: -2.42,
        perfMonthToDate: -1.95,
        perfQuarter: 0.19,
        perfHalfYear: -1.45,
        perfYearToDate: -2.96,
        perfYear: -2.35,
      },
    ]);
  });

  it('maps pips CSV rows (Performance in Pips headers) to ForexItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        'No.': '4',
        Ticker: 'EUR/USD',
        Name: 'Euro',
        Price: '1.13905',
        'Performance in Pips (5 Minutes)': '-2',
        'Performance in Pips (1 Hour)': '-5',
        'Performance in Pips (Day)': '10',
        'Performance in Pips (Week)': '-95',
        'Performance in Pips (Month)': '-283',
        'Performance in Pips (Month To Date)': '-227',
        'Performance in Pips (Quarter)': '21',
        'Performance in Pips (Half Year)': '-168',
        'Performance in Pips (Year To Date)': '-348',
        'Performance in Pips (Year)': '-275',
      },
    ]);

    const result = await getForex(client, { unit: ForexUnit.PIPS });

    expect(result.items).toEqual([
      {
        ticker: 'EUR/USD',
        name: 'Euro',
        price: 1.13905,
        perf5Min: -2,
        perf1Hour: -5,
        perfDay: 10,
        perfWeek: -95,
        perfMonth: -283,
        perfMonthToDate: -227,
        perfQuarter: 21,
        perfHalfYear: -168,
        perfYearToDate: -348,
        perfYear: -275,
      },
    ]);
  });

  it('leaves missing columns undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([{ Price: '1.5' }]);

    const { items: [row] } = await getForex(client);

    expect(row?.ticker).toBeUndefined();
    expect(row?.name).toBeUndefined();
    expect(row?.perfYear).toBeUndefined();
  });
});
