[**finvizts**](README.md)

***

[finvizts](README.md) / portfolio

# portfolio

## Functions

### getPortfolio()

> **getPortfolio**(`client`, `portfolioId`, `options?`): `Promise`\<[`Portfolio`](types/portfolio.md#portfolio)[]\>

Defined in: [portfolio.ts:26](https://github.com/7elephants/finvizTS/blob/32fcd93ddd781eae14ef7eb4cd2365c4fc65b963/src/portfolio.ts#L26)

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

`Promise`\<[`Portfolio`](types/portfolio.md#portfolio)[]\>
