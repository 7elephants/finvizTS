import axios from 'axios';
import { FinvizClient } from '../src/client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
});
