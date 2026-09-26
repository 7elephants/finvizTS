[**finvizts**](../README.md)

***

[finvizts](../README.md) / types/groups

# types/groups

## Interfaces

### GroupOptions

Defined in: [types/groups.ts:61](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L61)

Options for a groups request.

#### Properties

##### fields?

> `optional` **fields?**: `number`[]

Defined in: [types/groups.ts:65](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L65)

Column indices to include in the response.

##### subgroup?

> `optional` **subgroup?**: `string`

Defined in: [types/groups.ts:63](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L63)

Subgroup name (only applicable for certain groups).

## Type Aliases

### Group

> **Group** = `Record`\<`string`, `string`\>

Defined in: [types/groups.ts:69](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L69)

A single row returned by the groups endpoint.

***

### GroupName

> **GroupName** = *typeof* [`GroupName`](#groupname-1)\[keyof *typeof* [`GroupName`](#groupname-1)\]

Defined in: [types/groups.ts:17](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L17)

Union of all known group name values.

***

### GroupView

> **GroupView** = *typeof* [`GroupView`](#groupview-1)\[keyof *typeof* [`GroupView`](#groupview-1)\]

Defined in: [types/groups.ts:46](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L46)

Union of all known group view ID values.

***

### IndustrySubgroup

> **IndustrySubgroup** = *typeof* [`IndustrySubgroup`](#industrysubgroup-1)\[keyof *typeof* [`IndustrySubgroup`](#industrysubgroup-1)\]

Defined in: [types/groups.ts:28](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L28)

Union of all known industry subgroup values.

## Variables

### GroupName

> `const` **GroupName**: `object`

Defined in: [types/groups.ts:17](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L17)

Valid group names for the groups endpoint.

#### Type Declaration

##### CAPITALIZATION

> `readonly` **CAPITALIZATION**: `"capitalization"` = `'capitalization'`

##### COUNTRY

> `readonly` **COUNTRY**: `"country"` = `'country'`

##### INDUSTRY

> `readonly` **INDUSTRY**: `"industry"` = `'industry'`

##### SECTOR

> `readonly` **SECTOR**: `"sector"` = `'sector'`

***

### GroupView

> `const` **GroupView**: `object`

Defined in: [types/groups.ts:46](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L46)

Valid view IDs for the groups endpoint.

#### Type Declaration

##### CHARTS

> `readonly` **CHARTS**: `410` = `410`

##### CUSTOM

> `readonly` **CUSTOM**: `150` = `150`

##### MAPS

> `readonly` **MAPS**: `510` = `510`

##### OVERVIEW

> `readonly` **OVERVIEW**: `110` = `110`

##### PERFORMANCE

> `readonly` **PERFORMANCE**: `140` = `140`

##### PERFORMANCE\_CHART

> `readonly` **PERFORMANCE\_CHART**: `210` = `210`

##### SPECTRUM

> `readonly` **SPECTRUM**: `310` = `310`

##### VALUATION

> `readonly` **VALUATION**: `120` = `120`

***

### IndustrySubgroup

> `const` **IndustrySubgroup**: `object`

Defined in: [types/groups.ts:28](https://github.com/7elephants/finvizTS/blob/35b052f8358756be41e8745d2c1b57d3010c1398/src/types/groups.ts#L28)

Valid industry subgroup names for the groups endpoint.

#### Type Declaration

##### BASIC\_MATERIALS

> `readonly` **BASIC\_MATERIALS**: `"basicmaterials"` = `'basicmaterials'`

##### COMMUNICATION\_SERVICES

> `readonly` **COMMUNICATION\_SERVICES**: `"communicationservices"` = `'communicationservices'`

##### CONSUMER\_CYCLICAL

> `readonly` **CONSUMER\_CYCLICAL**: `"consumercyclical"` = `'consumercyclical'`

##### CONSUMER\_DEFENSIVE

> `readonly` **CONSUMER\_DEFENSIVE**: `"consumerdefensive"` = `'consumerdefensive'`

##### ENERGY

> `readonly` **ENERGY**: `"energy"` = `'energy'`

##### FINANCIAL

> `readonly` **FINANCIAL**: `"financial"` = `'financial'`

##### HEALTHCARE

> `readonly` **HEALTHCARE**: `"healthcare"` = `'healthcare'`

##### INDUSTRIALS

> `readonly` **INDUSTRIALS**: `"industrials"` = `'industrials'`

##### REAL\_ESTATE

> `readonly` **REAL\_ESTATE**: `"realestate"` = `'realestate'`

##### TECHNOLOGY

> `readonly` **TECHNOLOGY**: `"technology"` = `'technology'`

##### UTILITIES

> `readonly` **UTILITIES**: `"utilities"` = `'utilities'`
