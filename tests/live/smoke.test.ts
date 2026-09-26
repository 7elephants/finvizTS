/*
 * ---
 * Workflow Summary
 * Invocation: Opt-in only — `npm run test:live`. Excluded from `npm test` (see jest.config.js).
 * Loads FINVIZ_API_TOKEN (and optional FINVIZ_BASE_URL / FINVIZ_PORTFOLIO_ID) from `.env.local`
 * or the environment; the whole suite is skipped when no token is available. Makes ~17 real
 * requests through one shared FinvizClient, so it takes ~90s under the 1 req / 5s rate limit.
 *
 * | Step | Description                                              | Input                     | Output                         |
 * |------|-----------------------------------------------------------|---------------------------|---------------------------------|
 * | 1    | Load env and construct a shared FinvizClient             | .env.local / process.env  | Live client (or skipped suite) |
 * | 2    | Call every public get* with dates relative to today      | Real Finviz Elite API     | FinvizResponse per endpoint    |
 * | 3    | Assert rows returned and no ParseErrors                  | FinvizResponse            | Passing assertions             |
 * | 4    | Assert every typed field is populated in at least one row | items                     | Catches CSV header drift       |
 * ---
 */

import {
  FinvizClient,
  ForexUnit,
  GroupName,
  GroupView,
  QuotePeriod,
  QuoteRange,
  ScreenerIndexFilter,
  ScreenerView,
  getCrypto,
  getDividendsCalendar,
  getEarningsCalendar,
  getEconomicCalendar,
  getForex,
  getFunds,
  getFutures,
  getGroups,
  getInsiders,
  getLatestFilings,
  getManagers,
  getNews,
  getOptionsChain,
  getPortfolio,
  getQuote,
  getScreener,
  type FinvizResponse,
} from '../../src';
import { formatDateToYYYYMMDD } from '../../src/utils';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Load `KEY=VALUE` lines from `.env.local` into process.env without overriding existing variables.
 * (`process.loadEnvFile` is not available inside Jest's sandboxed `process`.)
 */
function loadEnvLocal(): void {
  const file = resolve(__dirname, '../../.env.local');
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/.exec(line);
    if (!match || process.env[match[1]!] !== undefined) continue;
    process.env[match[1]!] = match[2]!.replace(/^(['"])(.*)\1$/, '$2');
  }
}

loadEnvLocal();

const token = process.env.FINVIZ_API_TOKEN || undefined;
const baseUrl = process.env.FINVIZ_BASE_URL || undefined;
const portfolioId = process.env.FINVIZ_PORTFOLIO_ID || undefined;
const describeLive = token ? describe : describe.skip;

const TIMEOUT_MS = 60_000;

/** Days from today, at local midnight. */
function daysFromToday(days: number): Date {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + days);
}

/** Third Friday of next month — a standard monthly options expiration that always exists. */
function nextMonthlyExpiration(): string {
  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const firstFriday = 1 + ((5 - first.getDay() + 7) % 7);
  return formatDateToYYYYMMDD(new Date(first.getFullYear(), first.getMonth(), firstFriday + 14));
}

/** Rows came back and every non-blank cell parsed. */
function expectClean<T>(response: FinvizResponse<T>): void {
  expect(response.items.length).toBeGreaterThan(0);
  expect(response.errors).toEqual([]);
}

/**
 * Every typed field is defined in at least one row. A field that is always `undefined` means the
 * schema's CSV column no longer matches Finviz's header.
 */
function expectAllFieldsPopulated<T extends object>(items: T[], except: (keyof T)[] = []): void {
  const keys = Object.keys(items[0]!) as (keyof T)[];
  const neverSet = keys.filter((key) => !except.includes(key) && items.every((item) => item[key] === undefined));
  expect(neverSet).toEqual([]);
}

describeLive('Finviz Elite API (live)', () => {
  // describe.skip still runs this body, so only construct the client when a token exists.
  const client = token ? new FinvizClient({ apiToken: token, ...(baseUrl ? { baseUrl } : {}) }) : ({} as FinvizClient);

  it('getQuote', async () => {
    const response = await getQuote(client, 'MSFT', { period: QuotePeriod.DAILY, range: QuoteRange.MONTH });
    expectClean(response);
    // Finviz does not return a ChangeFromOpen column for any period.
    expectAllFieldsPopulated(response.items, ['ChangeFromOpen']);
  }, TIMEOUT_MS);

  it('getScreener', async () => {
    const response = await getScreener(client, { view: ScreenerView.OVERVIEW, filters: [ScreenerIndexFilter.DJI] });
    expectClean(response);
    expect(response.items[0]).toHaveProperty('Ticker');
  }, TIMEOUT_MS);

  it('getNews (market)', async () => {
    const response = await getNews(client);
    expectClean(response);
    // Market news has no Ticker column; only stock/ETF/crypto news does.
    expectAllFieldsPopulated(response.items, ['ticker']);
  }, TIMEOUT_MS);

  it('getLatestFilings', async () => {
    const response = await getLatestFilings(client, 'MSFT');
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getOptionsChain', async () => {
    const response = await getOptionsChain(client, 'MSFT', { expiration: nextMonthlyExpiration() });
    expectClean(response);
    expect(response.items[0]).toHaveProperty('Contract Name');
  }, TIMEOUT_MS);

  it('getGroups', async () => {
    const response = await getGroups(client, GroupName.SECTOR, GroupView.OVERVIEW);
    expectClean(response);
    expect(response.items[0]).toHaveProperty('Name');
  }, TIMEOUT_MS);

  (portfolioId ? it : it.skip)('getPortfolio (set FINVIZ_PORTFOLIO_ID)', async () => {
    const response = await getPortfolio(client, portfolioId!);
    expectClean(response);
  }, TIMEOUT_MS);

  it('getInsiders', async () => {
    const response = await getInsiders(client, { ticker: 'AAPL' });
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getManagers', async () => {
    const response = await getManagers(client, { search: 'Berkshire' });
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getFunds', async () => {
    const response = await getFunds(client, { search: 'Vanguard' });
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getEconomicCalendar', async () => {
    const response = await getEconomicCalendar(client, { from: daysFromToday(-7), to: daysFromToday(7) });
    expectClean(response);
    expect(Object.keys(response.items[0]!)).toEqual(
      expect.arrayContaining(['Event', 'Date', 'Time', 'Impact', 'Actual', 'Expected', 'Prior']),
    );
  }, TIMEOUT_MS);

  it('getEarningsCalendar', async () => {
    const response = await getEarningsCalendar(client, { from: daysFromToday(-7), to: daysFromToday(21) });
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getDividendsCalendar', async () => {
    const response = await getDividendsCalendar(client, { from: daysFromToday(-7), to: daysFromToday(21) });
    expectClean(response);
    // `special` is only set for special dividends, which may not occur in the window.
    expectAllFieldsPopulated(response.items, ['special']);
  }, TIMEOUT_MS);

  it('getFutures', async () => {
    const response = await getFutures(client);
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getForex (percent)', async () => {
    const response = await getForex(client);
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getForex (pips)', async () => {
    const response = await getForex(client, { unit: ForexUnit.PIPS });
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);

  it('getCrypto', async () => {
    const response = await getCrypto(client);
    expectClean(response);
    expectAllFieldsPopulated(response.items);
  }, TIMEOUT_MS);
});
