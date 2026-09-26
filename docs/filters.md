[**finvizts**](README.md)

***

[finvizts](README.md) / filters

# filters

## Functions

### buildFilters()

> **buildFilters**(`groups`): `string`

Defined in: [filters.ts:62](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/filters.ts#L62)

Combines screener filter values into the string expected by the Finviz `f` query parameter.

Pass the result directly to `ScreenerOptions.filters`.

Each element in `groups` represents one filter type:
- A **string** is a single filter value and is passed through as-is.
- A **string[]** contains multiple values for the same filter type (OR'd together).
  The shared prefix is written once; only the unique suffixes are repeated, joined with `|`.

Filter types are AND'd together, separated by `,`.

#### Parameters

##### groups

(`string` \| `string`[])[]

#### Returns

`string`

#### Examples

```ts
// Single values, AND'd:
buildFilters([ScreenerExchangeFilter.NASDAQ, ScreenerCountryFilter.USA])
// → 'exch_nasd,geo_usa'
```

```ts
// Multiple values for one filter type (OR'd), plus another filter (AND'd):
buildFilters([[ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA])
// → 'exch_amex|nasd,geo_usa'
```

```ts
// Mixed:
buildFilters([ScreenerMarketCapFilter.MEGA, [ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA])
// → 'cap_mega,exch_amex|nasd,geo_usa'
```
