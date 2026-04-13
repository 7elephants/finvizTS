
// ---------------------------------------------------------------------------
// Screener performance filters
// ---------------------------------------------------------------------------

export const ScreenerPerformanceFilter = {
  TODAY_UP: 'ta_perf_dup',
  TODAY_DOWN: 'ta_perf_ddown',
  TODAY_DOWN_15: 'ta_perf_d15u',
  TODAY_DOWN_10: 'ta_perf_d10u',
  TODAY_DOWN_5: 'ta_perf_d5u',
  TODAY_UP_5: 'ta_perf_d5o',
  TODAY_UP_10: 'ta_perf_d10o',
  TODAY_UP_15: 'ta_perf_d15o',
  WEEK_DOWN_30: 'ta_perf_1w30u',
  WEEK_DOWN_20: 'ta_perf_1w20u',
  WEEK_DOWN_10: 'ta_perf_1w10u',
  WEEK_DOWN: 'ta_perf_1wdown',
  WEEK_UP: 'ta_perf_1wup',
  WEEK_UP_10: 'ta_perf_1w10o',
  WEEK_UP_20: 'ta_perf_1w20o',
  WEEK_UP_30: 'ta_perf_1w30o',
  MONTH_DOWN_50: 'ta_perf_4w50u',
  MONTH_DOWN_30: 'ta_perf_4w30u',
  MONTH_DOWN_20: 'ta_perf_4w20u',
  MONTH_DOWN_10: 'ta_perf_4w10u',
  MONTH_DOWN: 'ta_perf_4wdown',
  MONTH_UP: 'ta_perf_4wup',
  MONTH_UP_10: 'ta_perf_4w10o',
  MONTH_UP_20: 'ta_perf_4w20o',
  MONTH_UP_30: 'ta_perf_4w30o',
  MONTH_UP_50: 'ta_perf_4w50o',
  QUARTER_DOWN_50: 'ta_perf_13w50u',
  QUARTER_DOWN_30: 'ta_perf_13w30u',
  QUARTER_DOWN_20: 'ta_perf_13w20u',
  QUARTER_DOWN_10: 'ta_perf_13w10u',
  QUARTER_DOWN: 'ta_perf_13wdown',
  QUARTER_UP: 'ta_perf_13wup',
  QUARTER_UP_10: 'ta_perf_13w10o',
  QUARTER_UP_20: 'ta_perf_13w20o',
  QUARTER_UP_30: 'ta_perf_13w30o',
  QUARTER_UP_50: 'ta_perf_13w50o',
  HALF_DOWN_75: 'ta_perf_26w75u',
  HALF_DOWN_50: 'ta_perf_26w50u',
  HALF_DOWN_30: 'ta_perf_26w30u',
  HALF_DOWN_20: 'ta_perf_26w20u',
  HALF_DOWN_10: 'ta_perf_26w10u',
  HALF_DOWN: 'ta_perf_26wdown',
  HALF_UP: 'ta_perf_26wup',
  HALF_UP_10: 'ta_perf_26w10o',
  HALF_UP_20: 'ta_perf_26w20o',
  HALF_UP_30: 'ta_perf_26w30o',
  HALF_UP_50: 'ta_perf_26w50o',
  HALF_UP_100: 'ta_perf_26w100o',
  YTD_DOWN_75: 'ta_perf_ytd75u',
  YTD_DOWN_50: 'ta_perf_ytd50u',
  YTD_DOWN_30: 'ta_perf_ytd30u',
  YTD_DOWN_20: 'ta_perf_ytd20u',
  YTD_DOWN_10: 'ta_perf_ytd10u',
  YTD_DOWN_5: 'ta_perf_ytd5u',
  YTD_DOWN: 'ta_perf_ytddown',
  YTD_UP: 'ta_perf_ytdup',
  YTD_UP_5: 'ta_perf_ytd5o',
  YTD_UP_10: 'ta_perf_ytd10o',
  YTD_UP_20: 'ta_perf_ytd20o',
  YTD_UP_30: 'ta_perf_ytd30o',
  YTD_UP_50: 'ta_perf_ytd50o',
  YTD_UP_100: 'ta_perf_ytd100o',
  YEAR_DOWN_75: 'ta_perf_52w75u',
  YEAR_DOWN_50: 'ta_perf_52w50u',
  YEAR_DOWN_30: 'ta_perf_52w30u',
  YEAR_DOWN_20: 'ta_perf_52w20u',
  YEAR_DOWN_10: 'ta_perf_52w10u',
  YEAR_DOWN: 'ta_perf_52wdown',
  YEAR_UP: 'ta_perf_52wup',
  YEAR_UP_10: 'ta_perf_52w10o',
  YEAR_UP_20: 'ta_perf_52w20o',
  YEAR_UP_30: 'ta_perf_52w30o',
  YEAR_UP_50: 'ta_perf_52w50o',
  YEAR_UP_100: 'ta_perf_52w100o',
  YEAR_UP_200: 'ta_perf_52w200o',
  YEAR_UP_300: 'ta_perf_52w300o',
  YEAR_UP_500: 'ta_perf_52w500o',
  THREE_YEARS_DOWN_90: 'ta_perf_3y90u',
  THREE_YEARS_DOWN_75: 'ta_perf_3y75u',
  THREE_YEARS_DOWN_50: 'ta_perf_3y50u',
  THREE_YEARS_DOWN_30: 'ta_perf_3y30u',
  THREE_YEARS_DOWN_20: 'ta_perf_3y20u',
  THREE_YEARS_DOWN_10: 'ta_perf_3y10u',
  THREE_YEARS_DOWN: 'ta_perf_3ydown',
  THREE_YEARS_UP: 'ta_perf_3yup',
  THREE_YEARS_UP_10: 'ta_perf_3y10o',
  THREE_YEARS_UP_20: 'ta_perf_3y20o',
  THREE_YEARS_UP_30: 'ta_perf_3y30o',
  THREE_YEARS_UP_50: 'ta_perf_3y50o',
  THREE_YEARS_UP_100: 'ta_perf_3y100o',
  THREE_YEARS_UP_200: 'ta_perf_3y200o',
  THREE_YEARS_UP_300: 'ta_perf_3y300o',
  THREE_YEARS_UP_500: 'ta_perf_3y500o',
  THREE_YEARS_UP_1000: 'ta_perf_3y1000o',
  FIVE_YEARS_DOWN_90: 'ta_perf_5y90u',
  FIVE_YEARS_DOWN_75: 'ta_perf_5y75u',
  FIVE_YEARS_DOWN_50: 'ta_perf_5y50u',
  FIVE_YEARS_DOWN_30: 'ta_perf_5y30u',
  FIVE_YEARS_DOWN_20: 'ta_perf_5y20u',
  FIVE_YEARS_DOWN_10: 'ta_perf_5y10u',
  FIVE_YEARS_DOWN: 'ta_perf_5ydown',
  FIVE_YEARS_UP: 'ta_perf_5yup',
  FIVE_YEARS_UP_10: 'ta_perf_5y10o',
  FIVE_YEARS_UP_20: 'ta_perf_5y20o',
  FIVE_YEARS_UP_30: 'ta_perf_5y30o',
  FIVE_YEARS_UP_50: 'ta_perf_5y50o',
  FIVE_YEARS_UP_100: 'ta_perf_5y100o',
  FIVE_YEARS_UP_200: 'ta_perf_5y200o',
  FIVE_YEARS_UP_300: 'ta_perf_5y300o',
  FIVE_YEARS_UP_500: 'ta_perf_5y500o',
  FIVE_YEARS_UP_1000: 'ta_perf_5y1000o',
  TEN_YEARS_DOWN_90: 'ta_perf_10y90u',
  TEN_YEARS_DOWN_75: 'ta_perf_10y75u',
  TEN_YEARS_DOWN_50: 'ta_perf_10y50u',
  TEN_YEARS_DOWN_30: 'ta_perf_10y30u',
  TEN_YEARS_DOWN_20: 'ta_perf_10y20u',
  TEN_YEARS_DOWN_10: 'ta_perf_10y10u',
  TEN_YEARS_DOWN: 'ta_perf_10ydown',
  TEN_YEARS_UP: 'ta_perf_10yup',
  TEN_YEARS_UP_10: 'ta_perf_10y10o',
  TEN_YEARS_UP_20: 'ta_perf_10y20o',
  TEN_YEARS_UP_30: 'ta_perf_10y30o',
  TEN_YEARS_UP_50: 'ta_perf_10y50o',
  TEN_YEARS_UP_100: 'ta_perf_10y100o',
  TEN_YEARS_UP_200: 'ta_perf_10y200o',
  TEN_YEARS_UP_300: 'ta_perf_10y300o',
  TEN_YEARS_UP_500: 'ta_perf_10y500o',
  TEN_YEARS_UP_1000: 'ta_perf_10y1000o',
} as const;

