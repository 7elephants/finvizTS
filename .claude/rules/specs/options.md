## Description

The options API allows for a single stock to be requested and returns them with the configured fields of a pre-determined view or custom view.

## Request

The screener endpoint is a GET request to `export/options` with the following query parameters:

- `auth` (required): Your API key
- `t` (required): The stock ticker symbol you want to retrieve data for. For example, `AAPL` for Apple Inc.
- `e` (required): The option expiration date in the format `yyyy-mm-dd`. For example, `2026-05-08` for May 8, 2026.
- `ty` (required): The view type you want to retrieve. The valid values are:

| Value | Description         |
| ----- | ------------------- |
| oc    | Prices (default)    |
| ocv   | Volatility & Greeks |

## Response

```csv
Contract Name,Last Trade,Strike,Last Close,Bid,Ask,Change $,Change %,Volume,Open Int.,Type,IV,Delta,Gamma,Theta,Vega,Rho
MSFT260413P00290000,4/9/2026 13:18,290,0.01,,0.01,0,0.00%,0,58,put,0.9138,-0.0011,0.0001,-0.0195,0.0013,0
MSFT260413C00290000,,290,,79.25,82.8,,,0,0,call,1.9526,0.9988,0.0001,-0.0393,0.0013,0.0225
MSFT260413P00295000,4/10/2026 10:39,295,0.05,,0.05,0.04,400.00%,6,12,put,0.8693,-0.0012,0.0001,-0.0203,0.0013,0
MSFT260413C00295000,,295,,74.5,77.45,,,0,0,call,1.746,0.9987,0.0001,-0.0396,0.0013,0.0229
MSFT260413P00300000,4/10/2026 10:05,300,0.01,,0.01,-0.02,-66.67%,1,13,put,0.8554,-0.0023,0.0002,-0.0341,0.0024,-0.0001
MSFT260413C00300000,4/10/2026 15:17,300,71.1,69.7,72.55,-1.6,-2.20%,2,4,call,1.6796,0.9986,0.0002,-0.0399,0.0014,0.0232
MSFT260413P00305000,4/10/2026 10:05,305,0.01,,0.5,-0.02,-66.67%,1,14,put,0.752,-0.0014,0.0002,-0.0199,0.0015,0
MSFT260413C00305000,4/10/2026 15:17,305,66.2,64.35,67.35,0,0.00%,4,0,call,1.5285,0.9985,0.0002,-0.0402,0.0015,0.0236
MSFT260413P00310000,4/10/2026 10:08,310,0.01,,0.01,-0.02,-66.67%,12,7,put,0.7373,-0.0026,0.0003,-0.0334,0.0028,-0.0001
MSFT260413C00310000,,310,,59.25,62.65,,,0,0,call,1.4835,0.9984,0.0002,-0.0405,0.0016,0.024
```

## Example

`https://elite.finviz.com/export/options?auth=YOUR_API_KEY&t=MSFT&ty=oc&e=2026-05-08`
