/*
 * ---
 * Workflow Summary
 * Invocation: Run via `npx jest tests/options.test.ts` or `npm test`.
 *
 * | Step | Description                                    | Input                | Output                    |
 * |------|-------------------------------------------------|----------------------|----------------------------|
 * | 1    | Mock FinvizClient.getRecords                   | jest.fn()            | Controlled mock           |
 * | 2    | Call getOptionsChain with ticker and options   | OptionsChainOptions  | Forwarded params          |
 * | 3    | Assert records are wrapped unchanged           | Mock CSV row records | `{ items, errors: [] }`   |
 * ---
 */

import { FinvizClient } from '../src/client';
import { getOptionsChain } from '../src/options';
import { OptionsViewType } from '../src/types';

describe('getOptionsChain', () => {
  const mockGetRecords = jest.fn();
  const client = { getRecords: mockGetRecords } as unknown as FinvizClient;

  beforeEach(() => jest.clearAllMocks());

  it('defaults the view type to prices', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getOptionsChain(client, 'MSFT', { expiration: '2026-05-08' });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/options', {
      t: 'MSFT',
      e: '2026-05-08',
      ty: 'oc',
    });
  });

  it('passes an explicit view type', async () => {
    mockGetRecords.mockResolvedValueOnce([]);

    await getOptionsChain(client, 'MSFT', {
      expiration: '2026-05-08',
      viewType: OptionsViewType.VOLATILITY_GREEKS,
    });

    expect(mockGetRecords).toHaveBeenCalledWith('/export/options', {
      t: 'MSFT',
      e: '2026-05-08',
      ty: 'ocv',
    });
  });

  it('returns the records unchanged with no errors', async () => {
    const rows = [{ 'Contract Name': 'MSFT260413C00290000', 'Last Trade': '', Strike: '290' }];
    mockGetRecords.mockResolvedValueOnce(rows);

    const result = await getOptionsChain(client, 'MSFT', { expiration: '2026-05-08' });

    expect(result).toEqual({ items: rows, errors: [] });
  });
});
