import { FinvizClient } from '../src/client';
import { getNews } from '../src/news';

describe('getNews', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the news endpoint and no ticker', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getNews(client);
    expect(mockGetRecords).toHaveBeenCalledWith('/api/news.ashx', { t: undefined });
  });

  it('passes ticker when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getNews(client, { ticker: 'TSLA' });
    expect(mockGetRecords).toHaveBeenCalledWith('/api/news.ashx', { t: 'TSLA' });
  });

  it('maps CSV rows to NewsItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      { Date: '2024-01-01', Title: 'Apple hits ATH', Source: 'Reuters', URL: 'https://example.com' },
    ]);

    const result = await getNews(client, { ticker: 'AAPL' });

    expect(result).toEqual([
      { date: '2024-01-01', title: 'Apple hits ATH', source: 'Reuters', url: 'https://example.com' },
    ]);
  });
});
