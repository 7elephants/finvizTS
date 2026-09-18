/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/calendar.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                           | Output                     |
 * |------|------------------------------------------------|---------------------------------|----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()                       | Controlled mock            |
 * | 2    | Call getCalendar with request options          | CalendarOptions                 | Forwarded params           |
 * | 3    | Assert getRecords was called with correct args | Captured call args              | Passing assertions         |
 * | 4    | Assert response mapping to Calendar shape      | Mock CSV row records            | Normalized Calendar rows   |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getCalendar } from '../src/calendar';

describe('getCalendar', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the calendar endpoint and formatted from date', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getCalendar(client, { from: new Date(2026, 2, 1) });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/calendar/economic', {
      dateFrom: '2026-03-01',
      dateTo: undefined,
    });
  });

  it('passes a formatted to date when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getCalendar(client, { from: new Date(2026, 2, 1), to: new Date(2026, 2, 31) });

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

    const result = await getCalendar(client, { from: new Date(2026, 2, 1) });

    expect(result).toEqual([
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