/** Union of all known screener performance filter values. */
export type ScreenerPerformanceFilter = (typeof ScreenerPerformanceFilter)[keyof typeof ScreenerPerformanceFilter];

// ---------------------------------------------------------------------------
// Screener performance 2 filters
// ---------------------------------------------------------------------------

export const ScreenerPerformance2Filter = {
  TODAY_UP: 'ta_perf2_dup',
  TODAY_DOWN: 'ta_perf2_ddown',
  TODAY_DOWN_15: 'ta_perf2_d15u',
  TODAY_DOWN_10: 'ta_perf2_d10u',
  TODAY_DOWN_5: 'ta_perf2_d5u',
  TODAY_UP_5: 'ta_perf2_d5o',
  TODAY_UP_10: 'ta_perf2_d10o',
  TODAY_UP_15: 'ta_perf2_d15o',
  WEEK_DOWN_30: 'ta_perf2_1w30u',
  WEEK_DOWN_20: 'ta_perf2_1w20u',
  WEEK_DOWN_10: 'ta_perf2_1w10u',
  WEEK_DOWN: 'ta_perf2_1wdown',
  WEEK_UP: 'ta_perf2_1wup',
  WEEK_UP_10: 'ta_perf2_1w10o',
  WEEK_UP_20: 'ta_perf2_1w20o',
  WEEK_UP_30: 'ta_perf2_1w30o',
  MONTH_DOWN_50: 'ta_perf2_4w50u',
  MONTH_DOWN_30: 'ta_perf2_4w30u',
  MONTH_DOWN_20: 'ta_perf2_4w20u',
  MONTH_DOWN_10: 'ta_perf2_4w10u',
  MONTH_DOWN: 'ta_perf2_4wdown',
  MONTH_UP: 'ta_perf2_4wup',
  MONTH_UP_10: 'ta_perf2_4w10o',
  MONTH_UP_20: 'ta_perf2_4w20o',
  MONTH_UP_30: 'ta_perf2_4w30o',
  MONTH_UP_50: 'ta_perf2_4w50o',
  QUARTER_DOWN_50: 'ta_perf2_13w50u',
  QUARTER_DOWN_30: 'ta_perf2_13w30u',
  QUARTER_DOWN_20: 'ta_perf2_13w20u',
  QUARTER_DOWN_10: 'ta_perf2_13w10u',
  QUARTER_DOWN: 'ta_perf2_13wdown',
  QUARTER_UP: 'ta_perf2_13wup',
  QUARTER_UP_10: 'ta_perf2_13w10o',
  QUARTER_UP_20: 'ta_perf2_13w20o',
  QUARTER_UP_30: 'ta_perf2_13w30o',
  QUARTER_UP_50: 'ta_perf2_13w50o',
  HALF_DOWN_75: 'ta_perf2_26w75u',
  HALF_DOWN_50: 'ta_perf2_26w50u',
  HALF_DOWN_30: 'ta_perf2_26w30u',
  HALF_DOWN_20: 'ta_perf2_26w20u',
  HALF_DOWN_10: 'ta_perf2_26w10u',
  HALF_DOWN: 'ta_perf2_26wdown',
  HALF_UP: 'ta_perf2_26wup',
  HALF_UP_10: 'ta_perf2_26w10o',
  HALF_UP_20: 'ta_perf2_26w20o',
  HALF_UP_30: 'ta_perf2_26w30o',
  HALF_UP_50: 'ta_perf2_26w50o',
  HALF_UP_100: 'ta_perf2_26w100o',
  YTD_DOWN_75: 'ta_perf2_ytd75u',
  YTD_DOWN_50: 'ta_perf2_ytd50u',
  YTD_DOWN_30: 'ta_perf2_ytd30u',
  YTD_DOWN_20: 'ta_perf2_ytd20u',
  YTD_DOWN_10: 'ta_perf2_ytd10u',
  YTD_DOWN_5: 'ta_perf2_ytd5u',
  YTD_DOWN: 'ta_perf2_ytddown',
  YTD_UP: 'ta_perf2_ytdup',
  YTD_UP_5: 'ta_perf2_ytd5o',
  YTD_UP_10: 'ta_perf2_ytd10o',
  YTD_UP_20: 'ta_perf2_ytd20o',
  YTD_UP_30: 'ta_perf2_ytd30o',
  YTD_UP_50: 'ta_perf2_ytd50o',
  YTD_UP_100: 'ta_perf2_ytd100o',
  YEAR_DOWN_75: 'ta_perf2_52w75u',
  YEAR_DOWN_50: 'ta_perf2_52w50u',
  YEAR_DOWN_30: 'ta_perf2_52w30u',
  YEAR_DOWN_20: 'ta_perf2_52w20u',
  YEAR_DOWN_10: 'ta_perf2_52w10u',
  YEAR_DOWN: 'ta_perf2_52wdown',
  YEAR_UP: 'ta_perf2_52wup',
  YEAR_UP_10: 'ta_perf2_52w10o',
  YEAR_UP_20: 'ta_perf2_52w20o',
  YEAR_UP_30: 'ta_perf2_52w30o',
  YEAR_UP_50: 'ta_perf2_52w50o',
  YEAR_UP_100: 'ta_perf2_52w100o',
  YEAR_UP_200: 'ta_perf2_52w200o',
  YEAR_UP_300: 'ta_perf2_52w300o',
  YEAR_UP_500: 'ta_perf2_52w500o',
  THREE_YEARS_DOWN_90: 'ta_perf2_3y90u',
  THREE_YEARS_DOWN_75: 'ta_perf2_3y75u',
  THREE_YEARS_DOWN_50: 'ta_perf2_3y50u',
  THREE_YEARS_DOWN_30: 'ta_perf2_3y30u',
  THREE_YEARS_DOWN_20: 'ta_perf2_3y20u',
  THREE_YEARS_DOWN_10: 'ta_perf2_3y10u',
  THREE_YEARS_DOWN: 'ta_perf2_3ydown',
  THREE_YEARS_UP: 'ta_perf2_3yup',
  THREE_YEARS_UP_10: 'ta_perf2_3y10o',
  THREE_YEARS_UP_20: 'ta_perf2_3y20o',
  THREE_YEARS_UP_30: 'ta_perf2_3y30o',
  THREE_YEARS_UP_50: 'ta_perf2_3y50o',
  THREE_YEARS_UP_100: 'ta_perf2_3y100o',
  THREE_YEARS_UP_200: 'ta_perf2_3y200o',
  THREE_YEARS_UP_300: 'ta_perf2_3y300o',
  THREE_YEARS_UP_500: 'ta_perf2_3y500o',
  THREE_YEARS_UP_1000: 'ta_perf2_3y1000o',
  FIVE_YEARS_DOWN_90: 'ta_perf2_5y90u',
  FIVE_YEARS_DOWN_75: 'ta_perf2_5y75u',
  FIVE_YEARS_DOWN_50: 'ta_perf2_5y50u',
  FIVE_YEARS_DOWN_30: 'ta_perf2_5y30u',
  FIVE_YEARS_DOWN_20: 'ta_perf2_5y20u',
  FIVE_YEARS_DOWN_10: 'ta_perf2_5y10u',
  FIVE_YEARS_DOWN: 'ta_perf2_5ydown',
  FIVE_YEARS_UP: 'ta_perf2_5yup',
  FIVE_YEARS_UP_10: 'ta_perf2_5y10o',
  FIVE_YEARS_UP_20: 'ta_perf2_5y20o',
  FIVE_YEARS_UP_30: 'ta_perf2_5y30o',
  FIVE_YEARS_UP_50: 'ta_perf2_5y50o',
  FIVE_YEARS_UP_100: 'ta_perf2_5y100o',
  FIVE_YEARS_UP_200: 'ta_perf2_5y200o',
  FIVE_YEARS_UP_300: 'ta_perf2_5y300o',
  FIVE_YEARS_UP_500: 'ta_perf2_5y500o',
  FIVE_YEARS_UP_1000: 'ta_perf2_5y1000o',
  TEN_YEARS_DOWN_90: 'ta_perf2_10y90u',
  TEN_YEARS_DOWN_75: 'ta_perf2_10y75u',
  TEN_YEARS_DOWN_50: 'ta_perf2_10y50u',
  TEN_YEARS_DOWN_30: 'ta_perf2_10y30u',
  TEN_YEARS_DOWN_20: 'ta_perf2_10y20u',
  TEN_YEARS_DOWN_10: 'ta_perf2_10y10u',
  TEN_YEARS_DOWN: 'ta_perf2_10ydown',
  TEN_YEARS_UP: 'ta_perf2_10yup',
  TEN_YEARS_UP_10: 'ta_perf2_10y10o',
  TEN_YEARS_UP_20: 'ta_perf2_10y20o',
  TEN_YEARS_UP_30: 'ta_perf2_10y30o',
  TEN_YEARS_UP_50: 'ta_perf2_10y50o',
  TEN_YEARS_UP_100: 'ta_perf2_10y100o',
  TEN_YEARS_UP_200: 'ta_perf2_10y200o',
  TEN_YEARS_UP_300: 'ta_perf2_10y300o',
  TEN_YEARS_UP_500: 'ta_perf2_10y500o',
  TEN_YEARS_UP_1000: 'ta_perf2_10y1000o',
} as const;

