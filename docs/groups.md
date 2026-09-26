[**finvizts**](README.md)

***

[finvizts](README.md) / groups

# groups

## Functions

### getGroups()

> **getGroups**\<`C`, `F`\>(`client`, `group`, `viewId`, `options?`): `Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Group`](types/groups.md#group), `F`\>\>

Defined in: [groups.ts:27](https://github.com/7elephants/finvizTS/blob/706aab1e24071062daf1484d72ac61b15cccad77/src/groups.ts#L27)

Fetch aggregated market data for a group (sector, industry, country, or capitalization).
The API returns a multi-row CSV; each row represents one group entry.

#### Type Parameters

##### C

`C` *extends* [`ResponseFormat`](types/response.md#responseformat) = `"parsed"`

##### F

`F` *extends* [`ResponseFormat`](types/response.md#responseformat) = `C`

#### Parameters

##### client

[`FinvizClient`](client.md#finvizclient)\<`C`\>

Authenticated FinvizClient instance

##### group

[`GroupName`](types/groups.md#groupname)

Group name (e.g. GroupName.Sector)

##### viewId

`number`

View ID controlling which fields are returned (e.g. GroupView.Overview)

##### options?

[`GroupOptions`](types/groups.md#groupoptions) & [`FormatOption`](types/response.md#formatoption)\<`F`\> = `{}`

Optional subgroup filter and column selection, plus optional `format`
                 (`parsed` | `raw` | `both`) overriding the client default

#### Returns

`Promise`\<[`FinvizResponse`](types/response.md#finvizresponse)\<[`Group`](types/groups.md#group), `F`\>\>
