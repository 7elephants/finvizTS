/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getPortfolio(client, portfolioId, options)`. Fetches a multi-row CSV
 * for a saved Finviz portfolio and returns each row as a key/value record.
 *
 * | Step | Method          | Input                                    | Output                  |
 * |------|-----------------|------------------------------------------|-------------------------|
 * | 1    | getPortfolio()  | FinvizClient, portfolioId, PortfolioOptions | Promise<Portfolio[]> |
 * ---
 */

import type { FinvizClient } from './client';
import type { PortfolioOptions, Portfolio } from './types';

/**
 * Fetch holdings for a saved Finviz portfolio by its ID.
 * The portfolio ID can be found in the URL when viewing a portfolio on the Finviz website.
 *
 * @param client      - Authenticated FinvizClient instance
 * @param portfolioId - The numeric portfolio ID from the Finviz URL
 * @param options     - Optional sort order and column selection
 */
export async function getPortfolio(
  client: FinvizClient,
  portfolioId: string | number,
  options: PortfolioOptions = {},
): Promise<Portfolio[]> {
  return client.getRecords('/portfolio_export.ashx', {
    pid: String(portfolioId),
    o: options.order,
    c: options.fields?.join(','),
  });
}
