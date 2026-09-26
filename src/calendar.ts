/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getEconomicCalendar(client, options)`, `getEarningsCalendar(client,
 * options)`, or `getDividendsCalendar(client, options)`. Fetches a multi-row CSV of calendar
 * events for a date range; economic events are returned as key/value records, earnings and
 * dividends events as typed rows parsed via parseRows() (blank cells → undefined, unparseable
 * cells → undefined + ParseError). Every function returns a FinvizResponse `{ items, errors }`.
 *
 * | Step | Method                  | Input                                  | Output                                          |
 * |------|--------------------------|------------------------------------------|--------------------------------------------------|
 * | 1    | getEconomicCalendar()   | FinvizClient, CalendarOptions           | Promise<FinvizResponse<Calendar>>               |
 * | 2    | getEarningsCalendar()   | FinvizClient, EarningsCalendarOptions   | Promise<FinvizResponse<EarningsCalendarItem>>   |
 * | 3    | getDividendsCalendar()  | FinvizClient, DividendsCalendarOptions  | Promise<FinvizResponse<DividendsCalendarItem>>  |
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
  FinvizResponse,
} from './types';

import { formatDateToYYYYMMDD, buildSortParam } from '.';
import { date, number, parseRows, rawResponse, text, type RowSchema } from './parse';

/** EarningsCalendarItem property → CSV column mapping. */
const EARNINGS_SCHEMA: RowSchema<EarningsCalendarItem> = {
  date: date('Date'),
  ticker: text('Ticker'),
  company: text('Company'),
  marketCap: number('Market Cap'),
  epsEstimate: number('EPS Estimate'),
  epsActual: number('EPS Actual'),
  epsSurprise: number('EPS Surprise'),
  epsGaapEstimate: number('EPS GAAP Estimate'),
  epsGaapActual: number('EPS GAAP Actual'),
  epsGaapSurprise: number('EPS GAAP Surprise'),
  revenueEstimate: number('Revenue Estimate'),
  revenueActual: number('Revenue Actual'),
  revenueSurprise: number('Revenue Surprise'),
  oneDayPriceReaction: number('1-Day Price Reaction'),
};

/** DividendsCalendarItem property → CSV column mapping. */
const DIVIDENDS_SCHEMA: RowSchema<DividendsCalendarItem> = {
  ticker: text('Ticker'),
  company: text('Company'),
  exDate: date('Ex-Date'),
  amount: number('Amount'),
  special: number('Special'),
  dividendEstYield: number('Dividend Est. Yield'),
};

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
): Promise<FinvizResponse<Calendar>> {
  const rows = await client.getRecords('/export/calendar/economic', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
  });
  return rawResponse(rows);
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
): Promise<FinvizResponse<EarningsCalendarItem>> {
  const rows = await client.getRecords('/export/calendar/earnings', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return parseRows(rows, EARNINGS_SCHEMA);
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
): Promise<FinvizResponse<DividendsCalendarItem>> {
  const rows = await client.getRecords('/export/calendar/dividends', {
    dateFrom: formatDateToYYYYMMDD(options.from),
    dateTo: (options.to) ? formatDateToYYYYMMDD(options.to) : undefined,
  });
  return parseRows(rows, DIVIDENDS_SCHEMA);
}
