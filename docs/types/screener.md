[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/screener

# types/screener

## Interfaces

### ScreenerOptions

Defined in: [types/screener/index.ts:179](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L179)

Options for a screener request.

#### Properties

##### fields?

> `optional` **fields?**: `number`[]

Defined in: [types/screener/index.ts:189](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L189)

Columns to include in the response. Maps to the `c` query param as a comma-separated list.
Use the `ScreenerField` constants (e.g. `ScreenerField.TICKER`, `ScreenerField.PRICE`).

##### filters?

> `optional` **filters?**: `string` \| (`string` \| `string`[])[]

Defined in: [types/screener/index.ts:204](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L204)

Filters for the `f` query parameter. Accepts either:
- A pre-built filter string (e.g. `"exch_nasd,geo_usa"`)
- An array of filter groups passed directly to `buildFilters()`:
  each element is a single filter value (string) or multiple OR'd values (string[])

###### Examples

```ts
filters: [ScreenerExchangeFilter.NASDAQ, ScreenerCountryFilter.USA]
// → 'exch_nasd,geo_usa'
```

```ts
filters: [[ScreenerExchangeFilter.AMEX, ScreenerExchangeFilter.NASDAQ], ScreenerCountryFilter.USA]
// → 'exch_amex|nasd,geo_usa'
```

##### order?

> `optional` **order?**: [`ScreenerOrder`](screener/order.md#screenerorder)

Defined in: [types/screener/index.ts:206](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L206)

Sort order column

##### orderDirection?

> `optional` **orderDirection?**: [`SortDirection`](../types.md#sortdirection)

Defined in: [types/screener/index.ts:208](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L208)

Sort order column direction (either '' or '-')

##### rows?

> `optional` **rows?**: `number`

Defined in: [types/screener/index.ts:210](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L210)

Starting row index for pagination (1-based)

##### signal?

> `optional` **signal?**: `string`

Defined in: [types/screener/index.ts:212](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L212)

Signal filter shortcut (e.g. `ScreenerSignal.TOP_GAINERS`)

##### tickers?

> `optional` **tickers?**: `string` \| `string`[]

Defined in: [types/screener/index.ts:214](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L214)

Ticker symbols (e.g. "AAPL")

##### view?

> `optional` **view?**: `number`

Defined in: [types/screener/index.ts:184](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L184)

Screener view ID controlling which columns are returned.
Use the `ScreenerView` constants (e.g. `ScreenerView.OVERVIEW`) or a custom numeric ID.

## Type Aliases

### Screener

> **Screener** = `Record`\<`string`, `string`\>

Defined in: [types/screener/index.ts:19](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L19)

A single row returned by the screener endpoint.

***

### ScreenerField

> **ScreenerField** = *typeof* [`ScreenerField`](#screenerfield-1)\[keyof *typeof* [`ScreenerField`](#screenerfield-1)\]

Defined in: [types/screener/index.ts:45](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L45)

Union of all known screener field ID values.

***

### ScreenerView

> **ScreenerView** = *typeof* [`ScreenerView`](#screenerview-1)\[keyof *typeof* [`ScreenerView`](#screenerview-1)\]

Defined in: [types/screener/index.ts:22](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L22)

Union of all known screener view ID values.

## Variables

### ScreenerField

> `const` **ScreenerField**: `object`

Defined in: [types/screener/index.ts:45](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L45)

All documented screener field IDs for the `c` query parameter.

#### Type Declaration

##### ALL\_TIME\_HIGH

> `readonly` **ALL\_TIME\_HIGH**: `125` = `125`

##### ALL\_TIME\_LOW

> `readonly` **ALL\_TIME\_LOW**: `126` = `126`

##### ANALYST\_RECOMMENDATION

> `readonly` **ANALYST\_RECOMMENDATION**: `62` = `62`

##### ASSET\_TYPE

> `readonly` **ASSET\_TYPE**: `100` = `100`

##### AUM

> `readonly` **AUM**: `109` = `109`

##### AVERAGE\_TRUE\_RANGE

> `readonly` **AVERAGE\_TRUE\_RANGE**: `49` = `49`

##### AVERAGE\_VOLUME

> `readonly` **AVERAGE\_VOLUME**: `63` = `63`

##### BETA

> `readonly` **BETA**: `48` = `48`

##### BOOK\_VALUE\_PER\_SHARE

> `readonly` **BOOK\_VALUE\_PER\_SHARE**: `73` = `73`

##### CASH\_PER\_SHARE

> `readonly` **CASH\_PER\_SHARE**: `74` = `74`

##### CATEGORY

> `readonly` **CATEGORY**: `103` = `103`

##### CHANGE

> `readonly` **CHANGE**: `66` = `66`

##### CHANGE\_FROM\_OPEN

> `readonly` **CHANGE\_FROM\_OPEN**: `60` = `60`

##### COMPANY

> `readonly` **COMPANY**: `2` = `2`

##### COUNTRY

> `readonly` **COUNTRY**: `5` = `5`

##### CURRENT\_RATIO

> `readonly` **CURRENT\_RATIO**: `35` = `35`

##### DAILY\_DIGEST

> `readonly` **DAILY\_DIGEST**: `150` = `150`

##### DIVIDEND

> `readonly` **DIVIDEND**: `75` = `75`

##### DIVIDEND\_EX\_DATE

> `readonly` **DIVIDEND\_EX\_DATE**: `131` = `131`

##### DIVIDEND\_GROWTH\_1Y

> `readonly` **DIVIDEND\_GROWTH\_1Y**: `147` = `147`

##### DIVIDEND\_GROWTH\_3Y

> `readonly` **DIVIDEND\_GROWTH\_3Y**: `148` = `148`

##### DIVIDEND\_GROWTH\_5Y

> `readonly` **DIVIDEND\_GROWTH\_5Y**: `149` = `149`

##### DIVIDEND\_TTM

> `readonly` **DIVIDEND\_TTM**: `130` = `130`

##### DIVIDEND\_YIELD

> `readonly` **DIVIDEND\_YIELD**: `14` = `14`

##### EARNINGS\_DATE

> `readonly` **EARNINGS\_DATE**: `68` = `68`

##### EMPLOYEES

> `readonly` **EMPLOYEES**: `76` = `76`

##### ENTERPRISE\_VALUE

> `readonly` **ENTERPRISE\_VALUE**: `144` = `144`

##### EPS

> `readonly` **EPS**: `16` = `16`

##### EPS\_ESTIMATE\_NEXT\_QUARTER

> `readonly` **EPS\_ESTIMATE\_NEXT\_QUARTER**: `77` = `77`

##### EPS\_GROWTH\_NEXT\_5Y

> `readonly` **EPS\_GROWTH\_NEXT\_5Y**: `20` = `20`

##### EPS\_GROWTH\_NEXT\_YEAR

> `readonly` **EPS\_GROWTH\_NEXT\_YEAR**: `18` = `18`

##### EPS\_GROWTH\_PAST\_3Y

> `readonly` **EPS\_GROWTH\_PAST\_3Y**: `142` = `142`

##### EPS\_GROWTH\_PAST\_5Y

> `readonly` **EPS\_GROWTH\_PAST\_5Y**: `19` = `19`

##### EPS\_GROWTH\_QTR\_OVER\_QTR

> `readonly` **EPS\_GROWTH\_QTR\_OVER\_QTR**: `22` = `22`

##### EPS\_GROWTH\_THIS\_YEAR

> `readonly` **EPS\_GROWTH\_THIS\_YEAR**: `17` = `17`

##### EPS\_SURPRISE

> `readonly` **EPS\_SURPRISE**: `127` = `127`

##### EPS\_YOY\_TTM

> `readonly` **EPS\_YOY\_TTM**: `132` = `132`

##### EV\_EBITDA

> `readonly` **EV\_EBITDA**: `145` = `145`

##### EV\_SALES

> `readonly` **EV\_SALES**: `146` = `146`

##### EXCHANGE

> `readonly` **EXCHANGE**: `129` = `129`

##### FLOAT\_OUTSTANDING

> `readonly` **FLOAT\_OUTSTANDING**: `85` = `85`

##### FORWARD\_PE

> `readonly` **FORWARD\_PE**: `8` = `8`

##### GAP

> `readonly` **GAP**: `61` = `61`

##### GROSS\_MARGIN

> `readonly` **GROSS\_MARGIN**: `39` = `39`

##### HIGH

> `readonly` **HIGH**: `87` = `87`

##### HIGH\_50\_DAY

> `readonly` **HIGH\_50\_DAY**: `55` = `55`

##### HIGH\_52\_WEEK

> `readonly` **HIGH\_52\_WEEK**: `57` = `57`

##### INCOME

> `readonly` **INCOME**: `78` = `78`

##### INDEX

> `readonly` **INDEX**: `79` = `79`

##### INDUSTRY

> `readonly` **INDUSTRY**: `4` = `4`

##### INSIDER\_OWNERSHIP

> `readonly` **INSIDER\_OWNERSHIP**: `26` = `26`

##### INSIDER\_TRANSACTIONS

> `readonly` **INSIDER\_TRANSACTIONS**: `27` = `27`

##### INSTITUTIONAL\_OWNERSHIP

> `readonly` **INSTITUTIONAL\_OWNERSHIP**: `28` = `28`

##### INSTITUTIONAL\_TRANSACTIONS

> `readonly` **INSTITUTIONAL\_TRANSACTIONS**: `29` = `29`

##### IPO\_DATE

> `readonly` **IPO\_DATE**: `70` = `70`

##### LONG\_TERM\_DEBT\_EQUITY

> `readonly` **LONG\_TERM\_DEBT\_EQUITY**: `37` = `37`

##### LOW

> `readonly` **LOW**: `88` = `88`

##### LOW\_50\_DAY

> `readonly` **LOW\_50\_DAY**: `56` = `56`

##### LOW\_52\_WEEK

> `readonly` **LOW\_52\_WEEK**: `58` = `58`

##### MARKET\_CAP

> `readonly` **MARKET\_CAP**: `6` = `6`

##### NET\_EXPENSE\_RATIO

> `readonly` **NET\_EXPENSE\_RATIO**: `107` = `107`

##### NET\_FLOWS\_1M

> `readonly` **NET\_FLOWS\_1M**: `112` = `112`

##### NET\_FLOWS\_1M\_PCT

> `readonly` **NET\_FLOWS\_1M\_PCT**: `113` = `113`

##### NET\_FLOWS\_3M

> `readonly` **NET\_FLOWS\_3M**: `114` = `114`

##### NET\_FLOWS\_3M\_PCT

> `readonly` **NET\_FLOWS\_3M\_PCT**: `115` = `115`

##### NET\_FLOWS\_YTD

> `readonly` **NET\_FLOWS\_YTD**: `116` = `116`

##### NET\_FLOWS\_YTD\_PCT

> `readonly` **NET\_FLOWS\_YTD\_PCT**: `117` = `117`

##### NET\_PROFIT\_MARGIN

> `readonly` **NET\_PROFIT\_MARGIN**: `41` = `41`

##### NEWS\_TIME

> `readonly` **NEWS\_TIME**: `135` = `135`

##### NEWS\_TITLE

> `readonly` **NEWS\_TITLE**: `137` = `137`

##### NEWS\_URL

> `readonly` **NEWS\_URL**: `136` = `136`

##### NO

> `readonly` **NO**: `0` = `0`

##### OPEN

> `readonly` **OPEN**: `86` = `86`

##### OPERATING\_MARGIN

> `readonly` **OPERATING\_MARGIN**: `40` = `40`

##### OPTIONABLE

> `readonly` **OPTIONABLE**: `80` = `80`

##### P\_CASH

> `readonly` **P\_CASH**: `12` = `12`

##### P\_FREE\_CASH\_FLOW

> `readonly` **P\_FREE\_CASH\_FLOW**: `13` = `13`

##### PAYOUT\_RATIO

> `readonly` **PAYOUT\_RATIO**: `15` = `15`

##### PB

> `readonly` **PB**: `11` = `11`

##### PE

> `readonly` **PE**: `7` = `7`

##### PEG

> `readonly` **PEG**: `9` = `9`

##### PERFORMANCE\_10Y

> `readonly` **PERFORMANCE\_10Y**: `140` = `140`

##### PERFORMANCE\_3Y

> `readonly` **PERFORMANCE\_3Y**: `138` = `138`

##### PERFORMANCE\_5Y

> `readonly` **PERFORMANCE\_5Y**: `139` = `139`

##### PERFORMANCE\_HALF\_YEAR

> `readonly` **PERFORMANCE\_HALF\_YEAR**: `45` = `45`

##### PERFORMANCE\_MONTH

> `readonly` **PERFORMANCE\_MONTH**: `43` = `43`

##### PERFORMANCE\_QUARTER

> `readonly` **PERFORMANCE\_QUARTER**: `44` = `44`

##### PERFORMANCE\_WEEK

> `readonly` **PERFORMANCE\_WEEK**: `42` = `42`

##### PERFORMANCE\_YEAR

> `readonly` **PERFORMANCE\_YEAR**: `46` = `46`

##### PERFORMANCE\_YTD

> `readonly` **PERFORMANCE\_YTD**: `47` = `47`

##### PREVIOUS\_CLOSE

> `readonly` **PREVIOUS\_CLOSE**: `81` = `81`

##### PRICE

> `readonly` **PRICE**: `65` = `65`

##### PS

> `readonly` **PS**: `10` = `10`

##### QUICK\_RATIO

> `readonly` **QUICK\_RATIO**: `36` = `36`

##### RANGE\_52\_WEEK

> `readonly` **RANGE\_52\_WEEK**: `134` = `134`

##### RELATIVE\_VOLUME

> `readonly` **RELATIVE\_VOLUME**: `64` = `64`

##### RETURN\_1Y

> `readonly` **RETURN\_1Y**: `120` = `120`

##### RETURN\_3Y

> `readonly` **RETURN\_3Y**: `121` = `121`

##### RETURN\_5Y

> `readonly` **RETURN\_5Y**: `122` = `122`

##### RETURN\_ON\_ASSETS

> `readonly` **RETURN\_ON\_ASSETS**: `32` = `32`

##### RETURN\_ON\_EQUITY

> `readonly` **RETURN\_ON\_EQUITY**: `33` = `33`

##### RETURN\_ON\_INVESTED\_CAPITAL

> `readonly` **RETURN\_ON\_INVESTED\_CAPITAL**: `34` = `34`

##### REVENUE\_SURPRISE

> `readonly` **REVENUE\_SURPRISE**: `128` = `128`

##### RSI

> `readonly` **RSI**: `59` = `59`

##### SALES

> `readonly` **SALES**: `82` = `82`

##### SALES\_GROWTH\_PAST\_3Y

> `readonly` **SALES\_GROWTH\_PAST\_3Y**: `143` = `143`

##### SALES\_GROWTH\_PAST\_5Y

> `readonly` **SALES\_GROWTH\_PAST\_5Y**: `21` = `21`

##### SALES\_GROWTH\_QTR\_OVER\_QTR

> `readonly` **SALES\_GROWTH\_QTR\_OVER\_QTR**: `23` = `23`

##### SALES\_YOY\_TTM

> `readonly` **SALES\_YOY\_TTM**: `133` = `133`

##### SECTOR

> `readonly` **SECTOR**: `3` = `3`

##### SHARES\_FLOAT

> `readonly` **SHARES\_FLOAT**: `25` = `25`

##### SHARES\_OUTSTANDING

> `readonly` **SHARES\_OUTSTANDING**: `24` = `24`

##### SHORT\_FLOAT

> `readonly` **SHORT\_FLOAT**: `30` = `30`

##### SHORT\_INTEREST

> `readonly` **SHORT\_INTEREST**: `84` = `84`

##### SHORT\_RATIO

> `readonly` **SHORT\_RATIO**: `31` = `31`

##### SHORTABLE

> `readonly` **SHORTABLE**: `83` = `83`

##### SMA\_20

> `readonly` **SMA\_20**: `52` = `52`

##### SMA\_200

> `readonly` **SMA\_200**: `54` = `54`

##### SMA\_50

> `readonly` **SMA\_50**: `53` = `53`

##### TAGS

> `readonly` **TAGS**: `105` = `105`

##### TARGET\_PRICE

> `readonly` **TARGET\_PRICE**: `69` = `69`

##### TICKER

> `readonly` **TICKER**: `1` = `1`

##### TOTAL\_DEBT\_EQUITY

> `readonly` **TOTAL\_DEBT\_EQUITY**: `38` = `38`

##### TOTAL\_HOLDINGS

> `readonly` **TOTAL\_HOLDINGS**: `108` = `108`

##### VOLATILITY\_MONTH

> `readonly` **VOLATILITY\_MONTH**: `51` = `51`

##### VOLATILITY\_WEEK

> `readonly` **VOLATILITY\_WEEK**: `50` = `50`

##### VOLUME

> `readonly` **VOLUME**: `67` = `67`

***

### ScreenerView

> `const` **ScreenerView**: `object`

Defined in: [types/screener/index.ts:22](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/types/screener/index.ts#L22)

All known screener view IDs. Pass as the `view` option to `getScreener()`.

#### Type Declaration

##### BASIC

> `readonly` **BASIC**: `311` = `311`

##### CHARTS

> `readonly` **CHARTS**: `211` = `211`

##### CUSTOM

> `readonly` **CUSTOM**: `151` = `151`

##### ETF

> `readonly` **ETF**: `181` = `181`

##### ETF\_PERFORMANCE

> `readonly` **ETF\_PERFORMANCE**: `191` = `191`

##### FINANCIAL

> `readonly` **FINANCIAL**: `161` = `161`

##### MAPS

> `readonly` **MAPS**: `711` = `711`

##### NEWS

> `readonly` **NEWS**: `321` = `321`

##### OVERVIEW

> `readonly` **OVERVIEW**: `111` = `111`

##### OWNERSHIP

> `readonly` **OWNERSHIP**: `141` = `141`

##### PERFORMANCE

> `readonly` **PERFORMANCE**: `131` = `131`

##### SNAPSHOT

> `readonly` **SNAPSHOT**: `341` = `341`

##### TA

> `readonly` **TA**: `351` = `351`

##### TECHNICAL

> `readonly` **TECHNICAL**: `171` = `171`

##### TICKERS

> `readonly` **TICKERS**: `411` = `411`

##### VALUATION

> `readonly` **VALUATION**: `121` = `121`

## References

### ScreenerAfterHoursChangeFilter

Re-exports [ScreenerAfterHoursChangeFilter](screener/technical-filters.md#screenerafterhourschangefilter-1)

***

### ScreenerAfterHoursCloseFilter

Re-exports [ScreenerAfterHoursCloseFilter](screener/technical-filters.md#screenerafterhoursclosefilter-1)

***

### ScreenerAllTimeHighLowFilter

Re-exports [ScreenerAllTimeHighLowFilter](screener/technical-filters.md#screeneralltimehighlowfilter-1)

***

### ScreenerAnalystRecommendationFilter

Re-exports [ScreenerAnalystRecommendationFilter](screener/descriptive-filters.md#screeneranalystrecommendationfilter-1)

***

### ScreenerAverageTrueRangeFilter

Re-exports [ScreenerAverageTrueRangeFilter](screener/technical-filters.md#screeneraveragetruerangefilter-1)

***

### ScreenerAverageVolumeFilter

Re-exports [ScreenerAverageVolumeFilter](screener/descriptive-filters.md#screeneraveragevolumefilter-1)

***

### ScreenerBetaFilter

Re-exports [ScreenerBetaFilter](screener/technical-filters.md#screenerbetafilter-1)

***

### ScreenerCandlestickFilter

Re-exports [ScreenerCandlestickFilter](screener/technical-filters.md#screenercandlestickfilter-1)

***

### ScreenerChangeFilter

Re-exports [ScreenerChangeFilter](screener/technical-filters.md#screenerchangefilter-1)

***

### ScreenerChangeFromOpenFilter

Re-exports [ScreenerChangeFromOpenFilter](screener/technical-filters.md#screenerchangefromopenfilter-1)

***

### ScreenerCountryFilter

Re-exports [ScreenerCountryFilter](screener/descriptive-filters.md#screenercountryfilter-1)

***

### ScreenerCurrentRatioFilter

Re-exports [ScreenerCurrentRatioFilter](screener/fundamental-filters.md#screenercurrentratiofilter-1)

***

### ScreenerCurrentVolumeFilter

Re-exports [ScreenerCurrentVolumeFilter](screener/descriptive-filters.md#screenercurrentvolumefilter-1)

***

### ScreenerDebtEquityFilter

Re-exports [ScreenerDebtEquityFilter](screener/fundamental-filters.md#screenerdebtequityfilter-1)

***

### ScreenerDividendGrowthFilter

Re-exports [ScreenerDividendGrowthFilter](screener/fundamental-filters.md#screenerdividendgrowthfilter-1)

***

### ScreenerDividendYieldFilter

Re-exports [ScreenerDividendYieldFilter](screener/descriptive-filters.md#screenerdividendyieldfilter-1)

***

### ScreenerEarningsDateFilter

Re-exports [ScreenerEarningsDateFilter](screener/descriptive-filters.md#screenerearningsdatefilter-1)

***

### ScreenerEarningsRevenueSurpriseFilter

Re-exports [ScreenerEarningsRevenueSurpriseFilter](screener/fundamental-filters.md#screenerearningsrevenuesurprisefilter-1)

***

### ScreenerEPSGrowthNext5YFilter

Re-exports [ScreenerEPSGrowthNext5YFilter](screener/fundamental-filters.md#screenerepsgrowthnext5yfilter-1)

***

### ScreenerEPSGrowthNextYearFilter

Re-exports [ScreenerEPSGrowthNextYearFilter](screener/fundamental-filters.md#screenerepsgrowthnextyearfilter-1)

***

### ScreenerEPSGrowthPast3YFilter

Re-exports [ScreenerEPSGrowthPast3YFilter](screener/fundamental-filters.md#screenerepsgrowthpast3yfilter-1)

***

### ScreenerEPSGrowthPast5YFilter

Re-exports [ScreenerEPSGrowthPast5YFilter](screener/fundamental-filters.md#screenerepsgrowthpast5yfilter-1)

***

### ScreenerEPSGrowthQoQFilter

Re-exports [ScreenerEPSGrowthQoQFilter](screener/fundamental-filters.md#screenerepsgrowthqoqfilter-1)

***

### ScreenerEPSGrowthThisYearFilter

Re-exports [ScreenerEPSGrowthThisYearFilter](screener/fundamental-filters.md#screenerepsgrowththisyearfilter-1)

***

### ScreenerEPSGrowthTTMFilter

Re-exports [ScreenerEPSGrowthTTMFilter](screener/fundamental-filters.md#screenerepsgrowthttmfilter-1)

***

### ScreenerETFAssetTypeFilter

Re-exports [ScreenerETFAssetTypeFilter](screener/etf-filters.md#screeneretfassettypefilter-1)

***

### ScreenerETFCategoryFilter

Re-exports [ScreenerETFCategoryFilter](screener/etf-filters.md#screeneretfcategoryfilter-1)

***

### ScreenerETFFundFlowsFilter

Re-exports [ScreenerETFFundFlowsFilter](screener/etf-filters.md#screeneretffundflowsfilter-1)

***

### ScreenerETFNetExpenseFilter

Re-exports [ScreenerETFNetExpenseFilter](screener/etf-filters.md#screeneretfnetexpensefilter-1)

***

### ScreenerETFReturnFilter

Re-exports [ScreenerETFReturnFilter](screener/etf-filters.md#screeneretfreturnfilter-1)

***

### ScreenerETFSponsorFilter

Re-exports [ScreenerETFSponsorFilter](screener/etf-filters.md#screeneretfsponsorfilter-1)

***

### ScreenerETFTagFilter

Re-exports [ScreenerETFTagFilter](screener/etf-filters.md#screeneretftagfilter-1)

***

### ScreenerEVEBITDAFilter

Re-exports [ScreenerEVEBITDAFilter](screener/fundamental-filters.md#screenerevebitdafilter-1)

***

### ScreenerEVSalesFilter

Re-exports [ScreenerEVSalesFilter](screener/fundamental-filters.md#screenerevsalesfilter-1)

***

### ScreenerExchangeFilter

Re-exports [ScreenerExchangeFilter](screener/descriptive-filters.md#screenerexchangefilter-1)

***

### ScreenerFloatFilter

Re-exports [ScreenerFloatFilter](screener/descriptive-filters.md#screenerfloatfilter-1)

***

### ScreenerForwardPEFilter

Re-exports [ScreenerForwardPEFilter](screener/fundamental-filters.md#screenerforwardpefilter-1)

***

### ScreenerGapFilter

Re-exports [ScreenerGapFilter](screener/technical-filters.md#screenergapfilter-1)

***

### ScreenerGrossMarginFilter

Re-exports [ScreenerGrossMarginFilter](screener/fundamental-filters.md#screenergrossmarginfilter-1)

***

### ScreenerHighLow20DFilter

Re-exports [ScreenerHighLow20DFilter](screener/technical-filters.md#screenerhighlow20dfilter-1)

***

### ScreenerHighLow50DFilter

Re-exports [ScreenerHighLow50DFilter](screener/technical-filters.md#screenerhighlow50dfilter-1)

***

### ScreenerHighLow52WFilter

Re-exports [ScreenerHighLow52WFilter](screener/technical-filters.md#screenerhighlow52wfilter-1)

***

### ScreenerIndexFilter

Re-exports [ScreenerIndexFilter](screener/descriptive-filters.md#screenerindexfilter-1)

***

### ScreenerIndustryFilter

Re-exports [ScreenerIndustryFilter](screener/descriptive-filters.md#screenerindustryfilter-1)

***

### ScreenerIPODateFilter

Re-exports [ScreenerIPODateFilter](screener/descriptive-filters.md#screeneripodatefilter-1)

***

### ScreenerLTDebtEquityFilter

Re-exports [ScreenerLTDebtEquityFilter](screener/fundamental-filters.md#screenerltdebtequityfilter-1)

***

### ScreenerMarketCapFilter

Re-exports [ScreenerMarketCapFilter](screener/descriptive-filters.md#screenermarketcapfilter-1)

***

### ScreenerNetProfitMarginFilter

Re-exports [ScreenerNetProfitMarginFilter](screener/fundamental-filters.md#screenernetprofitmarginfilter-1)

***

### ScreenerNewsDateFilter

Re-exports [ScreenerNewsDateFilter](screener/news-filters.md#screenernewsdatefilter-1)

***

### ScreenerOperatingMarginFilter

Re-exports [ScreenerOperatingMarginFilter](screener/fundamental-filters.md#screeneroperatingmarginfilter-1)

***

### ScreenerOptionShortFilter

Re-exports [ScreenerOptionShortFilter](screener/descriptive-filters.md#screeneroptionshortfilter-1)

***

### ScreenerOrder

Re-exports [ScreenerOrder](screener/order.md#screenerorder-1)

***

### ScreenerPatternFilter

Re-exports [ScreenerPatternFilter](screener/technical-filters.md#screenerpatternfilter-1)

***

### ScreenerPayoutRatioFilter

Re-exports [ScreenerPayoutRatioFilter](screener/fundamental-filters.md#screenerpayoutratiofilter-1)

***

### ScreenerPBFilter

Re-exports [ScreenerPBFilter](screener/fundamental-filters.md#screenerpbfilter-1)

***

### ScreenerPEFilter

Re-exports [ScreenerPEFilter](screener/fundamental-filters.md#screenerpefilter-1)

***

### ScreenerPEGFilter

Re-exports [ScreenerPEGFilter](screener/fundamental-filters.md#screenerpegfilter-1)

***

### ScreenerPerformance2Filter

Re-exports [ScreenerPerformance2Filter](screener/technical-filters.md#screenerperformance2filter-1)

***

### ScreenerPerformanceFilter

Re-exports [ScreenerPerformanceFilter](screener/technical-filters.md#screenerperformancefilter-1)

***

### ScreenerPriceCashFilter

Re-exports [ScreenerPriceCashFilter](screener/fundamental-filters.md#screenerpricecashfilter-1)

***

### ScreenerPriceFCFFilter

Re-exports [ScreenerPriceFCFFilter](screener/fundamental-filters.md#screenerpricefcffilter-1)

***

### ScreenerPriceFilter

Re-exports [ScreenerPriceFilter](screener/descriptive-filters.md#screenerpricefilter-1)

***

### ScreenerPSFilter

Re-exports [ScreenerPSFilter](screener/fundamental-filters.md#screenerpsfilter-1)

***

### ScreenerQuickRatioFilter

Re-exports [ScreenerQuickRatioFilter](screener/fundamental-filters.md#screenerquickratiofilter-1)

***

### ScreenerRelativeVolumeFilter

Re-exports [ScreenerRelativeVolumeFilter](screener/descriptive-filters.md#screenerrelativevolumefilter-1)

***

### ScreenerROAFilter

Re-exports [ScreenerROAFilter](screener/fundamental-filters.md#screenerroafilter-1)

***

### ScreenerROEFilter

Re-exports [ScreenerROEFilter](screener/fundamental-filters.md#screenerroefilter-1)

***

### ScreenerROIFilter

Re-exports [ScreenerROIFilter](screener/fundamental-filters.md#screenerroifilter-1)

***

### ScreenerRSIFilter

Re-exports [ScreenerRSIFilter](screener/technical-filters.md#screenerrsifilter-1)

***

### ScreenerSalesGrowthPast3YFilter

Re-exports [ScreenerSalesGrowthPast3YFilter](screener/fundamental-filters.md#screenersalesgrowthpast3yfilter-1)

***

### ScreenerSalesGrowthPast5YFilter

Re-exports [ScreenerSalesGrowthPast5YFilter](screener/fundamental-filters.md#screenersalesgrowthpast5yfilter-1)

***

### ScreenerSalesGrowthQoQFilter

Re-exports [ScreenerSalesGrowthQoQFilter](screener/fundamental-filters.md#screenersalesgrowthqoqfilter-1)

***

### ScreenerSalesGrowthTTMFilter

Re-exports [ScreenerSalesGrowthTTMFilter](screener/fundamental-filters.md#screenersalesgrowthttmfilter-1)

***

### ScreenerSectorFilter

Re-exports [ScreenerSectorFilter](screener/descriptive-filters.md#screenersectorfilter-1)

***

### ScreenerSharesOutstandingFilter

Re-exports [ScreenerSharesOutstandingFilter](screener/descriptive-filters.md#screenersharesoutstandingfilter-1)

***

### ScreenerShortFloatFilter

Re-exports [ScreenerShortFloatFilter](screener/descriptive-filters.md#screenershortfloatfilter-1)

***

### ScreenerSignal

Re-exports [ScreenerSignal](screener/signal.md#screenersignal-1)

***

### ScreenerSMA200Filter

Re-exports [ScreenerSMA200Filter](screener/technical-filters.md#screenersma200filter-1)

***

### ScreenerSMA20Filter

Re-exports [ScreenerSMA20Filter](screener/technical-filters.md#screenersma20filter-1)

***

### ScreenerSMA50Filter

Re-exports [ScreenerSMA50Filter](screener/technical-filters.md#screenersma50filter-1)

***

### ScreenerSubThemeFilter

Re-exports [ScreenerSubThemeFilter](screener/descriptive-filters.md#screenersubthemefilter-1)

***

### ScreenerTargetPriceFilter

Re-exports [ScreenerTargetPriceFilter](screener/descriptive-filters.md#screenertargetpricefilter-1)

***

### ScreenerTradesFilter

Re-exports [ScreenerTradesFilter](screener/descriptive-filters.md#screenertradesfilter-1)

***

### ScreenerVolatilityFilter

Re-exports [ScreenerVolatilityFilter](screener/technical-filters.md#screenervolatilityfilter-1)
