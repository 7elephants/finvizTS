/*
 * ---
 * Workflow Summary
 * Invocation: Imported by consumers to compose typed screener filter strings for ScreenerOptions.filters.
 *
 * | Step | Description                                | Input                    | Output             |
 * |------|--------------------------------------------|--------------------------|--------------------|
 * | 1    | Receive array of filter groups             | (string | string[])[]    | —                  |
 * | 2    | For each string group, pass through as-is  | string                   | string             |
 * | 3    | For each array group, find shared prefix   | string[]                 | prefix string      |
 * | 4    | Emit first value in full, strip prefix     | string[]                 | 'pre_v1|v2|v3'     |
 * | 5    | Join all groups with ','                   | string[]                 | filter string      |
 * ---
 */

/**
 * Finds the shared data-filter prefix for a group of values from the same filter type.
 * Returns the longest common prefix that ends at an underscore boundary.
 * For example: ['exch_amex', 'exch_nasd'] → 'exch_'
 *              ['ta_perf_dup', 'ta_perf_ddown'] → 'ta_perf_'
 */
function filterGroupPrefix(values: [string, ...string[]]): string {
  const first = values[0];
  let commonLen = first.length;
  for (const v of values.slice(1)) {
    let i = 0;
    while (i < commonLen && i < v.length && first[i] === v[i]) i++;
    commonLen = i;
  }
  const commonStr = first.slice(0, commonLen);
  const lastUnderscore = commonStr.lastIndexOf('_');
  return lastUnderscore >= 0 ? commonStr.slice(0, lastUnderscore + 1) : '';
}

/**
 * Combines screener filter values into the string expected by the Finviz `f` query parameter.
 *
 * Pass the result directly to `ScreenerOptions.filters`.
 *
 * Each element in `groups` represents one filter type:
 * - A **string** is a single filter value and is passed through as-is.
 * - A **string[]** contains multiple values for the same filter type (OR'd together).
 *   The shared prefix is written once; only the unique suffixes are repeated, joined with `|`.
 *
 * Filter types are AND'd together, separated by `,`.
 *
 * @example
 * // Single values, AND'd:
 * buildFilters([ScreenerExchangeFilter.NASDAQ, ScreenerCountryFilter.USA])
 * // → 'exch_nasd,geo_usa'
 *
 * @example
 * // Multiple values for one filter type (OR'd), plus another filter (AND'd):
 * buildFilters([[ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA])
 * // → 'exch_amex|nasd,geo_usa'
 *
 * @example
 * // Mixed:
 * buildFilters([ScreenerMarketCapFilter.MEGA, [ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA])
 * // → 'cap_mega,exch_amex|nasd,geo_usa'
 */
export function buildFilters(groups: (string | string[])[]): string {
  return groups
    .map((group) => {
      if (!Array.isArray(group)) return group;
      if (group.length === 1) return group[0];
      const prefix = filterGroupPrefix(group as [string, ...string[]]);
      return group[0] + '|' + group.slice(1).map((v) => v.slice(prefix.length)).join('|');
    })
    .join(',');
}
