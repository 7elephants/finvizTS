/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getCalendar(client, options)`. Fetches a multi-row CSV
 * of economic calendar events for a date range and returns each row as a key/value record.
 *
 * | Step | Method          | Input                              | Output              |
 * |------|-----------------|-------------------------------------|---------------------|
 * | 1    | getCalendar()   | FinvizClient, CalendarOptions       | Promise<Calendar[]> |
 * ---
 */

import type { FinvizClient } from './client';
import type { Calendar, CalendarOptions } from './types';

import { formatDateToYYYYMMDD } from '.';

/**
 * Fetch economic calendar events for a given date range.
 * The API returns a multi-row CSV; each row represents one economic event.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Start date (required) and optional end date
 */
export async function getCalendar(
  client: FinvizClient,
  options: CalendarOptions,
): Promise<Calendar[]> {
  return client.getRecords('/export/calendar/economic', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
  });
}