/** Union of all known screener performance 2 filter values. */
export type ScreenerPerformance2Filter = (typeof ScreenerPerformance2Filter)[keyof typeof ScreenerPerformance2Filter];

// ---------------------------------------------------------------------------
// Screener volatility filters
// ---------------------------------------------------------------------------

export const ScreenerVolatilityFilter = {
  WEEK_OVER_2: 'ta_volatility_wo2',
  WEEK_OVER_3: 'ta_volatility_wo3',
  WEEK_OVER_4: 'ta_volatility_wo4',
  WEEK_OVER_5: 'ta_volatility_wo5',
  WEEK_OVER_6: 'ta_volatility_wo6',
  WEEK_OVER_7: 'ta_volatility_wo7',
  WEEK_OVER_8: 'ta_volatility_wo8',
  WEEK_OVER_9: 'ta_volatility_wo9',
  WEEK_OVER_10: 'ta_volatility_wo10',
  WEEK_OVER_12: 'ta_volatility_wo12',
  WEEK_OVER_15: 'ta_volatility_wo15',
  MONTH_OVER_2: 'ta_volatility_mo2',
  MONTH_OVER_3: 'ta_volatility_mo3',
  MONTH_OVER_4: 'ta_volatility_mo4',
  MONTH_OVER_5: 'ta_volatility_mo5',
  MONTH_OVER_6: 'ta_volatility_mo6',
  MONTH_OVER_7: 'ta_volatility_mo7',
  MONTH_OVER_8: 'ta_volatility_mo8',
  MONTH_OVER_9: 'ta_volatility_mo9',
  MONTH_OVER_10: 'ta_volatility_mo10',
  MONTH_OVER_12: 'ta_volatility_mo12',
  MONTH_OVER_15: 'ta_volatility_mo15',
} as const;

/** Union of all known screener volatility filter values. */
export type ScreenerVolatilityFilter = (typeof ScreenerVolatilityFilter)[keyof typeof ScreenerVolatilityFilter];

// ---------------------------------------------------------------------------
// Screener RSI (14) filters
// ---------------------------------------------------------------------------

