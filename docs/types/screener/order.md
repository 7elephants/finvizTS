[**finvizts**](../../README.md)

***

[finvizts](../../README.md) / types/screener/order

# types/screener/order

## Type Aliases

### ScreenerOrder

> **ScreenerOrder** = *typeof* [`ScreenerOrder`](#screenerorder-1)\[keyof *typeof* [`ScreenerOrder`](#screenerorder-1)\]

Defined in: [types/screener/order.ts:13](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/screener/order.ts#L13)

Union of all known screener sort column values.

## Variables

### ScreenerOrder

> `const` **ScreenerOrder**: `object`

Defined in: [types/screener/order.ts:13](https://github.com/7elephants/finvizTS/blob/f744eabcb42982a597319cae2efa34ee2e597d43/src/types/screener/order.ts#L13)

Valid sort column values for the screener `o` query parameter.

#### Type Declaration

##### ALL\_TIME\_HIGH\_RELATIVE

> `readonly` **ALL\_TIME\_HIGH\_RELATIVE**: `"highat"` = `'highat'`

##### ALL\_TIME\_LOW\_RELATIVE

> `readonly` **ALL\_TIME\_LOW\_RELATIVE**: `"lowat"` = `'lowat'`

##### ANALYST\_RECOMMENDATION

> `readonly` **ANALYST\_RECOMMENDATION**: `"recom"` = `'recom'`

##### AVERAGE\_TRUE\_RANGE

> `readonly` **AVERAGE\_TRUE\_RANGE**: `"averagetruerange"` = `'averagetruerange'`

##### AVERAGE\_VOLUME

> `readonly` **AVERAGE\_VOLUME**: `"averagevolume"` = `'averagevolume'`

##### BETA

> `readonly` **BETA**: `"beta"` = `'beta'`

##### BOOK

> `readonly` **BOOK**: `"book"` = `'book'`

##### CASH\_PER\_SHARE

> `readonly` **CASH\_PER\_SHARE**: `"cashpershare"` = `'cashpershare'`

##### CHANGE

> `readonly` **CHANGE**: `"change"` = `'change'`

##### CHANGE\_FROM\_OPEN

> `readonly` **CHANGE\_FROM\_OPEN**: `"changeopen"` = `'changeopen'`

##### COMPANY

> `readonly` **COMPANY**: `"company"` = `'company'`

##### COUNTRY

> `readonly` **COUNTRY**: `"country"` = `'country'`

##### CURRENT\_RATIO

> `readonly` **CURRENT\_RATIO**: `"curratio"` = `'curratio'`

##### DAILY\_DIGEST

> `readonly` **DAILY\_DIGEST**: `"wiimdailydigest"` = `'wiimdailydigest'`

##### DIVIDEND

> `readonly` **DIVIDEND**: `"dividend"` = `'dividend'`

##### DIVIDEND\_EX\_DATE

> `readonly` **DIVIDEND\_EX\_DATE**: `"dividendexdate"` = `'dividendexdate'`

##### DIVIDEND\_GROWTH\_FIVE\_YEARS

> `readonly` **DIVIDEND\_GROWTH\_FIVE\_YEARS**: `"dividend5y"` = `'dividend5y'`

##### DIVIDEND\_GROWTH\_ONE\_YEAR

> `readonly` **DIVIDEND\_GROWTH\_ONE\_YEAR**: `"dividend1y"` = `'dividend1y'`

##### DIVIDEND\_GROWTH\_THREE\_YEARS

> `readonly` **DIVIDEND\_GROWTH\_THREE\_YEARS**: `"dividend3y"` = `'dividend3y'`

##### DIVIDEND\_TTM

> `readonly` **DIVIDEND\_TTM**: `"dividendttm"` = `'dividendttm'`

##### DIVIDEND\_YIELD

> `readonly` **DIVIDEND\_YIELD**: `"dividendyield"` = `'dividendyield'`

##### EARNINGS\_DATE

> `readonly` **EARNINGS\_DATE**: `"earningsdate"` = `'earningsdate'`

##### EMPLOYEES

> `readonly` **EMPLOYEES**: `"employees"` = `'employees'`

##### ENTERPRISE\_VALUE

> `readonly` **ENTERPRISE\_VALUE**: `"enterpriseValue"` = `'enterpriseValue'`

##### EPS\_ESTIMATE\_NEXT\_QUARTER

> `readonly` **EPS\_ESTIMATE\_NEXT\_QUARTER**: `"estq1"` = `'estq1'`

##### EPS\_GROWTH\_NEXT\_FIVE\_YEARS

> `readonly` **EPS\_GROWTH\_NEXT\_FIVE\_YEARS**: `"estltgrowth"` = `'estltgrowth'`

##### EPS\_GROWTH\_NEXT\_YEAR

> `readonly` **EPS\_GROWTH\_NEXT\_YEAR**: `"epsyoy1"` = `'epsyoy1'`

##### EPS\_GROWTH\_PAST\_FIVE\_YEARS

> `readonly` **EPS\_GROWTH\_PAST\_FIVE\_YEARS**: `"eps5years"` = `'eps5years'`

##### EPS\_GROWTH\_PAST\_THREE\_YEARS

> `readonly` **EPS\_GROWTH\_PAST\_THREE\_YEARS**: `"eps3years"` = `'eps3years'`

##### EPS\_GROWTH\_QTR\_OVER\_QTR

> `readonly` **EPS\_GROWTH\_QTR\_OVER\_QTR**: `"epsqoq"` = `'epsqoq'`

##### EPS\_GROWTH\_THIS\_YEAR

> `readonly` **EPS\_GROWTH\_THIS\_YEAR**: `"epsyoy"` = `'epsyoy'`

##### EPS\_SURPRISE

> `readonly` **EPS\_SURPRISE**: `"epssurprise"` = `'epssurprise'`

##### EPS\_TTM

> `readonly` **EPS\_TTM**: `"eps"` = `'eps'`

##### EPS\_YEAR\_OVER\_YEAR\_TTM

> `readonly` **EPS\_YEAR\_OVER\_YEAR\_TTM**: `"epsyoyttm"` = `'epsyoyttm'`

##### ETF\_ACTIVE\_PASSIVE

> `readonly` **ETF\_ACTIVE\_PASSIVE**: `"e.activepassive"` = `'e.activepassive'`

##### ETF\_ANNUALIZED\_RETURN\_FIVE\_YEARS

> `readonly` **ETF\_ANNUALIZED\_RETURN\_FIVE\_YEARS**: `"e.return5year"` = `'e.return5year'`

##### ETF\_ANNUALIZED\_RETURN\_ONE\_YEAR

> `readonly` **ETF\_ANNUALIZED\_RETURN\_ONE\_YEAR**: `"e.return1year"` = `'e.return1year'`

##### ETF\_ANNUALIZED\_RETURN\_THREE\_YEARS

> `readonly` **ETF\_ANNUALIZED\_RETURN\_THREE\_YEARS**: `"e.return3year"` = `'e.return3year'`

##### ETF\_ASSET\_TYPE

> `readonly` **ETF\_ASSET\_TYPE**: `"e.assettype"` = `'e.assettype'`

##### ETF\_ASSETS\_UNDER\_MANAGEMENT

> `readonly` **ETF\_ASSETS\_UNDER\_MANAGEMENT**: `"e.assetsundermanagement"` = `'e.assetsundermanagement'`

##### ETF\_NET\_EXPENSE\_RATIO

> `readonly` **ETF\_NET\_EXPENSE\_RATIO**: `"e.netexpenseratio"` = `'e.netexpenseratio'`

##### ETF\_NET\_FUND\_FLOWS\_ONE\_MONTH

> `readonly` **ETF\_NET\_FUND\_FLOWS\_ONE\_MONTH**: `"e.netflows1month"` = `'e.netflows1month'`

##### ETF\_NET\_FUND\_FLOWS\_PERCENT\_ONE\_MONTH

> `readonly` **ETF\_NET\_FUND\_FLOWS\_PERCENT\_ONE\_MONTH**: `"e.netflows1monthpct"` = `'e.netflows1monthpct'`

##### ETF\_NET\_FUND\_FLOWS\_PERCENT\_THREE\_MONTHS

> `readonly` **ETF\_NET\_FUND\_FLOWS\_PERCENT\_THREE\_MONTHS**: `"e.netflows3monthpct"` = `'e.netflows3monthpct'`

##### ETF\_NET\_FUND\_FLOWS\_PERCENT\_YTD

> `readonly` **ETF\_NET\_FUND\_FLOWS\_PERCENT\_YTD**: `"e.netflowsytdpct"` = `'e.netflowsytdpct'`

##### ETF\_NET\_FUND\_FLOWS\_THREE\_MONTHS

> `readonly` **ETF\_NET\_FUND\_FLOWS\_THREE\_MONTHS**: `"e.netflows3month"` = `'e.netflows3month'`

##### ETF\_NET\_FUND\_FLOWS\_YTD

> `readonly` **ETF\_NET\_FUND\_FLOWS\_YTD**: `"e.netflowsytd"` = `'e.netflowsytd'`

##### ETF\_SECTOR\_THEME

> `readonly` **ETF\_SECTOR\_THEME**: `"e.sectortheme"` = `'e.sectortheme'`

##### ETF\_SINGLE\_CATEGORY

> `readonly` **ETF\_SINGLE\_CATEGORY**: `"e.category"` = `'e.category'`

##### ETF\_TAGS

> `readonly` **ETF\_TAGS**: `"e.tags"` = `'e.tags'`

##### ETF\_TOTAL\_HOLDINGS

> `readonly` **ETF\_TOTAL\_HOLDINGS**: `"e.totalholdings"` = `'e.totalholdings'`

##### ETF\_TYPE

> `readonly` **ETF\_TYPE**: `"e.etftype"` = `'e.etftype'`

##### EV\_SALES

> `readonly` **EV\_SALES**: `"evsales"` = `'evsales'`

##### EVEBITDA

> `readonly` **EVEBITDA**: `"evebitda"` = `'evebitda'`

##### EXCHANGE

> `readonly` **EXCHANGE**: `"exchange"` = `'exchange'`

##### FIFTY\_DAY\_HIGH\_RELATIVE

> `readonly` **FIFTY\_DAY\_HIGH\_RELATIVE**: `"high50d"` = `'high50d'`

##### FIFTY\_DAY\_LOW\_RELATIVE

> `readonly` **FIFTY\_DAY\_LOW\_RELATIVE**: `"low50d"` = `'low50d'`

##### FIFTY\_DAY\_SMA\_RELATIVE

> `readonly` **FIFTY\_DAY\_SMA\_RELATIVE**: `"sma50"` = `'sma50'`

##### FIFTY\_TWO\_WEEK\_HIGH\_RELATIVE

> `readonly` **FIFTY\_TWO\_WEEK\_HIGH\_RELATIVE**: `"high52w"` = `'high52w'`

##### FIFTY\_TWO\_WEEK\_LOW\_RELATIVE

> `readonly` **FIFTY\_TWO\_WEEK\_LOW\_RELATIVE**: `"low52w"` = `'low52w'`

##### FIFTY\_TWO\_WEEK\_RANGE

> `readonly` **FIFTY\_TWO\_WEEK\_RANGE**: `"52wrange"` = `'52wrange'`

##### FLOAT\_OUTSTANDING\_PERCENT

> `readonly` **FLOAT\_OUTSTANDING\_PERCENT**: `"floatoutstandingpct"` = `'floatoutstandingpct'`

##### FORWARD\_PRICE\_EARNINGS

> `readonly` **FORWARD\_PRICE\_EARNINGS**: `"forwardpe"` = `'forwardpe'`

##### GAP

> `readonly` **GAP**: `"gap"` = `'gap'`

##### GROSS\_MARGIN

> `readonly` **GROSS\_MARGIN**: `"grossmargin"` = `'grossmargin'`

##### HIGH

> `readonly` **HIGH**: `"high"` = `'high'`

##### INCOME

> `readonly` **INCOME**: `"income"` = `'income'`

##### INDEX

> `readonly` **INDEX**: `"index"` = `'index'`

##### INDUSTRY

> `readonly` **INDUSTRY**: `"industry"` = `'industry'`

##### INSIDER\_OWNERSHIP

> `readonly` **INSIDER\_OWNERSHIP**: `"insiderown"` = `'insiderown'`

##### INSIDER\_TRANSACTIONS

> `readonly` **INSIDER\_TRANSACTIONS**: `"insidertrans"` = `'insidertrans'`

##### INSTITUTIONAL\_OWNERSHIP

> `readonly` **INSTITUTIONAL\_OWNERSHIP**: `"instown"` = `'instown'`

##### INSTITUTIONAL\_TRANSACTIONS

> `readonly` **INSTITUTIONAL\_TRANSACTIONS**: `"insttrans"` = `'insttrans'`

##### IPO\_DATE

> `readonly` **IPO\_DATE**: `"ipodate"` = `'ipodate'`

##### LATEST\_NEWS\_DATE

> `readonly` **LATEST\_NEWS\_DATE**: `"news_date"` = `'news_date'`

##### LOW

> `readonly` **LOW**: `"low"` = `'low'`

##### LT\_DEBT\_EQUITY

> `readonly` **LT\_DEBT\_EQUITY**: `"ltdebteq"` = `'ltdebteq'`

##### MARKET\_CAP

> `readonly` **MARKET\_CAP**: `"marketcap"` = `'marketcap'`

##### NET\_PROFIT\_MARGIN

> `readonly` **NET\_PROFIT\_MARGIN**: `"netmargin"` = `'netmargin'`

##### NEWS\_TIME

> `readonly` **NEWS\_TIME**: `"newstime"` = `'newstime'`

##### NEWS\_TITLE

> `readonly` **NEWS\_TITLE**: `"newstitle"` = `'newstitle'`

##### NEWS\_URL

> `readonly` **NEWS\_URL**: `"newsurl"` = `'newsurl'`

##### OPEN

> `readonly` **OPEN**: `"open"` = `'open'`

##### OPERATING\_MARGIN

> `readonly` **OPERATING\_MARGIN**: `"opermargin"` = `'opermargin'`

##### OPTIONABLE

> `readonly` **OPTIONABLE**: `"optionable"` = `'optionable'`

##### PAYOUT\_RATIO

> `readonly` **PAYOUT\_RATIO**: `"payoutratio"` = `'payoutratio'`

##### PEG\_PRICE\_EARNINGS\_GROWTH

> `readonly` **PEG\_PRICE\_EARNINGS\_GROWTH**: `"peg"` = `'peg'`

##### PERFORMANCE\_FIVE\_YEARS

> `readonly` **PERFORMANCE\_FIVE\_YEARS**: `"perf5y"` = `'perf5y'`

##### PERFORMANCE\_HALF\_YEAR

> `readonly` **PERFORMANCE\_HALF\_YEAR**: `"perf26w"` = `'perf26w'`

##### PERFORMANCE\_MONTH

> `readonly` **PERFORMANCE\_MONTH**: `"perf4w"` = `'perf4w'`

##### PERFORMANCE\_QUARTER

> `readonly` **PERFORMANCE\_QUARTER**: `"perf13w"` = `'perf13w'`

##### PERFORMANCE\_TEN\_YEARS

> `readonly` **PERFORMANCE\_TEN\_YEARS**: `"perf10y"` = `'perf10y'`

##### PERFORMANCE\_THREE\_YEARS

> `readonly` **PERFORMANCE\_THREE\_YEARS**: `"perf3y"` = `'perf3y'`

##### PERFORMANCE\_WEEK

> `readonly` **PERFORMANCE\_WEEK**: `"perf1w"` = `'perf1w'`

##### PERFORMANCE\_YEAR

> `readonly` **PERFORMANCE\_YEAR**: `"perf52w"` = `'perf52w'`

##### PERFORMANCE\_YEAR\_TO\_DATE

> `readonly` **PERFORMANCE\_YEAR\_TO\_DATE**: `"perfytd"` = `'perfytd'`

##### PREVIOUS\_CLOSE

> `readonly` **PREVIOUS\_CLOSE**: `"prevclose"` = `'prevclose'`

##### PRICE

> `readonly` **PRICE**: `"price"` = `'price'`

##### PRICE\_BOOK

> `readonly` **PRICE\_BOOK**: `"pb"` = `'pb'`

##### PRICE\_CASH

> `readonly` **PRICE\_CASH**: `"pc"` = `'pc'`

##### PRICE\_EARNINGS

> `readonly` **PRICE\_EARNINGS**: `"pe"` = `'pe'`

##### PRICE\_FREE\_CASH\_FLOW

> `readonly` **PRICE\_FREE\_CASH\_FLOW**: `"pfcf"` = `'pfcf'`

##### PRICE\_SALES

> `readonly` **PRICE\_SALES**: `"ps"` = `'ps'`

##### QUICK\_RATIO

> `readonly` **QUICK\_RATIO**: `"quickratio"` = `'quickratio'`

##### RELATIVE\_STRENGTH\_INDEX\_FOURTEEN

> `readonly` **RELATIVE\_STRENGTH\_INDEX\_FOURTEEN**: `"rsi"` = `'rsi'`

##### RELATIVE\_VOLUME

> `readonly` **RELATIVE\_VOLUME**: `"relativevolume"` = `'relativevolume'`

##### RETURN\_ON\_ASSETS

> `readonly` **RETURN\_ON\_ASSETS**: `"roa"` = `'roa'`

##### RETURN\_ON\_EQUITY

> `readonly` **RETURN\_ON\_EQUITY**: `"roe"` = `'roe'`

##### RETURN\_ON\_INVESTED\_CAPITAL

> `readonly` **RETURN\_ON\_INVESTED\_CAPITAL**: `"roi"` = `'roi'`

##### REVENUE\_SURPRISE

> `readonly` **REVENUE\_SURPRISE**: `"revenuesurprise"` = `'revenuesurprise'`

##### SALES

> `readonly` **SALES**: `"sales"` = `'sales'`

##### SALES\_GROWTH\_PAST\_FIVE\_YEARS

> `readonly` **SALES\_GROWTH\_PAST\_FIVE\_YEARS**: `"sales5years"` = `'sales5years'`

##### SALES\_GROWTH\_PAST\_THREE\_YEARS

> `readonly` **SALES\_GROWTH\_PAST\_THREE\_YEARS**: `"sales3years"` = `'sales3years'`

##### SALES\_GROWTH\_QTR\_OVER\_QTR

> `readonly` **SALES\_GROWTH\_QTR\_OVER\_QTR**: `"salesqoq"` = `'salesqoq'`

##### SALES\_YEAR\_OVER\_YEAR\_TTM

> `readonly` **SALES\_YEAR\_OVER\_YEAR\_TTM**: `"salesyoyttm"` = `'salesyoyttm'`

##### SECTOR

> `readonly` **SECTOR**: `"sector"` = `'sector'`

##### SHARES\_FLOAT

> `readonly` **SHARES\_FLOAT**: `"sharesfloat"` = `'sharesfloat'`

##### SHARES\_OUTSTANDING

> `readonly` **SHARES\_OUTSTANDING**: `"sharesoutstanding2"` = `'sharesoutstanding2'`

##### SHORT\_INTEREST

> `readonly` **SHORT\_INTEREST**: `"shortinterest"` = `'shortinterest'`

##### SHORT\_INTEREST\_RATIO

> `readonly` **SHORT\_INTEREST\_RATIO**: `"shortinterestratio"` = `'shortinterestratio'`

##### SHORT\_INTEREST\_SHARE

> `readonly` **SHORT\_INTEREST\_SHARE**: `"shortinterestshare"` = `'shortinterestshare'`

##### SHORTABLE

> `readonly` **SHORTABLE**: `"shortable"` = `'shortable'`

##### TARGET\_PRICE

> `readonly` **TARGET\_PRICE**: `"targetprice"` = `'targetprice'`

##### TICKER

> `readonly` **TICKER**: `"ticker"` = `'ticker'`

##### TICKERS\_FILTER

> `readonly` **TICKERS\_FILTER**: `"tickersfilter"` = `'tickersfilter'`

##### TOTAL\_DEBT\_EQUITY

> `readonly` **TOTAL\_DEBT\_EQUITY**: `"debteq"` = `'debteq'`

##### TWENTY\_DAY\_SMA\_RELATIVE

> `readonly` **TWENTY\_DAY\_SMA\_RELATIVE**: `"sma20"` = `'sma20'`

##### TWO\_HUNDRED\_DAY\_SMA\_RELATIVE

> `readonly` **TWO\_HUNDRED\_DAY\_SMA\_RELATIVE**: `"sma200"` = `'sma200'`

##### VOLATILITY\_MONTH

> `readonly` **VOLATILITY\_MONTH**: `"volatility4w"` = `'volatility4w'`

##### VOLATILITY\_WEEK

> `readonly` **VOLATILITY\_WEEK**: `"volatility1w"` = `'volatility1w'`

##### VOLUME

> `readonly` **VOLUME**: `"volume"` = `'volume'`
