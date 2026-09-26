/*
 * ---
 * Workflow Summary
 * Invocation: Called via `getInsiders(client, options)`. Fetches a multi-row CSV of insider
 * trading transactions filtered by ticker, transaction type, owner relationship, and minimum
 * transaction value.
 *
 * | Step | Method        | Input                          | Output                  |
 * |------|---------------|---------------------------------|-------------------------|
 * | 1    | getInsiders() | FinvizClient, InsiderOptions   | Promise<FinvizResponse<InsiderItem, F>>  |
 * ---
 */

import type { FinvizClient } from './client';
import type { FinvizResponse, InsiderItem, InsiderOptions, FormatOption, ResponseFormat } from './types';

import { buildSortParam } from './utils';
import { date, formatOf, integer, number, parseRows, text, type RowSchema } from './parse';

/** InsiderItem property → CSV column mapping. */
const INSIDER_SCHEMA: RowSchema<InsiderItem> = {
  ticker: text('Ticker'),
  owner: text('Owner'),
  ownerCIK: integer('Owner CIK'),
  relationship: text('Relationship'),
  date: date('Date'),
  transactionType: text('Transaction'),
  cost: number('Cost'),
  shares: integer('#Shares'),
  value: number('Value ($)'),
  totalShares: integer('#Shares Total'),
  SECForm: date('SEC Form 4'),
  SECFormUrl: text('SEC Form 4 Link'),
};

/**
 * Fetch insider trading transactions, optionally filtered by ticker, transaction type,
 * owner relationship, minimum transaction value, or owner CIK.
 * The API returns a multi-row CSV; each row is mapped to an InsiderItem.
 *
 * @param client  - Authenticated FinvizClient instance
 * @param options - Ticker, transaction type, owner relationship, and sort options, plus optional `format`
 *                  (`parsed` | `raw` | `both`) overriding the client default
 */
export async function getInsiders<C extends ResponseFormat = 'parsed', F extends ResponseFormat = C>(
  client: FinvizClient<C>,
  options: InsiderOptions & FormatOption<F> = {},
): Promise<FinvizResponse<InsiderItem, F>> {
  const rows = await client.getRecords('/export/insiders', {
    t: options.ticker,
    tc: options.type,
    or: options.ownerRel,
    tv: options.minimumTransactionValue,
    oc: options.ownerCIK,
    o: buildSortParam(options.order, options.orderDirection),
  });
  return parseRows(rows, INSIDER_SCHEMA, formatOf(client, options));
}
