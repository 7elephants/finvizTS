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

export const SortDirection = {
    ASC: '',
    DESC: '-',
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];
