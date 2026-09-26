[**finvizts**](README.md)

***

[finvizts](README.md) / csv

# csv

## Functions

### parseRecord()

> **parseRecord**(`csv`): `Record`\<`string`, `string`\>

Defined in: [csv.ts:24](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/csv.ts#L24)

Parse a two-row CSV (header + single value row) into a flat key/value record.
Used for single-ticker quote responses.

#### Parameters

##### csv

`string`

#### Returns

`Record`\<`string`, `string`\>

#### Example

```ts
Input:  "Ticker,Price,Volume\nAAPL,180.00,1234567"
Output: { Ticker: "AAPL", Price: "180.00", Volume: "1234567" }
```

***

### parseRecords()

> **parseRecords**(`csv`): `Record`\<`string`, `string`\>[]

Defined in: [csv.ts:40](https://github.com/7elephants/finvizTS/blob/5e4c7e375813a9349118ed5f6293931806e2095b/src/csv.ts#L40)

Parse a multi-row CSV (header + N data rows) into an array of key/value records.
Used for screener and news responses.

#### Parameters

##### csv

`string`

#### Returns

`Record`\<`string`, `string`\>[]

#### Example

```ts
Input:  "Ticker,Price\nAAPL,180.00\nMSFT,420.00"
Output: [{ Ticker: "AAPL", Price: "180.00" }, { Ticker: "MSFT", Price: "420.00" }]
```
