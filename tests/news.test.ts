import { FinvizClient } from '../src/client';
import { getNews } from '../src/news';
import { NewsType } from '../src/types';

describe('getNews', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('defaults to MarketByTime (v=1) when no type is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getNews(client);
    expect(mockGetRecords).toHaveBeenCalledWith('/news_export.ashx', {
      v: 1,
      pid: undefined,
      t: undefined,
    });
  });

  it('passes news type when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getNews(client, { type: NewsType.Stock });
    expect(mockGetRecords).toHaveBeenCalledWith('/news_export.ashx', {
      v: 3,
      pid: undefined,
      t: undefined,
    });
  });

  it('passes tickers when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getNews(client, { type: NewsType.Stock, tickers: 'AAPL,MSFT' });
    expect(mockGetRecords).toHaveBeenCalledWith('/news_export.ashx', {
      v: 3,
      pid: undefined,
      t: 'AAPL,MSFT',
    });
  });

  it('passes portfolioId when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getNews(client, { type: NewsType.ETF, portfolioId: '12345' });
    expect(mockGetRecords).toHaveBeenCalledWith('/news_export.ashx', {
      v: 4,
      pid: '12345',
      t: undefined,
    });
  });

  it('maps CSV rows to NewsItem shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      {
        Title: 'Apple hits ATH',
        Source: 'Reuters',
        Date: '4/11/2026 8:20',
        Url: 'https://example.com',
        Category: 'Stock',
        Ticker: 'AAPL',
      },
    ]);

    const result = await getNews(client, { type: NewsType.Stock, tickers: 'AAPL' });

    expect(result).toEqual([
      {
        title: 'Apple hits ATH',
        source: 'Reuters',
        date: '4/11/2026 8:20',
        url: 'https://example.com',
        category: 'Stock',
        ticker: 'AAPL',
      },
    ]);
  });
});