export const ScreenerRSIFilter = {
  OVERBOUGHT_90: 'ta_rsi_ob90',
  OVERBOUGHT_80: 'ta_rsi_ob80',
  OVERBOUGHT_70: 'ta_rsi_ob70',
  OVERBOUGHT_60: 'ta_rsi_ob60',
  OVERSOLD_40: 'ta_rsi_os40',
  OVERSOLD_30: 'ta_rsi_os30',
  OVERSOLD_20: 'ta_rsi_os20',
  OVERSOLD_10: 'ta_rsi_os10',
  NOT_OVERBOUGHT_UNDER_60: 'ta_rsi_nob60',
  NOT_OVERBOUGHT_UNDER_50: 'ta_rsi_nob50',
  NOT_OVERSOLD_OVER_50: 'ta_rsi_nos50',
  NOT_OVERSOLD_OVER_40: 'ta_rsi_nos40',
} as const;

/** Union of all known screener RSI filter values. */
export type ScreenerRSIFilter = (typeof ScreenerRSIFilter)[keyof typeof ScreenerRSIFilter];

// ---------------------------------------------------------------------------
// Screener gap filters
// ---------------------------------------------------------------------------

export const ScreenerGapFilter = {
  UP: 'ta_gap_u',
  UP_0: 'ta_gap_u0',
  UP_1: 'ta_gap_u1',
  UP_2: 'ta_gap_u2',
  UP_3: 'ta_gap_u3',
  UP_4: 'ta_gap_u4',
  UP_5: 'ta_gap_u5',
  UP_6: 'ta_gap_u6',
  UP_7: 'ta_gap_u7',
  UP_8: 'ta_gap_u8',
  UP_9: 'ta_gap_u9',
  UP_10: 'ta_gap_u10',
  UP_15: 'ta_gap_u15',
  UP_20: 'ta_gap_u20',
  DOWN: 'ta_gap_d',
  DOWN_0: 'ta_gap_d0',
  DOWN_1: 'ta_gap_d1',
  DOWN_2: 'ta_gap_d2',
  DOWN_3: 'ta_gap_d3',
  DOWN_4: 'ta_gap_d4',
  DOWN_5: 'ta_gap_d5',
  DOWN_6: 'ta_gap_d6',
  DOWN_7: 'ta_gap_d7',
  DOWN_8: 'ta_gap_d8',
  DOWN_9: 'ta_gap_d9',
  DOWN_10: 'ta_gap_d10',
  DOWN_15: 'ta_gap_d15',
  DOWN_20: 'ta_gap_d20',
} as const;

/** Union of all known screener gap filter values. */
export type ScreenerGapFilter = (typeof ScreenerGapFilter)[keyof typeof ScreenerGapFilter];

// ---------------------------------------------------------------------------
// Screener 20-day SMA filters
// ---------------------------------------------------------------------------

export const ScreenerSMA20Filter = {
  PRICE_BELOW: 'ta_sma20_pb',
  PRICE_BELOW_10: 'ta_sma20_pb10',
  PRICE_BELOW_20: 'ta_sma20_pb20',
  PRICE_BELOW_30: 'ta_sma20_pb30',
  PRICE_BELOW_40: 'ta_sma20_pb40',
  PRICE_BELOW_50: 'ta_sma20_pb50',
  PRICE_ABOVE: 'ta_sma20_pa',
  PRICE_ABOVE_10: 'ta_sma20_pa10',
  PRICE_ABOVE_20: 'ta_sma20_pa20',
  PRICE_ABOVE_30: 'ta_sma20_pa30',
  PRICE_ABOVE_40: 'ta_sma20_pa40',
  PRICE_ABOVE_50: 'ta_sma20_pa50',
  PRICE_CROSSED: 'ta_sma20_pc',
  PRICE_CROSSED_ABOVE: 'ta_sma20_pca',
  PRICE_CROSSED_BELOW: 'ta_sma20_pcb',
  CROSSED_SMA50: 'ta_sma20_cross50',
  CROSSED_SMA50_ABOVE: 'ta_sma20_cross50a',
  CROSSED_SMA50_BELOW: 'ta_sma20_cross50b',
  CROSSED_SMA200: 'ta_sma20_cross200',
  CROSSED_SMA200_ABOVE: 'ta_sma20_cross200a',
  CROSSED_SMA200_BELOW: 'ta_sma20_cross200b',
  ABOVE_SMA50: 'ta_sma20_sa50',
  BELOW_SMA50: 'ta_sma20_sb50',
  ABOVE_SMA200: 'ta_sma20_sa200',
  BELOW_SMA200: 'ta_sma20_sb200',
} as const;

/** Union of all known screener 20-day SMA filter values. */
export type ScreenerSMA20Filter = (typeof ScreenerSMA20Filter)[keyof typeof ScreenerSMA20Filter];

// ---------------------------------------------------------------------------
// Screener 50-day SMA filters
// ---------------------------------------------------------------------------

export const ScreenerSMA50Filter = {
  PRICE_BELOW: 'ta_sma50_pb',
  PRICE_BELOW_10: 'ta_sma50_pb10',
  PRICE_BELOW_20: 'ta_sma50_pb20',
  PRICE_BELOW_30: 'ta_sma50_pb30',
  PRICE_BELOW_40: 'ta_sma50_pb40',
  PRICE_BELOW_50: 'ta_sma50_pb50',
  PRICE_ABOVE: 'ta_sma50_pa',
  PRICE_ABOVE_10: 'ta_sma50_pa10',
  PRICE_ABOVE_20: 'ta_sma50_pa20',
  PRICE_ABOVE_30: 'ta_sma50_pa30',
  PRICE_ABOVE_40: 'ta_sma50_pa40',
  PRICE_ABOVE_50: 'ta_sma50_pa50',
  PRICE_CROSSED: 'ta_sma50_pc',
  PRICE_CROSSED_ABOVE: 'ta_sma50_pca',
  PRICE_CROSSED_BELOW: 'ta_sma50_pcb',
  CROSSED_SMA20: 'ta_sma50_cross20',
  CROSSED_SMA20_ABOVE: 'ta_sma50_cross20a',
  CROSSED_SMA20_BELOW: 'ta_sma50_cross20b',
  CROSSED_SMA200: 'ta_sma50_cross200',
  CROSSED_SMA200_ABOVE: 'ta_sma50_cross200a',
  CROSSED_SMA200_BELOW: 'ta_sma50_cross200b',
  ABOVE_SMA20: 'ta_sma50_sa20',
  BELOW_SMA20: 'ta_sma50_sb20',
  ABOVE_SMA200: 'ta_sma50_sa200',
  BELOW_SMA200: 'ta_sma50_sb200',
} as const;

