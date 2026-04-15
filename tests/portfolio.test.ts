/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/portfolio.test.ts` or `npm test`.
 *
 * | Step | Description                                      | Input                         | Output                  |
 * |------|--------------------------------------------------|-------------------------------|-------------------------|
 * | 1    | Mock FinvizClient.getRecords                     | jest.fn()                     | Controlled mock         |
 * | 2    | Call getPortfolio with various option combos     | portfolioId, PortfolioOptions | Forwarded params        |
 * | 3    | Assert getRecords was called with correct args   | Captured call args            | Passing assertions      |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getPortfolio } from '../src/portfolio';
import { PortfolioField, PortfolioOrder, SortDirection } from '../src/types';

describe('getPortfolio', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('calls getRecords with the portfolio endpoint and required pid param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getPortfolio(client, 12345);
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ pid: '12345' }),
    );
  });

  it('accepts a string portfolio ID', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getPortfolio(client, '1000983827');
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ pid: '1000983827' }),
    );
  });

  it('passes order when provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getPortfolio(client, 12345, { order: 'price' });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ o: 'price' }),
    );
  });

  it('passes descending order using orderDirection and order', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getPortfolio(client, 12345, { orderDirection: SortDirection.DESC, order: PortfolioOrder.PRICE });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ o: SortDirection.DESC + PortfolioOrder.PRICE }),
    );
  });

  it('passes ascending order when only order is provided', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getPortfolio(client, 12345, { order: PortfolioOrder.COMPANY });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ o: PortfolioOrder.COMPANY }),
    );
  });

  it('passes fields array as the c param', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    await getPortfolio(client, 12345, {
      fields: [PortfolioField.TICKER, PortfolioField.COMPANY, PortfolioField.PRICE],
    });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ c: '0,1,2' }),
    );
  });

  it('passes all fields constants correctly', async () => {
    mockGetRecords.mockResolvedValueOnce([]);
    const allFields = [
      PortfolioField.TICKER,
      PortfolioField.COMPANY,
      PortfolioField.PRICE,
      PortfolioField.CHANGE_PERCENT,
      PortfolioField.VOLUME,
      PortfolioField.TRANSACTION,
      PortfolioField.DATE,
      PortfolioField.SHARES,
      PortfolioField.COST,
      PortfolioField.MARKET_VALUE,
      PortfolioField.GAIN,
      PortfolioField.GAIN_PERCENT,
      PortfolioField.CHANGE,
    ];
    await getPortfolio(client, 12345, { fields: allFields });
    expect(mockGetRecords).toHaveBeenCalledWith(
      '/portfolio_export.ashx',
      expect.objectContaining({ c: '0,1,2,3,4,5,6,7,8,9,10,11,12' }),
    );
  });

  it('returns the records resolved by the client', async () => {
    const mockRows = [
      { Ticker: 'AAPL', Company: 'Apple Inc', Price: '175.00' },
      { Ticker: 'MSFT', Company: 'Microsoft Corporation', Price: '370.87' },
    ];
    mockGetRecords.mockResolvedValueOnce(mockRows);
    const result = await getPortfolio(client, 12345);
    expect(result).toEqual(mockRows);
  });
});
