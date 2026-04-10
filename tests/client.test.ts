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

  it('appends auth_token to every request', async () => {
    mockGet.mockResolvedValueOnce({ data: {} });
    const client = new FinvizClient({ apiToken: 'abc123' });

    await client.get('/api/quote.ashx', { t: 'AAPL' });

    expect(mockGet).toHaveBeenCalledWith(
      '/api/quote.ashx',
      expect.objectContaining({ params: expect.objectContaining({ auth_token: 'abc123' }) }),
    );
  });

  it('accepts a custom baseUrl and timeout', () => {
    new FinvizClient({ apiToken: 'tok', baseUrl: 'https://custom.host', timeout: 5000 });
    expect(mockedAxios.create).toHaveBeenCalledWith(
      expect.objectContaining({ baseURL: 'https://custom.host', timeout: 5000 }),
    );
  });
});