/** Union of all known screener 50-day SMA filter values. */
export type ScreenerSMA50Filter = (typeof ScreenerSMA50Filter)[keyof typeof ScreenerSMA50Filter];

// ---------------------------------------------------------------------------
// Screener 200-day SMA filters
// ---------------------------------------------------------------------------

export const ScreenerSMA200Filter = {
  PRICE_BELOW: 'ta_sma200_pb',
  PRICE_BELOW_10: 'ta_sma200_pb10',
  PRICE_BELOW_20: 'ta_sma200_pb20',
  PRICE_BELOW_30: 'ta_sma200_pb30',
  PRICE_BELOW_40: 'ta_sma200_pb40',
  PRICE_BELOW_50: 'ta_sma200_pb50',
  PRICE_BELOW_60: 'ta_sma200_pb60',
  PRICE_BELOW_70: 'ta_sma200_pb70',
  PRICE_BELOW_80: 'ta_sma200_pb80',
  PRICE_BELOW_90: 'ta_sma200_pb90',
  PRICE_ABOVE: 'ta_sma200_pa',
  PRICE_ABOVE_10: 'ta_sma200_pa10',
  PRICE_ABOVE_20: 'ta_sma200_pa20',
  PRICE_ABOVE_30: 'ta_sma200_pa30',
  PRICE_ABOVE_40: 'ta_sma200_pa40',
  PRICE_ABOVE_50: 'ta_sma200_pa50',
  PRICE_ABOVE_60: 'ta_sma200_pa60',
  PRICE_ABOVE_70: 'ta_sma200_pa70',
  PRICE_ABOVE_80: 'ta_sma200_pa80',
  PRICE_ABOVE_90: 'ta_sma200_pa90',
  PRICE_ABOVE_100: 'ta_sma200_pa100',
  PRICE_CROSSED: 'ta_sma200_pc',
  PRICE_CROSSED_ABOVE: 'ta_sma200_pca',
  PRICE_CROSSED_BELOW: 'ta_sma200_pcb',
  CROSSED_SMA20: 'ta_sma200_cross20',
  CROSSED_SMA20_ABOVE: 'ta_sma200_cross20a',
  CROSSED_SMA20_BELOW: 'ta_sma200_cross20b',
  CROSSED_SMA50: 'ta_sma200_cross50',
  CROSSED_SMA50_ABOVE: 'ta_sma200_cross50a',
  CROSSED_SMA50_BELOW: 'ta_sma200_cross50b',
  ABOVE_SMA20: 'ta_sma200_sa20',
  BELOW_SMA20: 'ta_sma200_sb20',
  ABOVE_SMA50: 'ta_sma200_sa50',
  BELOW_SMA50: 'ta_sma200_sb50',
} as const;

/** Union of all known screener 200-day SMA filter values. */
export type ScreenerSMA200Filter = (typeof ScreenerSMA200Filter)[keyof typeof ScreenerSMA200Filter];

// ---------------------------------------------------------------------------
// Screener change filters
// ---------------------------------------------------------------------------

export const ScreenerChangeFilter = {
  UP: 'ta_change_u',
  UP_1: 'ta_change_u1',
  UP_2: 'ta_change_u2',
  UP_3: 'ta_change_u3',
  UP_4: 'ta_change_u4',
  UP_5: 'ta_change_u5',
  UP_6: 'ta_change_u6',
  UP_7: 'ta_change_u7',
  UP_8: 'ta_change_u8',
  UP_9: 'ta_change_u9',
  UP_10: 'ta_change_u10',
  UP_15: 'ta_change_u15',
  UP_20: 'ta_change_u20',
  DOWN: 'ta_change_d',
  DOWN_1: 'ta_change_d1',
  DOWN_2: 'ta_change_d2',
  DOWN_3: 'ta_change_d3',
  DOWN_4: 'ta_change_d4',
  DOWN_5: 'ta_change_d5',
  DOWN_6: 'ta_change_d6',
  DOWN_7: 'ta_change_d7',
  DOWN_8: 'ta_change_d8',
  DOWN_9: 'ta_change_d9',
  DOWN_10: 'ta_change_d10',
  DOWN_15: 'ta_change_d15',
  DOWN_20: 'ta_change_d20',
} as const;

/** Union of all known screener change filter values. */
export type ScreenerChangeFilter = (typeof ScreenerChangeFilter)[keyof typeof ScreenerChangeFilter];

// ---------------------------------------------------------------------------
// Screener change from open filters
// ---------------------------------------------------------------------------

export const ScreenerChangeFromOpenFilter = {
  UP: 'ta_changeopen_u',
  UP_1: 'ta_changeopen_u1',
  UP_2: 'ta_changeopen_u2',
  UP_3: 'ta_changeopen_u3',
  UP_4: 'ta_changeopen_u4',
  UP_5: 'ta_changeopen_u5',
  UP_6: 'ta_changeopen_u6',
  UP_7: 'ta_changeopen_u7',
  UP_8: 'ta_changeopen_u8',
  UP_9: 'ta_changeopen_u9',
  UP_10: 'ta_changeopen_u10',
  UP_15: 'ta_changeopen_u15',
  UP_20: 'ta_changeopen_u20',
  DOWN: 'ta_changeopen_d',
  DOWN_1: 'ta_changeopen_d1',
  DOWN_2: 'ta_changeopen_d2',
  DOWN_3: 'ta_changeopen_d3',
  DOWN_4: 'ta_changeopen_d4',
  DOWN_5: 'ta_changeopen_d5',
  DOWN_6: 'ta_changeopen_d6',
  DOWN_7: 'ta_changeopen_d7',
  DOWN_8: 'ta_changeopen_d8',
  DOWN_9: 'ta_changeopen_d9',
  DOWN_10: 'ta_changeopen_d10',
  DOWN_15: 'ta_changeopen_d15',
  DOWN_20: 'ta_changeopen_d20',
} as const;

/** Union of all known screener change from open filter values. */
export type ScreenerChangeFromOpenFilter = (typeof ScreenerChangeFromOpenFilter)[keyof typeof ScreenerChangeFromOpenFilter];

// ---------------------------------------------------------------------------
// Screener 20-day high/low filters
// ---------------------------------------------------------------------------

