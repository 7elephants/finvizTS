/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getEconomicCalendar(client, options)`, `getEarningsCalendar(client,
 * options)`, or `getDividendsCalendar(client, options)`. Fetches a multi-row CSV of calendar
 * events for a date range; economic events are returned as key/value records, earnings and
 * dividends events as typed rows.
 *
 * | Step | Method                  | Input                                  | Output                            |
 * |------|--------------------------|------------------------------------------|--------------------------------------|
 * | 1    | getEconomicCalendar()   | FinvizClient, CalendarOptions           | Promise<Calendar[]>                  |
 * | 2    | getEarningsCalendar()   | FinvizClient, EarningsCalendarOptions   | Promise<EarningsCalendarItem[]>      |
 * | 3    | getDividendsCalendar()  | FinvizClient, DividendsCalendarOptions  | Promise<DividendsCalendarItem[]>     |
 * ---
 */

import type { FinvizClient } from './client';
import type {
  Calendar,
  CalendarOptions,
  DividendsCalendarItem,
  DividendsCalendarOptions,
  EarningsCalendarItem,
  EarningsCalendarOptions,
} from './types';

import { formatDateToYYYYMMDD } from '.';

/**
 * Fetch economic calendar events for a given date range.
 * The API returns a multi-row CSV; each row represents one economic event.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Start date (required) and optional end date
 */
export async function getEconomicCalendar(
  client: FinvizClient,
  options: CalendarOptions,
): Promise<Calendar[]> {
  return client.getRecords('/export/calendar/economic', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
  });
}

/**
 * Fetch earnings calendar events for a given date range (max 90 days).
 * The API returns a multi-row CSV; each row represents one company's earnings report.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Start date (required), optional end date, and optional sort order
 */
export async function getEarningsCalendar(
  client: FinvizClient,
  options: EarningsCalendarOptions,
): Promise<EarningsCalendarItem[]> {
  const rows = await client.getRecords('/export/calendar/earnings', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
    sort: (options.orderDirection || '') + (options.order || ''),
  });
  return rows.map((row) => ({
    date: new Date(row['Date'] || ''),
    ticker: row['Ticker'] ?? '',
    company: row['Company'] ?? '',
    marketCap: parseFloat(row['Market Cap'] ?? '0'),
    epsEstimate: parseFloat(row['EPS Estimate'] ?? '0'),
    epsActual: parseFloat(row['EPS Actual'] ?? '0'),
    epsSurprise: parseFloat(row['EPS Surprise'] ?? '0'),
    epsGaapEstimate: parseFloat(row['EPS GAAP Estimate'] ?? '0'),
    epsGaapActual: parseFloat(row['EPS GAAP Actual'] ?? '0'),
    epsGaapSurprise: parseFloat(row['EPS GAAP Surprise'] ?? '0'),
    revenueEstimate: parseFloat(row['Revenue Estimate'] ?? '0'),
    revenueActual: parseFloat(row['Revenue Actual'] ?? '0'),
    revenueSurprise: parseFloat(row['Revenue Surprise'] ?? '0'),
    oneDayPriceReaction: parseFloat(row['1-Day Price Reaction'] ?? '0'),
  }));
}

/**
 * Fetch dividends calendar events for a given date range (max 90 days).
 * The API returns a multi-row CSV; each row represents one company's upcoming ex-dividend date.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Start date (required) and optional end date
 */
export async function getDividendsCalendar(
  client: FinvizClient,
  options: DividendsCalendarOptions,
): Promise<DividendsCalendarItem[]> {
  const rows = await client.getRecords('/export/calendar/dividends', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
  });
  return rows.map((row) => ({
    ticker: row['Ticker'] ?? '',
    company: row['Company'] ?? '',
    exDate: new Date(row['Ex-Date'] || ''),
    amount: parseFloat(row['Amount'] ?? '0'),
    special: parseFloat(row['Special'] ?? '0'),
    dividendEstYield: parseFloat(row['Dividend Est. Yield'] ?? '0'),
  }));
}
