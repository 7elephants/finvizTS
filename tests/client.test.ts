import axios from 'axios';
import { FinvizClient } from '../src/client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Restore the real isAxiosError so duck-typed mock errors are detected correctly
const { isAxiosError: realIsAxiosError } = jest.requireActual<typeof import('axios')>('axios');
// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.spyOn(axios, 'isAxiosError').mockImplementation(realIsAxiosError);

describe('FinvizClient', () => {
  const mockGet = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockedAxios.create.mockReturnValue({ get: mockGet } as never);
  });

  it('creates an axios instance with the correct base URL', () => {
    new FinvizClient({ apiToken: 'test-token' });
    expect(mockedAxios.create).toHaveBeenCalledWith(
      expect.objectContaining({ baseURL: 'https://elite.finviz.com' }),
    );
  });

  it('sets Accept: text/csv header', () => {
    new FinvizClient({ apiToken: 'test-token' });
    expect(mockedAxios.create).toHaveBeenCalledWith(
      expect.objectContaining({ headers: { Accept: 'text/csv' } }),
    );
  });

  it('accepts a custom baseUrl and timeout', () => {
    new FinvizClient({ apiToken: 'tok', baseUrl: 'https://custom.host', timeout: 5000 });
    expect(mockedAxios.create).toHaveBeenCalledWith(
      expect.objectContaining({ baseURL: 'https://custom.host', timeout: 5000 }),
    );
  });

  describe('getRecord', () => {
    it('fetches CSV text and parses it into a single record', async () => {
      mockGet.mockResolvedValueOnce({ data: 'Ticker,Price\nAAPL,180.00' });
      const client = new FinvizClient({ apiToken: 'abc123' });

      const result = await client.getRecord('/api/quote.ashx', { t: 'AAPL' });

      expect(mockGet).toHaveBeenCalledWith(
        '/api/quote.ashx',
        expect.objectContaining({
          responseType: 'text',
          params: expect.objectContaining({ auth: 'abc123', t: 'AAPL' }),
        }),
      );
      expect(result).toEqual({ Ticker: 'AAPL', Price: '180.00' });
    });
  });

  describe('getRecords', () => {
    it('fetches CSV text and parses it into an array of records', async () => {
      mockGet.mockResolvedValueOnce({ data: 'Ticker,Price\nAAPL,180.00\nMSFT,420.00' });
      const client = new FinvizClient({ apiToken: 'abc123' });

      const result = await client.getRecords('/api/screener.ashx', { f: 'exch_nasd' });

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({ Ticker: 'AAPL', Price: '180.00' });
    });
  });

  describe('proactive rate limiting', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('delays a second request that arrives before the rate limit interval elapses', async () => {
      mockGet.mockResolvedValue({ data: 'Ticker,Price\nAAPL,180.00' });
      const client = new FinvizClient({ apiToken: 'tok', rateLimitMs: 1000 });

      // First request — no delay expected
      const p1 = client.getRecord('/api/quote.ashx', { t: 'AAPL' });
      await jest.runAllTimersAsync();
      await p1;

      // Second request arrives immediately — should be delayed
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
      const p2 = client.getRecord('/api/quote.ashx', { t: 'AAPL' });
      await jest.runAllTimersAsync();
      await p2;

      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), expect.any(Number));
    });
  });

  describe('429 retry logic', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('retries after a 429 and succeeds on the second attempt', async () => {
      const err429 = Object.assign(new Error('rate limited'), {
        isAxiosError: true,
        response: { status: 429, headers: {} },
      });
      mockGet
        .mockRejectedValueOnce(err429)
        .mockResolvedValueOnce({ data: 'Ticker,Price\nAAPL,180.00' });

      const client = new FinvizClient({
        apiToken: 'tok',
        rateLimitMs: 0,
        maxRetries: 3,
        retryDelayMs: 1000,
      });

      const promise = client.getRecord('/api/quote.ashx', { t: 'AAPL' });
      await jest.runAllTimersAsync();
      const result = await promise;

      expect(mockGet).toHaveBeenCalledTimes(2);
      expect(result).toEqual({ Ticker: 'AAPL', Price: '180.00' });
    });

    it('uses the Retry-After header value when present', async () => {
      const err429WithHeader = Object.assign(new Error('rate limited'), {
        isAxiosError: true,
        response: { status: 429, headers: { 'retry-after': '30' } },
      });
      mockGet
        .mockRejectedValueOnce(err429WithHeader)
        .mockResolvedValueOnce({ data: 'Ticker,Price\nAAPL,180.00' });

      const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
      const client = new FinvizClient({
        apiToken: 'tok',
        rateLimitMs: 0,
        maxRetries: 3,
        retryDelayMs: 1000,
      });

      const promise = client.getRecord('/api/quote.ashx', { t: 'AAPL' });
      await jest.runAllTimersAsync();
      await promise;

      // Retry delay should be 30 * 1000 ms from the Retry-After header
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 30_000);
    });
  });

  describe('429 retry exhaustion', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('throws a FinvizApiError after exhausting all retries', async () => {
      const err429 = Object.assign(new Error('rate limited'), {
        isAxiosError: true,
        response: { status: 429, headers: {} },
      });
      // Reject every attempt: maxRetries=2 → 3 total calls (attempt 0, 1, 2)
      mockGet.mockRejectedValue(err429);

      const client = new FinvizClient({
        apiToken: 'tok',
        rateLimitMs: 0,
        maxRetries: 2,
        retryDelayMs: 500,
      });

      const promise = client.getRecord('/api/quote.ashx', { t: 'AAPL' });
      // Attach the rejection handler before running timers to avoid unhandled rejection
      const assertion = expect(promise).rejects.toMatchObject({
        name: 'FinvizApiError',
        statusCode: 429,
        message: expect.stringContaining('exhausted 2 retries'),
      });
      await jest.runAllTimersAsync();
      await assertion;
      expect(mockGet).toHaveBeenCalledTimes(3);
    });
  });
});