export const ScreenerHighLow20DFilter = {
  NEW_HIGH: 'ta_highlow20d_nh',
  NEW_LOW: 'ta_highlow20d_nl',
  BELOW_HIGH_5: 'ta_highlow20d_b5h',
  BELOW_HIGH_10: 'ta_highlow20d_b10h',
  BELOW_HIGH_15: 'ta_highlow20d_b15h',
  BELOW_HIGH_20: 'ta_highlow20d_b20h',
  BELOW_HIGH_30: 'ta_highlow20d_b30h',
  BELOW_HIGH_40: 'ta_highlow20d_b40h',
  BELOW_HIGH_50: 'ta_highlow20d_b50h',
  BELOW_HIGH_0_TO_3: 'ta_highlow20d_b0to3h',
  BELOW_HIGH_0_TO_5: 'ta_highlow20d_b0to5h',
  BELOW_HIGH_0_TO_10: 'ta_highlow20d_b0to10h',
  ABOVE_LOW_5: 'ta_highlow20d_a5h',
  ABOVE_LOW_10: 'ta_highlow20d_a10h',
  ABOVE_LOW_15: 'ta_highlow20d_a15h',
  ABOVE_LOW_20: 'ta_highlow20d_a20h',
  ABOVE_LOW_30: 'ta_highlow20d_a30h',
  ABOVE_LOW_40: 'ta_highlow20d_a40h',
  ABOVE_LOW_50: 'ta_highlow20d_a50h',
  ABOVE_LOW_0_TO_3: 'ta_highlow20d_a0to3h',
  ABOVE_LOW_0_TO_5: 'ta_highlow20d_a0to5h',
  ABOVE_LOW_0_TO_10: 'ta_highlow20d_a0to10h',
} as const;

/** Union of all known screener 20-day high/low filter values. */
export type ScreenerHighLow20DFilter = (typeof ScreenerHighLow20DFilter)[keyof typeof ScreenerHighLow20DFilter];

// ---------------------------------------------------------------------------
// Screener 50-day high/low filters
// ---------------------------------------------------------------------------

export const ScreenerHighLow50DFilter = {
  NEW_HIGH: 'ta_highlow50d_nh',
  NEW_LOW: 'ta_highlow50d_nl',
  BELOW_HIGH_5: 'ta_highlow50d_b5h',
  BELOW_HIGH_10: 'ta_highlow50d_b10h',
  BELOW_HIGH_15: 'ta_highlow50d_b15h',
  BELOW_HIGH_20: 'ta_highlow50d_b20h',
  BELOW_HIGH_30: 'ta_highlow50d_b30h',
  BELOW_HIGH_40: 'ta_highlow50d_b40h',
  BELOW_HIGH_50: 'ta_highlow50d_b50h',
  BELOW_HIGH_0_TO_3: 'ta_highlow50d_b0to3h',
  BELOW_HIGH_0_TO_5: 'ta_highlow50d_b0to5h',
  BELOW_HIGH_0_TO_10: 'ta_highlow50d_b0to10h',
  ABOVE_LOW_5: 'ta_highlow50d_a5h',
  ABOVE_LOW_10: 'ta_highlow50d_a10h',
  ABOVE_LOW_15: 'ta_highlow50d_a15h',
  ABOVE_LOW_20: 'ta_highlow50d_a20h',
  ABOVE_LOW_30: 'ta_highlow50d_a30h',
  ABOVE_LOW_40: 'ta_highlow50d_a40h',
  ABOVE_LOW_50: 'ta_highlow50d_a50h',
  ABOVE_LOW_0_TO_3: 'ta_highlow50d_a0to3h',
  ABOVE_LOW_0_TO_5: 'ta_highlow50d_a0to5h',
  ABOVE_LOW_0_TO_10: 'ta_highlow50d_a0to10h',
} as const;

/** Union of all known screener 50-day high/low filter values. */
export type ScreenerHighLow50DFilter = (typeof ScreenerHighLow50DFilter)[keyof typeof ScreenerHighLow50DFilter];

// ---------------------------------------------------------------------------
// Screener 52-week high/low filters
// ---------------------------------------------------------------------------

export const ScreenerHighLow52WFilter = {
  NEW_HIGH: 'ta_highlow52w_nh',
  NEW_LOW: 'ta_highlow52w_nl',
  BELOW_HIGH_5: 'ta_highlow52w_b5h',
  BELOW_HIGH_10: 'ta_highlow52w_b10h',
  BELOW_HIGH_15: 'ta_highlow52w_b15h',
  BELOW_HIGH_20: 'ta_highlow52w_b20h',
  BELOW_HIGH_30: 'ta_highlow52w_b30h',
  BELOW_HIGH_40: 'ta_highlow52w_b40h',
  BELOW_HIGH_50: 'ta_highlow52w_b50h',
  BELOW_HIGH_60: 'ta_highlow52w_b60h',
  BELOW_HIGH_70: 'ta_highlow52w_b70h',
  BELOW_HIGH_80: 'ta_highlow52w_b80h',
  BELOW_HIGH_90: 'ta_highlow52w_b90h',
  BELOW_HIGH_0_TO_3: 'ta_highlow52w_b0to3h',
  BELOW_HIGH_0_TO_5: 'ta_highlow52w_b0to5h',
  BELOW_HIGH_0_TO_10: 'ta_highlow52w_b0to10h',
  ABOVE_LOW_5: 'ta_highlow52w_a5h',
  ABOVE_LOW_10: 'ta_highlow52w_a10h',
  ABOVE_LOW_15: 'ta_highlow52w_a15h',
  ABOVE_LOW_20: 'ta_highlow52w_a20h',
  ABOVE_LOW_30: 'ta_highlow52w_a30h',
  ABOVE_LOW_40: 'ta_highlow52w_a40h',
  ABOVE_LOW_50: 'ta_highlow52w_a50h',
  ABOVE_LOW_60: 'ta_highlow52w_a60h',
  ABOVE_LOW_70: 'ta_highlow52w_a70h',
  ABOVE_LOW_80: 'ta_highlow52w_a80h',
  ABOVE_LOW_90: 'ta_highlow52w_a90h',
  ABOVE_LOW_100: 'ta_highlow52w_a100h',
  ABOVE_LOW_120: 'ta_highlow52w_a120h',
  ABOVE_LOW_150: 'ta_highlow52w_a150h',
  ABOVE_LOW_200: 'ta_highlow52w_a200h',
  ABOVE_LOW_300: 'ta_highlow52w_a300h',
  ABOVE_LOW_500: 'ta_highlow52w_a500h',
  ABOVE_LOW_0_TO_3: 'ta_highlow52w_a0to3h',
  ABOVE_LOW_0_TO_5: 'ta_highlow52w_a0to5h',
  ABOVE_LOW_0_TO_10: 'ta_highlow52w_a0to10h',
} as const;

/** Union of all known screener 52-week high/low filter values. */
export type ScreenerHighLow52WFilter = (typeof ScreenerHighLow52WFilter)[keyof typeof ScreenerHighLow52WFilter];

// ---------------------------------------------------------------------------
// Screener all-time high/low filters
// ---------------------------------------------------------------------------

