import { FinvizClient } from '../src/client';
import { getScreener } from '../src/screener';

describe('getScreener', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the screener endpoint and no options', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client);
    expect(mockGetRecords).toHaveBeenCalledWith('/api/screener.ashx', expect.objectContaining({}));
  });

  it('passes filters, order, and signal when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client, { filters: 'exch_nasd', order: 'price', signal: 'ta_topgainers' });

    expect(mockGetRecords).toHaveBeenCalledWith(
      '/api/screener.ashx',
      expect.objectContaining({ f: 'exch_nasd', o: 'price', s: 'ta_topgainers' }),
    );
  });
});
