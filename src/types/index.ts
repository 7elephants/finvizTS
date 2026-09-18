/*
 * ---
 * Workflow Summary
 * Invocation: Resolved automatically when any module imports from './types' or '../types'.
 *             Re-exports all domain types so consumers see a single unified surface.
 *
 * | Step | Description                           | Input              | Output               |
 * |------|---------------------------------------|--------------------|----------------------|
 * | 1    | Re-export client types                | types/client.ts    | FinvizClientOptions  |
 * | 2    | Re-export screener types              | types/screener.ts  | Screener, views, etc.|
 * | 3    | Re-export quote types                 | types/quote.ts     | Quote, periods, etc. |
 * | 4    | Re-export news types                  | types/news.ts      | NewsItem, etc.       |
 * | 5    | Re-export portfolio types             | types/portfolio.ts | Portfolio, etc.      |
 * | 6    | Re-export groups types                | types/groups.ts    | Group, GroupView etc.|
 * | 7    | Re-export filings types               | types/filings.ts   | Filing, etc.         |
 * | 8    | Re-export options types               | types/options.ts   | Option, etc.         |
 * | 9    | Re-export calendar types              | types/calendar.ts  | Calendar, etc.       |
 * | 10   | Re-export insider types               | types/insider.ts   | InsiderItem, etc.    |
 * | 11   | Re-export manager/fund types          | types/manager.ts,  | ManagerFundOrderType,|
 * |      |                                        | types/fund.ts      | etc.                 |
 * | 12   | Export SortDirection const + type     | —                  | Typed sort direction |
 * | 13   | Export ErrorLevel const + type        | —                  | Typed error level    |
 * ---
 */

export * from './client';
export * from './screener';
export * from './quote';
export * from './news';
export * from './portfolio';
export * from './groups';
export * from './filings';
export * from './options';
export * from './calendar';
export * from './insider';
export * from './manager';
export * from './fund';

export const SortDirection = {
    ASC: '',
    DESC: '-',
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

export const ErrorLevel = {
    FATAL: 1,
    ERROR: 2,
    WARN: 3,
}

export type ErrorLevel = (typeof ErrorLevel)[keyof typeof ErrorLevel];

export const ManagerFundOrderType = {
  MOST_POPULAR: 'most_popular',
  PORTFOLIO_VALUE: 'portfolio_value',
  INVESTMENTS: 'num_investments',
  PURCHASED: 'new_purchased',
  SOLD: 'sold_out',
  ADDED: 'added',
  REDUCED: 'reduced',
  TOP_TEN_CONCENTRATION: 'top_ten_concentration',
  TURNOVER: 'turnover',
  TIME_HELD_TOP_TEN: 'time_held_top10',
  TIME_HELD_ALL: 'time_held_all',
} as const;
export type ManagerFundOrderType = (typeof ManagerFundOrderType)[keyof typeof ManagerFundOrderType];
