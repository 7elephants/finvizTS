import { FinvizClient } from '../src/client';
import { getQuote } from '../src/quote';

describe('getQuote', () => {
  const mockGet = jest.fn();
  const client = { get: mockGet } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls the quote endpoint with the ticker', async () => {
    mockGet.mockResolvedValueOnce({ Ticker: 'AAPL', Price: '180.00' });

    const result = await getQuote(client, 'AAPL');

    expect(mockGet).toHaveBeenCalledWith('/api/quote.ashx', { t: 'AAPL' });
    expect(result).toMatchObject({ Ticker: 'AAPL' });
  });
});
