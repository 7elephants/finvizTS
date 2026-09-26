[**finvizts**](README.md)

***

[finvizts](README.md) / portfolio

# portfolio

## Functions

### getPortfolio()

> **getPortfolio**(`client`, `portfolioId`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Portfolio`](types/portfolio.md#portfolio)\>\>

Defined in: [portfolio.ts:27](https://github.com/7elephants/finvizTS/blob/7e7978f9488c74f86a2da83536b1c7137358ef1d/src/portfolio.ts#L27)

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
