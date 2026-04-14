import { FinvizClient } from '../src/client';
import { getScreener } from '../src/screener';
import { ScreenerView, ScreenerField, ScreenerExchangeFilter, ScreenerMarketCapFilter, ScreenerCountryFilter} from '../src/types';

describe('getScreener', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the export endpoint and no options', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client);
    expect(mockGetRecords).toHaveBeenCalledWith('/export.ashx', expect.objectContaining({}));
  });

  it('passes view ID when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client, { view: ScreenerView.Overview });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export.ashx',
      expect.objectContaining({ v: 111 }),
    );
  });

  it('joins fields array into a comma-separated string for the c param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client, {
      fields: [ScreenerField.No, ScreenerField.Ticker, ScreenerField.Price],
    });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export.ashx',
      expect.objectContaining({ c: '0,1,65' }),
    );
  });

  it('passes filters, order, and signal when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client, { filters: 'exch_nasd', order: 'price', signal: 'ta_topgainers' });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export.ashx',
      expect.objectContaining({ f: ScreenerExchangeFilter.NASDAQ, o: 'price', s: 'ta_topgainers' }),
    );
  });

  it('passes multiple filters using buildFilters when filters is an array', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client, {filters:[ScreenerMarketCapFilter.MEGA, [ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA]});
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export.ashx',
      expect.objectContaining({ f: 'cap_mega,exch_amex|nasd,geo_usa' }),
    );
  });



  it('accepts a custom numeric view ID', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getScreener(client, { view: 152 });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/export.ashx',
      expect.objectContaining({ v: 152 }),
    );
  });
});
