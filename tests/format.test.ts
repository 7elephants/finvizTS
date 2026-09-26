/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/format.test.ts` or `npm test`. ts-jest type-checks this
 * file, so the compile-time assertions fail the run if return types stop narrowing.
 *
 * | Step | Description                                                     | Input                           | Output                          |
 * |------|------------------------------------------------------------------|---------------------------------|----------------------------------|
 * | 1    | Assert FinvizClient stores its default format (parsed if unset) | FinvizClientOptions             | client.format                   |
 * | 2    | Call every get* with a mocked client per format                 | Mock getRecords rows + format   | FinvizResponse shape per format |
 * | 3    | Assert per-call `format` overrides the client default           | Client default + call override  | Overridden shape                |
 * | 4    | Assert return types narrow from client default / per-call format | Type-level Equals<A, B>        | Compile-time true               |
 * ---
 */

import axios from 'axios';
import {
  FinvizClient,
  ResponseFormat,
  QuotePeriod,
  GroupName,
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
  type NewsItem,
  type ParsedAndRawResponse,
  type ParsedResponse,
  type RawRecord,
  type RawResponse,
} from '../src';

jest.mock('axios');

/** True when A and B are the same type (not merely mutually assignable). */
type Equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? true : false;
/** Compile-time assertion: only `true` type-checks. */
function assertType<T extends true>(): T | void {}

const ROWS: RawRecord[] = [{ Ticker: 'AAPL', Name: 'Apple', Price: '1.5' }];
const mockGetRecords = jest.fn();

/** A mocked client whose default response format is `format`. */
function mockClient<F extends ResponseFormat>(format: F): FinvizClient<F> {
  return { getRecords: mockGetRecords, format } as unknown as FinvizClient<F>;
}

const from = new Date(2026, 6, 20);

/** Calls one get* with a per-call format (undefined = use the client default). */
type Call = (c: FinvizClient<ResponseFormat>, f?: ResponseFormat) => Promise<unknown>;

/** `{ format: f }`, or `{}` when f is undefined (exactOptionalPropertyTypes forbids `format: undefined`). */
function fmt(f?: ResponseFormat): { format?: ResponseFormat } {
  return f ? { format: f } : {};
}

/** Every public get*, keyed by name. */
const ENDPOINTS: Record<string, Call> = {
  getQuote: (c, f) => getQuote(c, 'AAPL', { period: QuotePeriod.DAILY, ...fmt(f) }),
  getScreener: (c, f) => getScreener(c, fmt(f)),
  getNews: (c, f) => getNews(c, fmt(f)),
  getPortfolio: (c, f) => getPortfolio(c, 1, fmt(f)),
  getLatestFilings: (c, f) => getLatestFilings(c, 'AAPL', fmt(f)),
  getOptionsChain: (c, f) => getOptionsChain(c, 'AAPL', { expiration: '2026-05-08', ...fmt(f) }),
  getGroups: (c, f) => getGroups(c, GroupName.SECTOR, 110, fmt(f)),
  getInsiders: (c, f) => getInsiders(c, fmt(f)),
  getManagers: (c, f) => getManagers(c, fmt(f)),
  getFunds: (c, f) => getFunds(c, fmt(f)),
  getEconomicCalendar: (c, f) => getEconomicCalendar(c, { from, ...fmt(f) }),
  getEarningsCalendar: (c, f) => getEarningsCalendar(c, { from, ...fmt(f) }),
  getDividendsCalendar: (c, f) => getDividendsCalendar(c, { from, ...fmt(f) }),
  getFutures: (c, f) => getFutures(c, fmt(f)),
  getForex: (c, f) => getForex(c, fmt(f)),
  getCrypto: (c, f) => getCrypto(c, fmt(f)),
};

beforeEach(() => {
  jest.clearAllMocks();
  mockGetRecords.mockResolvedValue(ROWS);
});

describe('FinvizClient format', () => {
  beforeEach(() => (axios as jest.Mocked<typeof axios>).create.mockReturnValue({} as never));

  it('defaults to parsed', () => {
    expect(new FinvizClient({ apiToken: 't' }).format).toBe('parsed');
  });

  it('stores the configured default format', () => {
    expect(new FinvizClient({ apiToken: 't', format: ResponseFormat.BOTH }).format).toBe('both');
  });
});

describe.each(Object.entries(ENDPOINTS))('%s', (_name, call) => {
  it('parsed: returns items and errors only', async () => {
    const result = await call(mockClient(ResponseFormat.PARSED));

    expect(Object.keys(result as object).sort()).toEqual(['errors', 'items']);
  });

  it('raw (client default): returns the records unparsed', async () => {
    const result = await call(mockClient(ResponseFormat.RAW));

    expect(result).toEqual({ raw: ROWS, errors: [] });
  });

  it('both (client default): returns items and the records', async () => {
    const result = (await call(mockClient(ResponseFormat.BOTH))) as ParsedAndRawResponse<unknown>;

    expect(result.raw).toBe(ROWS);
    expect(result.items).toHaveLength(1);
  });

  it('per-call format overrides the client default', async () => {
    const result = await call(mockClient(ResponseFormat.PARSED), ResponseFormat.RAW);

    expect(result).toEqual({ raw: ROWS, errors: [] });
  });
});

describe('return type narrowing', () => {
  it('narrows from the client default and the per-call format', async () => {
    const parsedClient = mockClient(ResponseFormat.PARSED);
    const rawClient = mockClient(ResponseFormat.RAW);

    const byDefault = await getNews(parsedClient);
    const byClient = await getNews(rawClient);
    const byCall = await getNews(rawClient, { format: ResponseFormat.BOTH });
    const typedParse = await getQuote(parsedClient, 'AAPL', { period: QuotePeriod.DAILY, format: 'raw' });

    assertType<Equals<typeof byDefault, ParsedResponse<NewsItem>>>();
    assertType<Equals<typeof byClient, RawResponse>>();
    assertType<Equals<typeof byCall, ParsedAndRawResponse<NewsItem>>>();
    assertType<Equals<typeof typedParse, RawResponse>>();
    // Backward compatible: FinvizResponse<T> is still the parsed shape.
    assertType<Equals<FinvizResponse<NewsItem>, ParsedResponse<NewsItem>>>();

    expect(byDefault.items).toHaveLength(1);
    expect(byClient.raw).toBe(ROWS);
    expect(byCall.raw).toBe(ROWS);
    expect(typedParse.raw).toBe(ROWS);
  });

  it('infers the client default from the constructor option', () => {
    (axios as jest.Mocked<typeof axios>).create.mockReturnValue({} as never);
    const plain = new FinvizClient({ apiToken: 't' });
    const both = new FinvizClient({ apiToken: 't', format: ResponseFormat.BOTH });

    assertType<Equals<typeof plain, FinvizClient<'parsed'>>>();
    assertType<Equals<typeof both, FinvizClient<'both'>>>();
    expect(plain.format).toBe('parsed');
    expect(both.format).toBe('both');
  });

  it('yields a narrowable union for a client typed with every format', async () => {
    const result = await getNews(mockClient<ResponseFormat>(ResponseFormat.RAW));

    assertType<Equals<typeof result, FinvizResponse<NewsItem, ResponseFormat>>>();
    if ('raw' in result) expect(result.raw).toBe(ROWS);
    else throw new Error('expected raw response');
  });
});
