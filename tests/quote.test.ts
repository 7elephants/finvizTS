import { FinvizClient } from '../src/client';
import { getQuote } from '../src/quote';

describe('getQuote', () => {
  const mockGetRecord = jest.fn();
  const client = { getRecord: mockGetRecord } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecord with the quote endpoint and ticker', async () => {
    mockGetRecord.mockResolvedValueOnce({ Ticker: 'AAPL', Price: '180.00' });

    const result = await getQuote(client, 'AAPL');

    expect(mockGetRecord).toHaveBeenCalledWith('/api/quote.ashx', { t: 'AAPL' });
    expect(result).toMatchObject({ Ticker: 'AAPL', Price: '180.00' });
  });
});
