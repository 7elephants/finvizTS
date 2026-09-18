/*
 * ---
 * Workflow Summary
 * Invocation: Imported by consumers and re-exported from types/screener/index.ts.
 *
 * | Step | Description                             | Input | Output                        |
 * |------|------------------------------------------|-------|--------------------------------|
 * | 1    | Export ScreenerNewsDateFilter const + type | —  | Typed news date filter values |
 * ---
 */

/** Screener news date filter values for the `f` query parameter. */
export const ScreenerNewsDateFilter = {
  TODAY: 'news_date_today',
  TODAY_AFTERMARKET: 'news_date_todayafter',
  SINCE_YESTERDAY: 'news_date_sinceyesterday',
  SINCE_YESTERDAY_AFTERMARKET: 'news_date_sinceyesterdayafter',
  YESTERDAY: 'news_date_yesterday',
  YESTERDAY_AFTERMARKET: 'news_date_yesterdayafter',
  LAST_5_MINUTES: 'news_date_prevminutes5',
  LAST_30_MINUTES: 'news_date_prevminutes30',
  LAST_HOUR: 'news_date_prevhours1',
  LAST_24_HOURS: 'news_date_prevhours24',
  LAST_7_DAYS: 'news_date_prevdays7',
  LAST_MONTH: 'news_date_prevmonth',
} as const;

/** Union of all known screener news date filter values. */
export type ScreenerNewsDateFilter = (typeof ScreenerNewsDateFilter)[keyof typeof ScreenerNewsDateFilter];