export const ScreenerAllTimeHighLowFilter = {
  NEW_HIGH: 'ta_alltime_nh',
  NEW_LOW: 'ta_alltime_nl',
  BELOW_HIGH_5: 'ta_alltime_b5h',
  BELOW_HIGH_10: 'ta_alltime_b10h',
  BELOW_HIGH_15: 'ta_alltime_b15h',
  BELOW_HIGH_20: 'ta_alltime_b20h',
  BELOW_HIGH_30: 'ta_alltime_b30h',
  BELOW_HIGH_40: 'ta_alltime_b40h',
  BELOW_HIGH_50: 'ta_alltime_b50h',
  BELOW_HIGH_60: 'ta_alltime_b60h',
  BELOW_HIGH_70: 'ta_alltime_b70h',
  BELOW_HIGH_80: 'ta_alltime_b80h',
  BELOW_HIGH_90: 'ta_alltime_b90h',
  BELOW_HIGH_0_TO_3: 'ta_alltime_b0to3h',
  BELOW_HIGH_0_TO_5: 'ta_alltime_b0to5h',
  BELOW_HIGH_0_TO_10: 'ta_alltime_b0to10h',
  ABOVE_LOW_5: 'ta_alltime_a5h',
  ABOVE_LOW_10: 'ta_alltime_a10h',
  ABOVE_LOW_15: 'ta_alltime_a15h',
  ABOVE_LOW_20: 'ta_alltime_a20h',
  ABOVE_LOW_30: 'ta_alltime_a30h',
  ABOVE_LOW_40: 'ta_alltime_a40h',
  ABOVE_LOW_50: 'ta_alltime_a50h',
  ABOVE_LOW_60: 'ta_alltime_a60h',
  ABOVE_LOW_70: 'ta_alltime_a70h',
  ABOVE_LOW_80: 'ta_alltime_a80h',
  ABOVE_LOW_90: 'ta_alltime_a90h',
  ABOVE_LOW_100: 'ta_alltime_a100h',
  ABOVE_LOW_120: 'ta_alltime_a120h',
  ABOVE_LOW_150: 'ta_alltime_a150h',
  ABOVE_LOW_200: 'ta_alltime_a200h',
  ABOVE_LOW_300: 'ta_alltime_a300h',
  ABOVE_LOW_500: 'ta_alltime_a500h',
  ABOVE_LOW_0_TO_3: 'ta_alltime_a0to3h',
  ABOVE_LOW_0_TO_5: 'ta_alltime_a0to5h',
  ABOVE_LOW_0_TO_10: 'ta_alltime_a0to10h',
} as const;

/** Union of all known screener all-time high/low filter values. */
export type ScreenerAllTimeHighLowFilter = (typeof ScreenerAllTimeHighLowFilter)[keyof typeof ScreenerAllTimeHighLowFilter];

// ---------------------------------------------------------------------------
// Screener pattern filters
// ---------------------------------------------------------------------------

export const ScreenerPatternFilter = {
  HORIZONTAL_SR: 'ta_pattern_horizontal',
  HORIZONTAL_SR_STRONG: 'ta_pattern_horizontal2',
  TL_RESISTANCE: 'ta_pattern_tlresistance',
  TL_RESISTANCE_STRONG: 'ta_pattern_tlresistance2',
  TL_SUPPORT: 'ta_pattern_tlsupport',
  TL_SUPPORT_STRONG: 'ta_pattern_tlsupport2',
  WEDGE_UP: 'ta_pattern_wedgeup',
  WEDGE_UP_STRONG: 'ta_pattern_wedgeup2',
  WEDGE_DOWN: 'ta_pattern_wedgedown',
  WEDGE_DOWN_STRONG: 'ta_pattern_wedgedown2',
  TRIANGLE_ASCENDING: 'ta_pattern_wedgeresistance',
  TRIANGLE_ASCENDING_STRONG: 'ta_pattern_wedgeresistance2',
  TRIANGLE_DESCENDING: 'ta_pattern_wedgesupport',
  TRIANGLE_DESCENDING_STRONG: 'ta_pattern_wedgesupport2',
  WEDGE: 'ta_pattern_wedge',
  WEDGE_STRONG: 'ta_pattern_wedge2',
  CHANNEL_UP: 'ta_pattern_channelup',
  CHANNEL_UP_STRONG: 'ta_pattern_channelup2',
  CHANNEL_DOWN: 'ta_pattern_channeldown',
  CHANNEL_DOWN_STRONG: 'ta_pattern_channeldown2',
  CHANNEL: 'ta_pattern_channel',
  CHANNEL_STRONG: 'ta_pattern_channel2',
  DOUBLE_TOP: 'ta_pattern_doubletop',
  DOUBLE_BOTTOM: 'ta_pattern_doublebottom',
  MULTIPLE_TOP: 'ta_pattern_multipletop',
  MULTIPLE_BOTTOM: 'ta_pattern_multiplebottom',
  HEAD_AND_SHOULDERS: 'ta_pattern_headandshoulders',
  HEAD_AND_SHOULDERS_INVERSE: 'ta_pattern_headandshouldersinv',
} as const;

/** Union of all known screener pattern filter values. */
export type ScreenerPatternFilter = (typeof ScreenerPatternFilter)[keyof typeof ScreenerPatternFilter];

// ---------------------------------------------------------------------------
// Screener candlestick filters
// ---------------------------------------------------------------------------

export const ScreenerCandlestickFilter = {
  LONG_LOWER_SHADOW: 'ta_candlestick_lls',
  LONG_UPPER_SHADOW: 'ta_candlestick_lus',
  HAMMER: 'ta_candlestick_h',
  INVERTED_HAMMER: 'ta_candlestick_ih',
  SPINNING_TOP_WHITE: 'ta_candlestick_stw',
  SPINNING_TOP_BLACK: 'ta_candlestick_stb',
  DOJI: 'ta_candlestick_d',
  DRAGONFLY_DOJI: 'ta_candlestick_dd',
  GRAVESTONE_DOJI: 'ta_candlestick_gd',
  MARUBOZU_WHITE: 'ta_candlestick_mw',
  MARUBOZU_BLACK: 'ta_candlestick_mb',
} as const;

/** Union of all known screener candlestick filter values. */
export type ScreenerCandlestickFilter = (typeof ScreenerCandlestickFilter)[keyof typeof ScreenerCandlestickFilter];

// ---------------------------------------------------------------------------
// Screener beta filters
// ---------------------------------------------------------------------------

