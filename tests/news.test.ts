import { FinvizClient } from '../src/client';
import { getNews } from '../src/news';

describe('getNews', () => {
  const mockGet = jest.fn();
  const client = { get: mockGet } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls the news endpoint without a ticker', async () => {
    mockGet.mockResolvedValueOnce([]);
    await getNews(client);
    expect(mockGet).toHaveBeenCalledWith('/api/news.ashx', { t: undefined });
  });

  it('passes ticker when provided', async () => {
    mockGet.mockResolvedValueOnce([]);
    await getNews(client, { ticker: 'TSLA' });
    expect(mockGet).toHaveBeenCalledWith('/api/news.ashx', { t: 'TSLA' });
  });
});
