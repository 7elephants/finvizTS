[**finvizts**](README.md)

***

[finvizts](README.md) / portfolio

# portfolio

## Functions

### getPortfolio()

> **getPortfolio**(`client`, `portfolioId`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Portfolio`](types/portfolio.md#portfolio)\>\>

Defined in: [portfolio.ts:27](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/portfolio.ts#L27)

Fetch holdings for a saved Finviz portfolio by its ID.
The portfolio ID can be found in the URL when viewing a portfolio on the Finviz website.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### portfolioId

`string` \| `number`

The numeric portfolio ID from the Finviz URL

##### options?

[`PortfolioOptions`](types/portfolio.md#portfoliooptions) = `{}`

Optional sort order and column selection

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Portfolio`](types/portfolio.md#portfolio)\>\>
