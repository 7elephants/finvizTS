/*
 * ---
 * Workflow Summary
 * Invocation: Internal helper called by getFunds() (fund.ts) and getManagers() (manager.ts).
 * Both wrap the same underlying Finviz fund-portfolio resource, filtered by fund name vs.
 * manager name — this is not part of the public API surface (not re-exported from index.ts).
 *
 * | Step | Method                  | Input                                               | Output                       |
 * |------|--------------------------|-------------------------------------------------------|-------------------------------|
 * | 1    | getFundManagerItems()   | FinvizClient, path, nameColumn, ManagerFundOptions   | Promise<FinvizResponse<ManagerFundItem, F>>   |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, ManagerFundItem, ManagerFundOptions, FormatOption, ResponseFormat } from './types';

import { date, formatOf, integer, number, parseRows, text, type RowSchema } from './parse';
import { buildSortParam } from './utils';

/**
 * CSV column holding the fund series name (`/export/funds`) or portfolio manager name
 * (`/export/managers`); mapped to `ManagerFundItem.manager`.
 */
type FundManagerNameColumn = 'Series Name' | 'Portfolio Manager';

/** Build the ManagerFundItem property → CSV column mapping; `manager` reads `nameColumn`. */
function fundManagerSchema(nameColumn: FundManagerNameColumn): RowSchema<ManagerFundItem> {
  return {
    name: text('Name'),
    manager: text(nameColumn),
    id: text('Investor ID'),
    reportDate: date('Report Date'),
    portfolioValue: number('Portfolio Value'),
    numInvestments: integer('# Investments'),
    newPurchases: integer('New Purchased'),
    soldOut: integer('Sold Out'),
    added: integer('Added'),
    reduced: integer('Reduced'),
    top10ConcentrationPct: number('Top 10 Concentration (%)'),
    turnOverPct: number('Turnover (%)'),
    timeHeldTopTen: number('Time Held Top 10'),
    timeHeldAll: number('Time Held All'),
  };
}

/**
 * Fetch fund or fund-manager portfolios, optionally filtered by a search term and sorted by
 * order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerFundItem.
 *
 * @param client     - Authenticated FinvizClient instance
 * @param path       - `/export/funds` or `/export/managers`
 * @param nameColumn - `Series Name` (funds) or `Portfolio Manager` (managers)
 * @param options    - Search term and sort options, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getFundManagerItems<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  path: string,
  nameColumn: FundManagerNameColumn,
  options: ManagerFundOptions & FormatOption<F>,
): Promise<FinvizResponse<ManagerFundItem, F>> {
  const rows = await client.getRecords(path, {
    search: options.search,
    sort: buildSortParam(options.order, options.orderDirection),
  });
  return parseRows(rows, fundManagerSchema(nameColumn), formatOf(client, options));
}
