import { FinvizClient } from '../src/client';
import { getQuote } from '../src/quote';
import { QuotePeriod, QuoteRange } from '../src/types';

describe('getQuote', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the quote endpoint, ticker, and period', async () => {
    mockGetRecords.mockResolvedValueOnce([
      { Date: '4/1/2026', Open: '180.00', High: '182.00', Low: '179.50', Close: '181.00', Volume: '50000000' },
    ]);

    const result = await getQuote(client, 'AAPL', { period: QuotePeriod.Daily });

    expect(mockGetRecords).toHaveBeenCalledWith('/quote_export.ashx', {
      t: 'AAPL',
      p: 'd',
      r: undefined,
    });
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({ Date: '4/1/2026', Close: '181.00' });
  });

  it('passes range when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getQuote(client, 'MSFT', { period: QuotePeriod.Weekly, range: QuoteRange.Year1 });

    expect(mockGetRecords).toHaveBeenCalledWith('/quote_export.ashx', {
      t: 'MSFT',
      p: 'w',
      r: 'y1',
    });
  });

  it('maps CSV rows to Quote shape', async () => {
    mockGetRecords.mockResolvedValueOnce([
      { Date: '3/31/2016', Open: '54.95', High: '55.59', Low: '54.86', Close: '55.23', Volume: '26360496' },
      { Date: '4/1/2016', Open: '55.05', High: '55.61', Low: '54.57', Close: '55.57', Volume: '24399192' },
    ]);

    const result = await getQuote(client, 'MSFT', { period: QuotePeriod.Daily });

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      Date: '3/31/2016',
      Open: '54.95',
      High: '55.59',
      Low: '54.86',
      Close: '55.23',
      Volume: '26360496',
    });
  });
});
