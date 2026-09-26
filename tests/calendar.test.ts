/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/calendar.test.ts` or `npm test`.
 *
 * | Step | Description                                            | Input                           | Output                            |
 * |------|----------------------------------------------------------|---------------------------------|-------------------------------------|
 * | 1    | Mock FinvizClient.getRecords                            | jest.fn()                       | Controlled mock                     |
 * | 2    | Call getEconomicCalendar with request options           | CalendarOptions                 | Forwarded params                    |
 * | 3    | Assert getRecords was called with correct args          | Captured call args              | Passing assertions                  |
 * | 4    | Assert response mapping to Calendar shape               | Mock CSV row records            | Normalized Calendar rows            |
 * | 5    | Call getEarningsCalendar with request/sort options      | EarningsCalendarOptions         | Forwarded params                    |
 * | 6    | Assert response mapping to EarningsCalendarItem shape    | Mock CSV row records            | Normalized EarningsCalendarItem[]   |
 * | 7    | Call getDividendsCalendar with request options          | DividendsCalendarOptions        | Forwarded params                    |
 * | 8    | Assert response mapping to DividendsCalendarItem shape   | Mock CSV row records            | Normalized DividendsCalendarItem[]  |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getEconomicCalendar, getEarningsCalendar, getDividendsCalendar } from '../src/calendar';
import { EarningsOrderType, SortDirection } from '../src/types';

describe('getEconomicCalendar', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the calendar endpoint and formatted from date', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getEconomicCalendar(client, { from: new Date(2026, 2, 1) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/economic', {
      dateFrom: '2026-03-01',
      dateTo: undefined,
    });
  });

  it('passes a formatted to date when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getEconomicCalendar(client, { from: new Date(2026, 2, 1), to: new Date(2026, 2, 31) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/economic', {
      dateFrom: '2026-03-01',
      dateTo: '2026-03-31',
    });
  });

  it('maps CSV rows to Calendar shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Date: '3/27/2026',
        Time: '8:30AM',
        Datetime: '2026-03-27 08:30:00',
        Release: 'Durable Goods Orders',
        Impact: '2',
        For: 'Feb',
        Actual: '',
        Expected: '1.5%',
        Prior: '3.1%',
      },
    ]);

    const result = await getEconomicCalendar(client, { from: new Date(2026, 2, 1) });

    expect(result.items).toEqual([
      {
        Date: '3/27/2026',
        Time: '8:30AM',
        Datetime: '2026-03-27 08:30:00',
        Release: 'Durable Goods Orders',
        Impact: '2',
        For: 'Feb',
        Actual: '',
        Expected: '1.5%',
        Prior: '3.1%',
      },
    ]);
  });
});

describe('getEarningsCalendar', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the earnings endpoint and formatted from date', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getEarningsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/earnings', {
      dateFrom: '2026-07-20',
      dateTo: undefined,
      sort: '',
    });
  });

  it('passes a formatted to date when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getEarningsCalendar(client, { from: new Date(2026, 6, 20), to: new Date(2026, 6, 24) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/earnings', {
      dateFrom: '2026-07-20',
      dateTo: '2026-07-24',
      sort: '',
    });
  });

  it('combines order and orderDirection into the sort param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getEarningsCalendar(client, {
      from: new Date(2026, 6, 20),
      order: EarningsOrderType.MARKET_CAP,
      orderDirection: SortDirection.DESC,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/earnings', {
      dateFrom: '2026-07-20',
      dateTo: undefined,
      sort: '-marketCap',
    });
  });

  it('maps CSV rows to EarningsCalendarItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Date: '2026-07-20 08:30',
        Ticker: 'AMC',
        Company: 'AMC Entertainment Holdings Inc',
        'Market Cap': '2410.03',
        'EPS Estimate': '0.0039',
        'EPS Actual': '-0.02',
        'EPS Surprise': '-612.82',
        'EPS GAAP Estimate': '0.0039',
        'EPS GAAP Actual': '-0.02',
        'EPS GAAP Surprise': '-612.82',
        'Revenue Estimate': '1503.121',
        'Revenue Actual': '1596.7',
        'Revenue Surprise': '6.23',
        '1-Day Price Reaction': '26.80',
      },
    ]);

    const result = await getEarningsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(result.items).toEqual([
      {
        date: new Date('2026-07-20 08:30'),
        ticker: 'AMC',
        company: 'AMC Entertainment Holdings Inc',
        marketCap: 2410.03,
        epsEstimate: 0.0039,
        epsActual: -0.02,
        epsSurprise: -612.82,
        epsGaapEstimate: 0.0039,
        epsGaapActual: -0.02,
        epsGaapSurprise: -612.82,
        revenueEstimate: 1503.121,
        revenueActual: 1596.7,
        revenueSurprise: 6.23,
        oneDayPriceReaction: 26.80,
      },
    ]);
  });

  it('leaves missing fields undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Ticker: 'ATLO',
        Company: 'Ames National Corp',
      },
    ]);

    const result = await getEarningsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(result.errors).toEqual([]);
    expect(result.items).toEqual([
      expect.objectContaining({
        ticker: 'ATLO',
        company: 'Ames National Corp',
        marketCap: undefined,
        epsEstimate: undefined,
        epsActual: undefined,
        epsSurprise: undefined,
        epsGaapEstimate: undefined,
        epsGaapActual: undefined,
        epsGaapSurprise: undefined,
        revenueEstimate: undefined,
        revenueActual: undefined,
        revenueSurprise: undefined,
        oneDayPriceReaction: undefined,
      }),
    ]);
  });
  it('reports unparseable cells as errors and leaves the field undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([
      { Date: '2026-07-20 08:30', Ticker: 'AMC', 'Market Cap': 'N/A', 'EPS Actual': '-0.02' },
    ]);

    const result = await getEarningsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(result.items[0]?.marketCap).toBeUndefined();
    expect(result.items[0]?.epsActual).toBe(-0.02);
    expect(result.errors).toEqual([
      { row: 0, column: 'Market Cap', field: 'marketCap', value: 'N/A', expected: 'number' },
    ]);
  });
});

describe('getDividendsCalendar', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the dividends endpoint and formatted from date', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getDividendsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/dividends', {
      dateFrom: '2026-07-20',
      dateTo: undefined,
    });
  });

  it('passes a formatted to date when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getDividendsCalendar(client, { from: new Date(2026, 6, 20), to: new Date(2026, 6, 24) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/dividends', {
      dateFrom: '2026-07-20',
      dateTo: '2026-07-24',
    });
  });

  it('maps CSV rows to DividendsCalendarItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Ticker: 'CAT',
        Company: 'Caterpillar Inc',
        'Ex-Date': '2026-07-20',
        Amount: '1.63',
        Special: '',
        'Dividend Est. Yield': '0.77',
      },
    ]);

    const result = await getDividendsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(result.items).toEqual([
      {
        ticker: 'CAT',
        company: 'Caterpillar Inc',
        exDate: new Date('2026-07-20'),
        amount: 1.63,
        special: undefined,
        dividendEstYield: 0.77,
      },
    ]);
  });

  it('leaves missing fields undefined', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Ticker: 'HSHP',
        Company: 'Himalaya Shipping Ltd',
      },
    ]);

    const result = await getDividendsCalendar(client, { from: new Date(2026, 6, 20) });

    expect(result.errors).toEqual([]);
    expect(result.items).toEqual([
      expect.objectContaining({
        ticker: 'HSHP',
        company: 'Himalaya Shipping Ltd',
        amount: undefined,
        special: undefined,
        dividendEstYield: undefined,
      }),
    ]);
  });
});