export const ScreenerBetaFilter = {
  UNDER_0: 'ta_beta_u0',
  UNDER_0_5: 'ta_beta_u0.5',
  UNDER_1: 'ta_beta_u1',
  UNDER_1_5: 'ta_beta_u1.5',
  UNDER_2: 'ta_beta_u2',
  OVER_0: 'ta_beta_o0',
  OVER_0_5: 'ta_beta_o0.5',
  OVER_1: 'ta_beta_o1',
  OVER_1_5: 'ta_beta_o1.5',
  OVER_2: 'ta_beta_o2',
  OVER_2_5: 'ta_beta_o2.5',
  OVER_3: 'ta_beta_o3',
  OVER_4: 'ta_beta_o4',
  RANGE_0_TO_0_5: 'ta_beta_0to0.5',
  RANGE_0_TO_1: 'ta_beta_0to1',
  RANGE_0_5_TO_1: 'ta_beta_0.5to1',
  RANGE_0_5_TO_1_5: 'ta_beta_0.5to1.5',
  RANGE_1_TO_1_5: 'ta_beta_1to1.5',
  RANGE_1_TO_2: 'ta_beta_1to2',
} as const;

/** Union of all known screener beta filter values. */
export type ScreenerBetaFilter = (typeof ScreenerBetaFilter)[keyof typeof ScreenerBetaFilter];

// ---------------------------------------------------------------------------
// Screener average true range filters
// ---------------------------------------------------------------------------

export const ScreenerAverageTrueRangeFilter = {
  OVER_0_25: 'ta_averagetruerange_o0.25',
  OVER_0_5: 'ta_averagetruerange_o0.5',
  OVER_0_75: 'ta_averagetruerange_o0.75',
  OVER_1: 'ta_averagetruerange_o1',
  OVER_1_5: 'ta_averagetruerange_o1.5',
  OVER_2: 'ta_averagetruerange_o2',
  OVER_2_5: 'ta_averagetruerange_o2.5',
  OVER_3: 'ta_averagetruerange_o3',
  OVER_3_5: 'ta_averagetruerange_o3.5',
  OVER_4: 'ta_averagetruerange_o4',
  OVER_4_5: 'ta_averagetruerange_o4.5',
  OVER_5: 'ta_averagetruerange_o5',
  UNDER_0_25: 'ta_averagetruerange_u0.25',
  UNDER_0_5: 'ta_averagetruerange_u0.5',
  UNDER_0_75: 'ta_averagetruerange_u0.75',
  UNDER_1: 'ta_averagetruerange_u1',
  UNDER_1_5: 'ta_averagetruerange_u1.5',
  UNDER_2: 'ta_averagetruerange_u2',
  UNDER_2_5: 'ta_averagetruerange_u2.5',
  UNDER_3: 'ta_averagetruerange_u3',
  UNDER_3_5: 'ta_averagetruerange_u3.5',
  UNDER_4: 'ta_averagetruerange_u4',
  UNDER_4_5: 'ta_averagetruerange_u4.5',
  UNDER_5: 'ta_averagetruerange_u5',
} as const;

/** Union of all known screener average true range filter values. */
export type ScreenerAverageTrueRangeFilter = (typeof ScreenerAverageTrueRangeFilter)[keyof typeof ScreenerAverageTrueRangeFilter];

// ---------------------------------------------------------------------------
// Screener after-hours close filters
// ---------------------------------------------------------------------------

/** After-hours close price filters. */
export const ScreenerAfterHoursCloseFilter = {
  UNDER_1: 'ah_close_u1',
  UNDER_2: 'ah_close_u2',
  UNDER_3: 'ah_close_u3',
  UNDER_4: 'ah_close_u4',
  UNDER_5: 'ah_close_u5',
  UNDER_7: 'ah_close_u7',
  UNDER_10: 'ah_close_u10',
  UNDER_15: 'ah_close_u15',
  UNDER_20: 'ah_close_u20',
  UNDER_30: 'ah_close_u30',
  UNDER_40: 'ah_close_u40',
  UNDER_50: 'ah_close_u50',
  OVER_1: 'ah_close_o1',
  OVER_2: 'ah_close_o2',
  OVER_3: 'ah_close_o3',
  OVER_4: 'ah_close_o4',
  OVER_5: 'ah_close_o5',
  OVER_7: 'ah_close_o7',
  OVER_10: 'ah_close_o10',
  OVER_15: 'ah_close_o15',
  OVER_20: 'ah_close_o20',
  OVER_30: 'ah_close_o30',
  OVER_40: 'ah_close_o40',
  OVER_50: 'ah_close_o50',
  OVER_60: 'ah_close_o60',
  OVER_70: 'ah_close_o70',
  OVER_80: 'ah_close_o80',
  OVER_90: 'ah_close_o90',
  OVER_100: 'ah_close_o100',
  RANGE_1_TO_5: 'ah_close_1to5',
  RANGE_1_TO_10: 'ah_close_1to10',
  RANGE_1_TO_20: 'ah_close_1to20',
  RANGE_5_TO_10: 'ah_close_5to10',
  RANGE_5_TO_20: 'ah_close_5to20',
  RANGE_5_TO_50: 'ah_close_5to50',
  RANGE_10_TO_20: 'ah_close_10to20',
  RANGE_10_TO_50: 'ah_close_10to50',
  RANGE_20_TO_50: 'ah_close_20to50',
  RANGE_50_TO_100: 'ah_close_50to100',
} as const;

/** Union of all known screener after-hours close filter values. */
export type ScreenerAfterHoursCloseFilter = (typeof ScreenerAfterHoursCloseFilter)[keyof typeof ScreenerAfterHoursCloseFilter];

// ---------------------------------------------------------------------------
// Screener after-hours change filters
// ---------------------------------------------------------------------------

/** After-hours % change filters. */
export const ScreenerAfterHoursChangeFilter = {
  UP: 'ah_change_u',
  UP_1: 'ah_change_u1',
  UP_2: 'ah_change_u2',
  UP_3: 'ah_change_u3',
  UP_4: 'ah_change_u4',
  UP_5: 'ah_change_u5',
  UP_6: 'ah_change_u6',
  UP_7: 'ah_change_u7',
  UP_8: 'ah_change_u8',
  UP_9: 'ah_change_u9',
  UP_10: 'ah_change_u10',
  UP_15: 'ah_change_u15',
  UP_20: 'ah_change_u20',
  DOWN: 'ah_change_d',
  DOWN_1: 'ah_change_d1',
  DOWN_2: 'ah_change_d2',
  DOWN_3: 'ah_change_d3',
  DOWN_4: 'ah_change_d4',
  DOWN_5: 'ah_change_d5',
  DOWN_6: 'ah_change_d6',
  DOWN_7: 'ah_change_d7',
  DOWN_8: 'ah_change_d8',
  DOWN_9: 'ah_change_d9',
  DOWN_10: 'ah_change_d10',
  DOWN_15: 'ah_change_d15',
  DOWN_20: 'ah_change_d20',
} as const;

/** Union of all known screener after-hours change filter values. */
export type ScreenerAfterHoursChangeFilter = (typeof ScreenerAfterHoursChangeFilter)[keyof typeof ScreenerAfterHoursChangeFilter];
