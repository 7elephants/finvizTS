[**finvizts**](README.md)

***

[finvizts](README.md) / portfolio

# portfolio

## Functions

### getPortfolio()

> **getPortfolio**(`client`, `portfolioId`, `options?`): `Promise`\<[`Portfolio`](types/portfolio.md#portfolio)[]\>

Defined in: [portfolio.ts:26](https://github.com/7elephants/finvizTS/blob/d23addfae925d6c740f235b944360447f6cbc93c/src/portfolio.ts#L26)

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
