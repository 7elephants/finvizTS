[**finvizts**](README.md)

***

[finvizts](README.md) / fund-manager

# fund-manager

## Functions

### getFundManagerItems()

> **getFundManagerItems**(`client`, `path`, `nameColumn`, `options`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)\>\>

Defined in: [fund-manager.ts:49](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/fund-manager.ts#L49)

Fetch fund or fund-manager portfolios, optionally filtered by a search term and sorted by
order/direction. The API returns a multi-row CSV; each row is mapped to a ManagerFundItem.

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)

Authenticated FinvizClient instance

##### path

`string`

`/export/funds` or `/export/managers`

##### nameColumn

`"Fund"` \| `"Manager"`

CSV column holding the fund/manager name

##### options

[`ManagerFundOptions`](types/fund-manager.md#managerfundoptions)

Search term and sort options

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`ManagerFundItem`](types/fund-manager.md#managerfunditem)\>\>
