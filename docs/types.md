[**finvizts**](README.md)

***

[finvizts](README.md) / types

# types

## Type Aliases

### ErrorLevel

> **ErrorLevel** = *typeof* [`ErrorLevel`](#errorlevel-1)\[keyof *typeof* [`ErrorLevel`](#errorlevel-1)\]

Defined in: [types/index.ts:59](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/index.ts#L59)

Union of all known error level values.

***

### SortDirection

> **SortDirection** = *typeof* [`SortDirection`](#sortdirection-1)\[keyof *typeof* [`SortDirection`](#sortdirection-1)\]

Defined in: [types/index.ts:50](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/index.ts#L50)

Union of all known sort direction values.

## Variables

### ErrorLevel

> `const` **ErrorLevel**: `object`

Defined in: [types/index.ts:59](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/index.ts#L59)

Severity level attached to a thrown FinvizError.

#### Type Declaration

##### ERROR

> `readonly` **ERROR**: `2` = `2`

##### FATAL

> `readonly` **FATAL**: `1` = `1`

##### WARN

> `readonly` **WARN**: `3` = `3`

***

### SortDirection

> `const` **SortDirection**: `object`

Defined in: [types/index.ts:50](https://github.com/7elephants/finvizTS/blob/80a71835161ee929f23b53123ed4d2d457750e80/src/types/index.ts#L50)

Sort direction values shared by the `o` query parameter across endpoints.

#### Type Declaration

##### ASC

> `readonly` **ASC**: `""` = `''`

##### DESC

> `readonly` **DESC**: `"-"` = `'-'`

## References

### Calendar

Re-exports [Calendar](types/calendar.md#calendar)

***

### CalendarOptions

Re-exports [CalendarOptions](types/calendar.md#calendaroptions)

***

### CryptoCurrency

Re-exports [CryptoCurrency](types/crypto.md#cryptocurrency-1)

***

### CryptoItem

Re-exports [CryptoItem](types/crypto.md#cryptoitem)

***

### CryptoOptions

Re-exports [CryptoOptions](types/crypto.md#cryptooptions)

***

### DividendsCalendarItem

Re-exports [DividendsCalendarItem](types/calendar.md#dividendscalendaritem)

***

### DividendsCalendarOptions

Re-exports [DividendsCalendarOptions](types/calendar.md#dividendscalendaroptions)

***

### EarningsCalendarItem

Re-exports [EarningsCalendarItem](types/calendar.md#earningscalendaritem)

***

### EarningsCalendarOptions

Re-exports [EarningsCalendarOptions](types/calendar.md#earningscalendaroptions)

***

### EarningsOrderType

Re-exports [EarningsOrderType](types/calendar.md#earningsordertype-1)

***

### Filing

Re-exports [Filing](types/filings.md#filing)

***

### FilingFilter

Re-exports [FilingFilter](types/filings.md#filingfilter-1)

***

### FilingOptions

Re-exports [FilingOptions](types/filings.md#filingoptions)

***

### FilingOrder

Re-exports [FilingOrder](types/filings.md#filingorder-1)

***

### FinvizClientOptions

Re-exports [FinvizClientOptions](types/client.md#finvizclientoptions)

***

### FinvizResponse

Re-exports [FinvizResponse](types/response.md#finvizresponse)

***

### ForexItem

Re-exports [ForexItem](types/forex.md#forexitem)

***

### ForexOptions

Re-exports [ForexOptions](types/forex.md#forexoptions)

***

### ForexPercentOptions

Re-exports [ForexPercentOptions](types/forex.md#forexpercentoptions)

***

### ForexPipsOptions

Re-exports [ForexPipsOptions](types/forex.md#forexpipsoptions)

***

### ForexPipsOrderType

Re-exports [ForexPipsOrderType](types/forex.md#forexpipsordertype-1)

***

### ForexSharedOrderType

Re-exports [ForexSharedOrderType](types/forex.md#forexsharedordertype)

***

### ForexUnit

Re-exports [ForexUnit](types/forex.md#forexunit-1)

***

### FormatOption

Re-exports [FormatOption](types/response.md#formatoption)

***

### FundItem

Re-exports [FundItem](types/fund.md#funditem)

***

### FundOptions

Re-exports [FundOptions](types/fund.md#fundoptions)

***

### FuturesItem

Re-exports [FuturesItem](types/futures.md#futuresitem)

***

### FuturesOptions

Re-exports [FuturesOptions](types/futures.md#futuresoptions)

***

### Group

Re-exports [Group](types/groups.md#group)

***

### GroupName

Re-exports [GroupName](types/groups.md#groupname-1)

***

### GroupOptions

Re-exports [GroupOptions](types/groups.md#groupoptions)

***

### GroupView

Re-exports [GroupView](types/groups.md#groupview-1)

***

### IndustrySubgroup

Re-exports [IndustrySubgroup](types/groups.md#industrysubgroup-1)

***

### InsiderItem

Re-exports [InsiderItem](types/insider.md#insideritem)

***

### InsiderOptions

Re-exports [InsiderOptions](types/insider.md#insideroptions)

***

### InsiderOrderType

Re-exports [InsiderOrderType](types/insider.md#insiderordertype-1)

***

### InsiderOwnerRelationshipType

Re-exports [InsiderOwnerRelationshipType](types/insider.md#insiderownerrelationshiptype-1)

***

### InsiderTransactionType

Re-exports [InsiderTransactionType](types/insider.md#insidertransactiontype-1)

***

### ManagerFundItem

Re-exports [ManagerFundItem](types/fund-manager.md#managerfunditem)

***

### ManagerFundOptions

Re-exports [ManagerFundOptions](types/fund-manager.md#managerfundoptions)

***

### ManagerFundOrderType

Re-exports [ManagerFundOrderType](types/fund-manager.md#managerfundordertype-1)

***

### ManagerItem

Re-exports [ManagerItem](types/manager.md#manageritem)

***

### ManagerOptions

Re-exports [ManagerOptions](types/manager.md#manageroptions)

***

### NewsItem

Re-exports [NewsItem](types/news.md#newsitem)

***

### NewsOptions

Re-exports [NewsOptions](types/news.md#newsoptions)

***

### NewsType

Re-exports [NewsType](types/news.md#newstype-1)

***

### Option

Re-exports [Option](types/options.md#option)

***

### OptionsChainOptions

Re-exports [OptionsChainOptions](types/options.md#optionschainoptions)

***

### OptionsViewType

Re-exports [OptionsViewType](types/options.md#optionsviewtype-1)

***

### ParsedAndRawResponse

Re-exports [ParsedAndRawResponse](types/response.md#parsedandrawresponse)

***

### ParsedResponse

Re-exports [ParsedResponse](types/response.md#parsedresponse)

***

### ParseError

Re-exports [ParseError](types/response.md#parseerror)

***

### ParseErrorExpected

Re-exports [ParseErrorExpected](types/response.md#parseerrorexpected-2)

***

### PerformanceItem

Re-exports [PerformanceItem](types/performance.md#performanceitem)

***

### PerformanceOptions

Re-exports [PerformanceOptions](types/performance.md#performanceoptions)

***

### PerformanceOrderType

Re-exports [PerformanceOrderType](types/performance.md#performanceordertype-1)

***

### Portfolio

Re-exports [Portfolio](types/portfolio.md#portfolio)

***

### PortfolioField

Re-exports [PortfolioField](types/portfolio.md#portfoliofield-1)

***

### PortfolioOptions

Re-exports [PortfolioOptions](types/portfolio.md#portfoliooptions)

***

### PortfolioOrder

Re-exports [PortfolioOrder](types/portfolio.md#portfolioorder-1)

***

### Quote

Re-exports [Quote](types/quote.md#quote)

***

### QuoteOptions

Re-exports [QuoteOptions](types/quote.md#quoteoptions)

***

### QuotePeriod

Re-exports [QuotePeriod](types/quote.md#quoteperiod-1)

***

### QuoteRange

Re-exports [QuoteRange](types/quote.md#quoterange-1)

***

### RawRecord

Re-exports [RawRecord](types/response.md#rawrecord)

***

### RawResponse

Re-exports [RawResponse](types/response.md#rawresponse)

***

### ResponseFormat

Re-exports [ResponseFormat](types/response.md#responseformat-1)

***

### Screener

Re-exports [Screener](types/screener.md#screener)

***

### ScreenerAfterHoursChangeFilter

Re-exports [ScreenerAfterHoursChangeFilter](types/screener/technical-filters.md#screenerafterhourschangefilter-1)

***

### ScreenerAfterHoursCloseFilter

Re-exports [ScreenerAfterHoursCloseFilter](types/screener/technical-filters.md#screenerafterhoursclosefilter-1)

***

### ScreenerAllTimeHighLowFilter

Re-exports [ScreenerAllTimeHighLowFilter](types/screener/technical-filters.md#screeneralltimehighlowfilter-1)

***

### ScreenerAnalystRecommendationFilter

Re-exports [ScreenerAnalystRecommendationFilter](types/screener/descriptive-filters.md#screeneranalystrecommendationfilter-1)

***

### ScreenerAverageTrueRangeFilter

Re-exports [ScreenerAverageTrueRangeFilter](types/screener/technical-filters.md#screeneraveragetruerangefilter-1)

***

### ScreenerAverageVolumeFilter

Re-exports [ScreenerAverageVolumeFilter](types/screener/descriptive-filters.md#screeneraveragevolumefilter-1)

***

### ScreenerBetaFilter

Re-exports [ScreenerBetaFilter](types/screener/technical-filters.md#screenerbetafilter-1)

***

### ScreenerCandlestickFilter

Re-exports [ScreenerCandlestickFilter](types/screener/technical-filters.md#screenercandlestickfilter-1)

***

### ScreenerChangeFilter

Re-exports [ScreenerChangeFilter](types/screener/technical-filters.md#screenerchangefilter-1)

***

### ScreenerChangeFromOpenFilter

Re-exports [ScreenerChangeFromOpenFilter](types/screener/technical-filters.md#screenerchangefromopenfilter-1)

***

### ScreenerCountryFilter

Re-exports [ScreenerCountryFilter](types/screener/descriptive-filters.md#screenercountryfilter-1)

***

### ScreenerCurrentRatioFilter

Re-exports [ScreenerCurrentRatioFilter](types/screener/fundamental-filters.md#screenercurrentratiofilter-1)

***

### ScreenerCurrentVolumeFilter

Re-exports [ScreenerCurrentVolumeFilter](types/screener/descriptive-filters.md#screenercurrentvolumefilter-1)

***

### ScreenerDebtEquityFilter

Re-exports [ScreenerDebtEquityFilter](types/screener/fundamental-filters.md#screenerdebtequityfilter-1)

***

### ScreenerDividendGrowthFilter

Re-exports [ScreenerDividendGrowthFilter](types/screener/fundamental-filters.md#screenerdividendgrowthfilter-1)

***

### ScreenerDividendYieldFilter

Re-exports [ScreenerDividendYieldFilter](types/screener/descriptive-filters.md#screenerdividendyieldfilter-1)

***

### ScreenerEarningsDateFilter

Re-exports [ScreenerEarningsDateFilter](types/screener/descriptive-filters.md#screenerearningsdatefilter-1)

***

### ScreenerEarningsRevenueSurpriseFilter

Re-exports [ScreenerEarningsRevenueSurpriseFilter](types/screener/fundamental-filters.md#screenerearningsrevenuesurprisefilter-1)

***

### ScreenerEPSGrowthNext5YFilter

Re-exports [ScreenerEPSGrowthNext5YFilter](types/screener/fundamental-filters.md#screenerepsgrowthnext5yfilter-1)

***

### ScreenerEPSGrowthNextYearFilter

Re-exports [ScreenerEPSGrowthNextYearFilter](types/screener/fundamental-filters.md#screenerepsgrowthnextyearfilter-1)

***

### ScreenerEPSGrowthPast3YFilter

Re-exports [ScreenerEPSGrowthPast3YFilter](types/screener/fundamental-filters.md#screenerepsgrowthpast3yfilter-1)

***

### ScreenerEPSGrowthPast5YFilter

Re-exports [ScreenerEPSGrowthPast5YFilter](types/screener/fundamental-filters.md#screenerepsgrowthpast5yfilter-1)

***

### ScreenerEPSGrowthQoQFilter

Re-exports [ScreenerEPSGrowthQoQFilter](types/screener/fundamental-filters.md#screenerepsgrowthqoqfilter-1)

***

### ScreenerEPSGrowthThisYearFilter

Re-exports [ScreenerEPSGrowthThisYearFilter](types/screener/fundamental-filters.md#screenerepsgrowththisyearfilter-1)

***

### ScreenerEPSGrowthTTMFilter

Re-exports [ScreenerEPSGrowthTTMFilter](types/screener/fundamental-filters.md#screenerepsgrowthttmfilter-1)

***

### ScreenerETFAssetTypeFilter

Re-exports [ScreenerETFAssetTypeFilter](types/screener/etf-filters.md#screeneretfassettypefilter-1)

***

### ScreenerETFCategoryFilter

Re-exports [ScreenerETFCategoryFilter](types/screener/etf-filters.md#screeneretfcategoryfilter-1)

***

### ScreenerETFFundFlowsFilter

Re-exports [ScreenerETFFundFlowsFilter](types/screener/etf-filters.md#screeneretffundflowsfilter-1)

***

### ScreenerETFNetExpenseFilter

Re-exports [ScreenerETFNetExpenseFilter](types/screener/etf-filters.md#screeneretfnetexpensefilter-1)

***

### ScreenerETFReturnFilter

Re-exports [ScreenerETFReturnFilter](types/screener/etf-filters.md#screeneretfreturnfilter-1)

***

### ScreenerETFSponsorFilter

Re-exports [ScreenerETFSponsorFilter](types/screener/etf-filters.md#screeneretfsponsorfilter-1)

***

### ScreenerETFTagFilter

Re-exports [ScreenerETFTagFilter](types/screener/etf-filters.md#screeneretftagfilter-1)

***

### ScreenerEVEBITDAFilter

Re-exports [ScreenerEVEBITDAFilter](types/screener/fundamental-filters.md#screenerevebitdafilter-1)

***

### ScreenerEVSalesFilter

Re-exports [ScreenerEVSalesFilter](types/screener/fundamental-filters.md#screenerevsalesfilter-1)

***

### ScreenerExchangeFilter

Re-exports [ScreenerExchangeFilter](types/screener/descriptive-filters.md#screenerexchangefilter-1)

***

### ScreenerField

Re-exports [ScreenerField](types/screener.md#screenerfield-1)

***

### ScreenerFloatFilter

Re-exports [ScreenerFloatFilter](types/screener/descriptive-filters.md#screenerfloatfilter-1)

***

### ScreenerForwardPEFilter

Re-exports [ScreenerForwardPEFilter](types/screener/fundamental-filters.md#screenerforwardpefilter-1)

***

### ScreenerGapFilter

Re-exports [ScreenerGapFilter](types/screener/technical-filters.md#screenergapfilter-1)

***

### ScreenerGrossMarginFilter

Re-exports [ScreenerGrossMarginFilter](types/screener/fundamental-filters.md#screenergrossmarginfilter-1)

***

### ScreenerHighLow20DFilter

Re-exports [ScreenerHighLow20DFilter](types/screener/technical-filters.md#screenerhighlow20dfilter-1)

***

### ScreenerHighLow50DFilter

Re-exports [ScreenerHighLow50DFilter](types/screener/technical-filters.md#screenerhighlow50dfilter-1)

***

### ScreenerHighLow52WFilter

Re-exports [ScreenerHighLow52WFilter](types/screener/technical-filters.md#screenerhighlow52wfilter-1)

***

### ScreenerIndexFilter

Re-exports [ScreenerIndexFilter](types/screener/descriptive-filters.md#screenerindexfilter-1)

***

### ScreenerIndustryFilter

Re-exports [ScreenerIndustryFilter](types/screener/descriptive-filters.md#screenerindustryfilter-1)

***

### ScreenerIPODateFilter

Re-exports [ScreenerIPODateFilter](types/screener/descriptive-filters.md#screeneripodatefilter-1)

***

### ScreenerLTDebtEquityFilter

Re-exports [ScreenerLTDebtEquityFilter](types/screener/fundamental-filters.md#screenerltdebtequityfilter-1)

***

### ScreenerMarketCapFilter

Re-exports [ScreenerMarketCapFilter](types/screener/descriptive-filters.md#screenermarketcapfilter-1)

***

### ScreenerNetProfitMarginFilter

Re-exports [ScreenerNetProfitMarginFilter](types/screener/fundamental-filters.md#screenernetprofitmarginfilter-1)

***

### ScreenerNewsDateFilter

Re-exports [ScreenerNewsDateFilter](types/screener/news-filters.md#screenernewsdatefilter-1)

***

### ScreenerOperatingMarginFilter

Re-exports [ScreenerOperatingMarginFilter](types/screener/fundamental-filters.md#screeneroperatingmarginfilter-1)

***

### ScreenerOptions

Re-exports [ScreenerOptions](types/screener.md#screeneroptions)

***

### ScreenerOptionShortFilter

Re-exports [ScreenerOptionShortFilter](types/screener/descriptive-filters.md#screeneroptionshortfilter-1)

***

### ScreenerOrder

Re-exports [ScreenerOrder](types/screener/order.md#screenerorder-1)

***

### ScreenerPatternFilter

Re-exports [ScreenerPatternFilter](types/screener/technical-filters.md#screenerpatternfilter-1)

***

### ScreenerPayoutRatioFilter

Re-exports [ScreenerPayoutRatioFilter](types/screener/fundamental-filters.md#screenerpayoutratiofilter-1)

***

### ScreenerPBFilter

Re-exports [ScreenerPBFilter](types/screener/fundamental-filters.md#screenerpbfilter-1)

***

### ScreenerPEFilter

Re-exports [ScreenerPEFilter](types/screener/fundamental-filters.md#screenerpefilter-1)

***

### ScreenerPEGFilter

Re-exports [ScreenerPEGFilter](types/screener/fundamental-filters.md#screenerpegfilter-1)

***

### ScreenerPerformance2Filter

Re-exports [ScreenerPerformance2Filter](types/screener/technical-filters.md#screenerperformance2filter-1)

***

### ScreenerPerformanceFilter

Re-exports [ScreenerPerformanceFilter](types/screener/technical-filters.md#screenerperformancefilter-1)

***

### ScreenerPriceCashFilter

Re-exports [ScreenerPriceCashFilter](types/screener/fundamental-filters.md#screenerpricecashfilter-1)

***

### ScreenerPriceFCFFilter

Re-exports [ScreenerPriceFCFFilter](types/screener/fundamental-filters.md#screenerpricefcffilter-1)

***

### ScreenerPriceFilter

Re-exports [ScreenerPriceFilter](types/screener/descriptive-filters.md#screenerpricefilter-1)

***

### ScreenerPSFilter

Re-exports [ScreenerPSFilter](types/screener/fundamental-filters.md#screenerpsfilter-1)

***

### ScreenerQuickRatioFilter

Re-exports [ScreenerQuickRatioFilter](types/screener/fundamental-filters.md#screenerquickratiofilter-1)

***

### ScreenerRelativeVolumeFilter

Re-exports [ScreenerRelativeVolumeFilter](types/screener/descriptive-filters.md#screenerrelativevolumefilter-1)

***

### ScreenerROAFilter

Re-exports [ScreenerROAFilter](types/screener/fundamental-filters.md#screenerroafilter-1)

***

### ScreenerROEFilter

Re-exports [ScreenerROEFilter](types/screener/fundamental-filters.md#screenerroefilter-1)

***

### ScreenerROIFilter

Re-exports [ScreenerROIFilter](types/screener/fundamental-filters.md#screenerroifilter-1)

***

### ScreenerRSIFilter

Re-exports [ScreenerRSIFilter](types/screener/technical-filters.md#screenerrsifilter-1)

***

### ScreenerSalesGrowthPast3YFilter

Re-exports [ScreenerSalesGrowthPast3YFilter](types/screener/fundamental-filters.md#screenersalesgrowthpast3yfilter-1)

***

### ScreenerSalesGrowthPast5YFilter

Re-exports [ScreenerSalesGrowthPast5YFilter](types/screener/fundamental-filters.md#screenersalesgrowthpast5yfilter-1)

***

### ScreenerSalesGrowthQoQFilter

Re-exports [ScreenerSalesGrowthQoQFilter](types/screener/fundamental-filters.md#screenersalesgrowthqoqfilter-1)

***

### ScreenerSalesGrowthTTMFilter

Re-exports [ScreenerSalesGrowthTTMFilter](types/screener/fundamental-filters.md#screenersalesgrowthttmfilter-1)

***

### ScreenerSectorFilter

Re-exports [ScreenerSectorFilter](types/screener/descriptive-filters.md#screenersectorfilter-1)

***

### ScreenerSharesOutstandingFilter

Re-exports [ScreenerSharesOutstandingFilter](types/screener/descriptive-filters.md#screenersharesoutstandingfilter-1)

***

### ScreenerShortFloatFilter

Re-exports [ScreenerShortFloatFilter](types/screener/descriptive-filters.md#screenershortfloatfilter-1)

***

### ScreenerSignal

Re-exports [ScreenerSignal](types/screener/signal.md#screenersignal-1)

***

### ScreenerSMA200Filter

Re-exports [ScreenerSMA200Filter](types/screener/technical-filters.md#screenersma200filter-1)

***

### ScreenerSMA20Filter

Re-exports [ScreenerSMA20Filter](types/screener/technical-filters.md#screenersma20filter-1)

***

### ScreenerSMA50Filter

Re-exports [ScreenerSMA50Filter](types/screener/technical-filters.md#screenersma50filter-1)

***

### ScreenerSubThemeFilter

Re-exports [ScreenerSubThemeFilter](types/screener/descriptive-filters.md#screenersubthemefilter-1)

***

### ScreenerTargetPriceFilter

Re-exports [ScreenerTargetPriceFilter](types/screener/descriptive-filters.md#screenertargetpricefilter-1)

***

### ScreenerTradesFilter

Re-exports [ScreenerTradesFilter](types/screener/descriptive-filters.md#screenertradesfilter-1)

***

### ScreenerView

Re-exports [ScreenerView](types/screener.md#screenerview-1)

***

### ScreenerVolatilityFilter

Re-exports [ScreenerVolatilityFilter](types/screener/technical-filters.md#screenervolatilityfilter-1)
