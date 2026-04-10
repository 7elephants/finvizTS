import { FinvizClient } from '../src/client';
import { getScreener } from '../src/screener';

describe('getScreener', () => {
  const mockGet = jest.fn();
  const client = { get: mockGet } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls the screener endpoint with no options', async () => {
    mockGet.mockResolvedValueOnce([]);
    await getScreener(client);
    expect(mockGet).toHaveBeenCalledWith('/api/screener.ashx', expect.objectContaining({}));
  });

  it('passes filters, order, and signal when provided', async () => {
    mockGet.mockResolvedValueOnce([]);
    await getScreener(client, { filters: 'exch_nasd', order: 'price', signal: 'ta_topgainers' });

    expect(mockGet).toHaveBeenCalledWith(
      '/api/screener.ashx',
      expect.objectContaining({ f: 'exch_nasd', o: 'price', s: 'ta_topgainers' }),
    );
  });
});
