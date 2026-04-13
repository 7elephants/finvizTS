
// ---------------------------------------------------------------------------
// Screener P/E filters  (data-filter="fa_pe")
// ---------------------------------------------------------------------------

export const ScreenerPEFilter = {
  LOW: 'fa_pe_low',
  PROFITABLE: 'fa_pe_profitable',
  HIGH: 'fa_pe_high',
  UNDER_5: 'fa_pe_u5',
  UNDER_10: 'fa_pe_u10',
  UNDER_15: 'fa_pe_u15',
  UNDER_20: 'fa_pe_u20',
  UNDER_25: 'fa_pe_u25',
  UNDER_30: 'fa_pe_u30',
  UNDER_35: 'fa_pe_u35',
  UNDER_40: 'fa_pe_u40',
  UNDER_45: 'fa_pe_u45',
  UNDER_50: 'fa_pe_u50',
  OVER_5: 'fa_pe_o5',
  OVER_10: 'fa_pe_o10',
  OVER_15: 'fa_pe_o15',
  OVER_20: 'fa_pe_o20',
  OVER_25: 'fa_pe_o25',
  OVER_30: 'fa_pe_o30',
  OVER_35: 'fa_pe_o35',
  OVER_40: 'fa_pe_o40',
  OVER_45: 'fa_pe_o45',
  OVER_50: 'fa_pe_o50',
} as const;

/** Union of all known screener P/E filter values. */
export type ScreenerPEFilter = (typeof ScreenerPEFilter)[keyof typeof ScreenerPEFilter];

// ---------------------------------------------------------------------------
// Screener Forward P/E filters  (data-filter="fa_fpe")
// ---------------------------------------------------------------------------

export const ScreenerForwardPEFilter = {
  LOW: 'fa_fpe_low',
  PROFITABLE: 'fa_fpe_profitable',
  HIGH: 'fa_fpe_high',
  UNDER_5: 'fa_fpe_u5',
  UNDER_10: 'fa_fpe_u10',
  UNDER_15: 'fa_fpe_u15',
  UNDER_20: 'fa_fpe_u20',
  UNDER_25: 'fa_fpe_u25',
  UNDER_30: 'fa_fpe_u30',
  UNDER_35: 'fa_fpe_u35',
  UNDER_40: 'fa_fpe_u40',
  UNDER_45: 'fa_fpe_u45',
  UNDER_50: 'fa_fpe_u50',
  OVER_5: 'fa_fpe_o5',
  OVER_10: 'fa_fpe_o10',
  OVER_15: 'fa_fpe_o15',
  OVER_20: 'fa_fpe_o20',
  OVER_25: 'fa_fpe_o25',
  OVER_30: 'fa_fpe_o30',
  OVER_35: 'fa_fpe_o35',
  OVER_40: 'fa_fpe_o40',
  OVER_45: 'fa_fpe_o45',
  OVER_50: 'fa_fpe_o50',
} as const;

/** Union of all known screener Forward P/E filter values. */
export type ScreenerForwardPEFilter = (typeof ScreenerForwardPEFilter)[keyof typeof ScreenerForwardPEFilter];

// ---------------------------------------------------------------------------
// Screener PEG filters  (data-filter="fa_peg")
// ---------------------------------------------------------------------------

export const ScreenerPEGFilter = {
  LOW: 'fa_peg_low',
  HIGH: 'fa_peg_high',
  UNDER_1: 'fa_peg_u1',
  UNDER_2: 'fa_peg_u2',
  UNDER_3: 'fa_peg_u3',
  OVER_1: 'fa_peg_o1',
  OVER_2: 'fa_peg_o2',
  OVER_3: 'fa_peg_o3',
} as const;

/** Union of all known screener PEG filter values. */
export type ScreenerPEGFilter = (typeof ScreenerPEGFilter)[keyof typeof ScreenerPEGFilter];

// ---------------------------------------------------------------------------
// Screener P/S filters  (data-filter="fa_ps")
// ---------------------------------------------------------------------------

export const ScreenerPSFilter = {
  LOW: 'fa_ps_low',
  HIGH: 'fa_ps_high',
  UNDER_1: 'fa_ps_u1',
  UNDER_2: 'fa_ps_u2',
  UNDER_3: 'fa_ps_u3',
  UNDER_4: 'fa_ps_u4',
  UNDER_5: 'fa_ps_u5',
  UNDER_6: 'fa_ps_u6',
  UNDER_7: 'fa_ps_u7',
  UNDER_8: 'fa_ps_u8',
  UNDER_9: 'fa_ps_u9',
  UNDER_10: 'fa_ps_u10',
  OVER_1: 'fa_ps_o1',
  OVER_2: 'fa_ps_o2',
  OVER_3: 'fa_ps_o3',
  OVER_4: 'fa_ps_o4',
  OVER_5: 'fa_ps_o5',
  OVER_6: 'fa_ps_o6',
  OVER_7: 'fa_ps_o7',
  OVER_8: 'fa_ps_o8',
  OVER_9: 'fa_ps_o9',
  OVER_10: 'fa_ps_o10',
} as const;

/** Union of all known screener P/S filter values. */
export type ScreenerPSFilter = (typeof ScreenerPSFilter)[keyof typeof ScreenerPSFilter];

// ---------------------------------------------------------------------------
// Screener P/B filters  (data-filter="fa_pb")
// ---------------------------------------------------------------------------

export const ScreenerPBFilter = {
  LOW: 'fa_pb_low',
  HIGH: 'fa_pb_high',
  UNDER_1: 'fa_pb_u1',
  UNDER_2: 'fa_pb_u2',
  UNDER_3: 'fa_pb_u3',
  UNDER_4: 'fa_pb_u4',
  UNDER_5: 'fa_pb_u5',
  UNDER_6: 'fa_pb_u6',
  UNDER_7: 'fa_pb_u7',
  UNDER_8: 'fa_pb_u8',
  UNDER_9: 'fa_pb_u9',
  UNDER_10: 'fa_pb_u10',
  OVER_1: 'fa_pb_o1',
  OVER_2: 'fa_pb_o2',
  OVER_3: 'fa_pb_o3',
  OVER_4: 'fa_pb_o4',
  OVER_5: 'fa_pb_o5',
  OVER_6: 'fa_pb_o6',
  OVER_7: 'fa_pb_o7',
  OVER_8: 'fa_pb_o8',
  OVER_9: 'fa_pb_o9',
  OVER_10: 'fa_pb_o10',
} as const;

/** Union of all known screener P/B filter values. */
export type ScreenerPBFilter = (typeof ScreenerPBFilter)[keyof typeof ScreenerPBFilter];

// ---------------------------------------------------------------------------
// Screener Price/Cash filters  (data-filter="fa_pc")
// ---------------------------------------------------------------------------

export const ScreenerPriceCashFilter = {
  LOW: 'fa_pc_low',
  HIGH: 'fa_pc_high',
  UNDER_1: 'fa_pc_u1',
  UNDER_2: 'fa_pc_u2',
  UNDER_3: 'fa_pc_u3',
  UNDER_4: 'fa_pc_u4',
  UNDER_5: 'fa_pc_u5',
  UNDER_6: 'fa_pc_u6',
  UNDER_7: 'fa_pc_u7',
  UNDER_8: 'fa_pc_u8',
  UNDER_9: 'fa_pc_u9',
  UNDER_10: 'fa_pc_u10',
  OVER_1: 'fa_pc_o1',
  OVER_2: 'fa_pc_o2',
  OVER_3: 'fa_pc_o3',
  OVER_4: 'fa_pc_o4',
  OVER_5: 'fa_pc_o5',
  OVER_6: 'fa_pc_o6',
  OVER_7: 'fa_pc_o7',
  OVER_8: 'fa_pc_o8',
  OVER_9: 'fa_pc_o9',
  OVER_10: 'fa_pc_o10',
  OVER_20: 'fa_pc_o20',
  OVER_30: 'fa_pc_o30',
  OVER_40: 'fa_pc_o40',
  OVER_50: 'fa_pc_o50',
} as const;

/** Union of all known screener Price/Cash filter values. */
export type ScreenerPriceCashFilter = (typeof ScreenerPriceCashFilter)[keyof typeof ScreenerPriceCashFilter];

// ---------------------------------------------------------------------------
// Screener Price/Free Cash Flow filters  (data-filter="fa_pfcf")
// ---------------------------------------------------------------------------

export const ScreenerPriceFCFFilter = {
  LOW: 'fa_pfcf_low',
  HIGH: 'fa_pfcf_high',
  UNDER_5: 'fa_pfcf_u5',
  UNDER_10: 'fa_pfcf_u10',
  UNDER_15: 'fa_pfcf_u15',
  UNDER_20: 'fa_pfcf_u20',
  UNDER_25: 'fa_pfcf_u25',
  UNDER_30: 'fa_pfcf_u30',
  UNDER_35: 'fa_pfcf_u35',
  UNDER_40: 'fa_pfcf_u40',
  UNDER_45: 'fa_pfcf_u45',
  UNDER_50: 'fa_pfcf_u50',
  UNDER_60: 'fa_pfcf_u60',
  UNDER_70: 'fa_pfcf_u70',
  UNDER_80: 'fa_pfcf_u80',
  UNDER_90: 'fa_pfcf_u90',
  UNDER_100: 'fa_pfcf_u100',
  OVER_5: 'fa_pfcf_o5',
  OVER_10: 'fa_pfcf_o10',
  OVER_15: 'fa_pfcf_o15',
  OVER_20: 'fa_pfcf_o20',
  OVER_25: 'fa_pfcf_o25',
  OVER_30: 'fa_pfcf_o30',
  OVER_35: 'fa_pfcf_o35',
  OVER_40: 'fa_pfcf_o40',
  OVER_45: 'fa_pfcf_o45',
  OVER_50: 'fa_pfcf_o50',
  OVER_60: 'fa_pfcf_o60',
  OVER_70: 'fa_pfcf_o70',
  OVER_80: 'fa_pfcf_o80',
  OVER_90: 'fa_pfcf_o90',
  OVER_100: 'fa_pfcf_o100',
} as const;

/** Union of all known screener Price/FCF filter values. */
export type ScreenerPriceFCFFilter = (typeof ScreenerPriceFCFFilter)[keyof typeof ScreenerPriceFCFFilter];

// ---------------------------------------------------------------------------
// Screener EV/EBITDA filters  (data-filter="fa_evebitda")
// ---------------------------------------------------------------------------

export const ScreenerEVEBITDAFilter = {
  NEGATIVE: 'fa_evebitda_negative',
  LOW: 'fa_evebitda_low',
  PROFITABLE: 'fa_evebitda_profitable',
  HIGH: 'fa_evebitda_high',
  UNDER_5: 'fa_evebitda_u5',
  UNDER_10: 'fa_evebitda_u10',
  UNDER_15: 'fa_evebitda_u15',
  UNDER_20: 'fa_evebitda_u20',
  UNDER_25: 'fa_evebitda_u25',
  UNDER_30: 'fa_evebitda_u30',
  UNDER_35: 'fa_evebitda_u35',
  UNDER_40: 'fa_evebitda_u40',
  UNDER_45: 'fa_evebitda_u45',
  UNDER_50: 'fa_evebitda_u50',
  OVER_5: 'fa_evebitda_o5',
  OVER_10: 'fa_evebitda_o10',
  OVER_15: 'fa_evebitda_o15',
  OVER_20: 'fa_evebitda_o20',
  OVER_25: 'fa_evebitda_o25',
  OVER_30: 'fa_evebitda_o30',
  OVER_35: 'fa_evebitda_o35',
  OVER_40: 'fa_evebitda_o40',
  OVER_45: 'fa_evebitda_o45',
  OVER_50: 'fa_evebitda_o50',
} as const;

/** Union of all known screener EV/EBITDA filter values. */
export type ScreenerEVEBITDAFilter = (typeof ScreenerEVEBITDAFilter)[keyof typeof ScreenerEVEBITDAFilter];

// ---------------------------------------------------------------------------
// Screener EV/Sales filters  (data-filter="fa_evsales")
// ---------------------------------------------------------------------------

export const ScreenerEVSalesFilter = {
  NEGATIVE: 'fa_evsales_negative',
  LOW: 'fa_evsales_low',
  POSITIVE: 'fa_evsales_positive',
  HIGH: 'fa_evsales_high',
  UNDER_1: 'fa_evsales_u1',
  UNDER_2: 'fa_evsales_u2',
  UNDER_3: 'fa_evsales_u3',
  UNDER_4: 'fa_evsales_u4',
  UNDER_5: 'fa_evsales_u5',
  UNDER_6: 'fa_evsales_u6',
  UNDER_7: 'fa_evsales_u7',
  UNDER_8: 'fa_evsales_u8',
  UNDER_9: 'fa_evsales_u9',
  UNDER_10: 'fa_evsales_u10',
  OVER_1: 'fa_evsales_o1',
  OVER_2: 'fa_evsales_o2',
  OVER_3: 'fa_evsales_o3',
  OVER_4: 'fa_evsales_o4',
  OVER_5: 'fa_evsales_o5',
  OVER_6: 'fa_evsales_o6',
  OVER_7: 'fa_evsales_o7',
  OVER_8: 'fa_evsales_o8',
  OVER_9: 'fa_evsales_o9',
  OVER_10: 'fa_evsales_o10',
} as const;

/** Union of all known screener EV/Sales filter values. */
export type ScreenerEVSalesFilter = (typeof ScreenerEVSalesFilter)[keyof typeof ScreenerEVSalesFilter];

// ---------------------------------------------------------------------------
// Screener Dividend Growth filters  (data-filter="fa_divgrowth")
// ---------------------------------------------------------------------------

export const ScreenerDividendGrowthFilter = {
  ONE_YEAR_POSITIVE: 'fa_divgrowth_1ypos',
  ONE_YEAR_OVER_5: 'fa_divgrowth_1yo5',
  ONE_YEAR_OVER_10: 'fa_divgrowth_1yo10',
  ONE_YEAR_OVER_15: 'fa_divgrowth_1yo15',
  ONE_YEAR_OVER_20: 'fa_divgrowth_1yo20',
  ONE_YEAR_OVER_25: 'fa_divgrowth_1yo25',
  ONE_YEAR_OVER_30: 'fa_divgrowth_1yo30',
  THREE_YEAR_POSITIVE: 'fa_divgrowth_3ypos',
  THREE_YEAR_OVER_5: 'fa_divgrowth_3yo5',
  THREE_YEAR_OVER_10: 'fa_divgrowth_3yo10',
  THREE_YEAR_OVER_15: 'fa_divgrowth_3yo15',
  THREE_YEAR_OVER_20: 'fa_divgrowth_3yo20',
  THREE_YEAR_OVER_25: 'fa_divgrowth_3yo25',
  THREE_YEAR_OVER_30: 'fa_divgrowth_3yo30',
  FIVE_YEAR_POSITIVE: 'fa_divgrowth_5ypos',
  FIVE_YEAR_OVER_5: 'fa_divgrowth_5yo5',
  FIVE_YEAR_OVER_10: 'fa_divgrowth_5yo10',
  FIVE_YEAR_OVER_15: 'fa_divgrowth_5yo15',
  FIVE_YEAR_OVER_20: 'fa_divgrowth_5yo20',
  FIVE_YEAR_OVER_25: 'fa_divgrowth_5yo25',
  FIVE_YEAR_OVER_30: 'fa_divgrowth_5yo30',
  CONSECUTIVE_1_PLUS: 'fa_divgrowth_cy1',
  CONSECUTIVE_2_PLUS: 'fa_divgrowth_cy2',
  CONSECUTIVE_3_PLUS: 'fa_divgrowth_cy3',
  CONSECUTIVE_4_PLUS: 'fa_divgrowth_cy4',
  CONSECUTIVE_5_PLUS: 'fa_divgrowth_cy5',
  CONSECUTIVE_6_PLUS: 'fa_divgrowth_cy6',
  CONSECUTIVE_7_PLUS: 'fa_divgrowth_cy7',
  CONSECUTIVE_8_PLUS: 'fa_divgrowth_cy8',
  CONSECUTIVE_9_PLUS: 'fa_divgrowth_cy9',
} as const;

/** Union of all known screener Dividend Growth filter values. */
export type ScreenerDividendGrowthFilter = (typeof ScreenerDividendGrowthFilter)[keyof typeof ScreenerDividendGrowthFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth This Year filters  (data-filter="fa_epsyoy")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthThisYearFilter = {
  NEGATIVE: 'fa_epsyoy_neg',
  POSITIVE: 'fa_epsyoy_pos',
  POSITIVE_LOW: 'fa_epsyoy_poslow',
  HIGH: 'fa_epsyoy_high',
  UNDER_5: 'fa_epsyoy_u5',
  UNDER_10: 'fa_epsyoy_u10',
  UNDER_15: 'fa_epsyoy_u15',
  UNDER_20: 'fa_epsyoy_u20',
  UNDER_25: 'fa_epsyoy_u25',
  UNDER_30: 'fa_epsyoy_u30',
  OVER_5: 'fa_epsyoy_o5',
  OVER_10: 'fa_epsyoy_o10',
  OVER_15: 'fa_epsyoy_o15',
  OVER_20: 'fa_epsyoy_o20',
  OVER_25: 'fa_epsyoy_o25',
  OVER_30: 'fa_epsyoy_o30',
} as const;

/** Union of all known screener EPS Growth This Year filter values. */
export type ScreenerEPSGrowthThisYearFilter = (typeof ScreenerEPSGrowthThisYearFilter)[keyof typeof ScreenerEPSGrowthThisYearFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth Next Year filters  (data-filter="fa_epsyoy1")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthNextYearFilter = {
  NEGATIVE: 'fa_epsyoy1_neg',
  POSITIVE: 'fa_epsyoy1_pos',
  POSITIVE_LOW: 'fa_epsyoy1_poslow',
  HIGH: 'fa_epsyoy1_high',
  UNDER_5: 'fa_epsyoy1_u5',
  UNDER_10: 'fa_epsyoy1_u10',
  UNDER_15: 'fa_epsyoy1_u15',
  UNDER_20: 'fa_epsyoy1_u20',
  UNDER_25: 'fa_epsyoy1_u25',
  UNDER_30: 'fa_epsyoy1_u30',
  OVER_5: 'fa_epsyoy1_o5',
  OVER_10: 'fa_epsyoy1_o10',
  OVER_15: 'fa_epsyoy1_o15',
  OVER_20: 'fa_epsyoy1_o20',
  OVER_25: 'fa_epsyoy1_o25',
  OVER_30: 'fa_epsyoy1_o30',
} as const;

/** Union of all known screener EPS Growth Next Year filter values. */
export type ScreenerEPSGrowthNextYearFilter = (typeof ScreenerEPSGrowthNextYearFilter)[keyof typeof ScreenerEPSGrowthNextYearFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth Qtr Over Qtr filters  (data-filter="fa_epsqoq")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthQoQFilter = {
  NEGATIVE: 'fa_epsqoq_neg',
  POSITIVE: 'fa_epsqoq_pos',
  POSITIVE_LOW: 'fa_epsqoq_poslow',
  HIGH: 'fa_epsqoq_high',
  UNDER_5: 'fa_epsqoq_u5',
  UNDER_10: 'fa_epsqoq_u10',
  UNDER_15: 'fa_epsqoq_u15',
  UNDER_20: 'fa_epsqoq_u20',
  UNDER_25: 'fa_epsqoq_u25',
  UNDER_30: 'fa_epsqoq_u30',
  OVER_5: 'fa_epsqoq_o5',
  OVER_10: 'fa_epsqoq_o10',
  OVER_15: 'fa_epsqoq_o15',
  OVER_20: 'fa_epsqoq_o20',
  OVER_25: 'fa_epsqoq_o25',
  OVER_30: 'fa_epsqoq_o30',
} as const;

/** Union of all known screener EPS Growth QoQ filter values. */
export type ScreenerEPSGrowthQoQFilter = (typeof ScreenerEPSGrowthQoQFilter)[keyof typeof ScreenerEPSGrowthQoQFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth TTM filters  (data-filter="fa_epsyoyttm")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthTTMFilter = {
  NEGATIVE: 'fa_epsyoyttm_neg',
  POSITIVE: 'fa_epsyoyttm_pos',
  POSITIVE_LOW: 'fa_epsyoyttm_poslow',
  HIGH: 'fa_epsyoyttm_high',
  UNDER_5: 'fa_epsyoyttm_u5',
  UNDER_10: 'fa_epsyoyttm_u10',
  UNDER_15: 'fa_epsyoyttm_u15',
  UNDER_20: 'fa_epsyoyttm_u20',
  UNDER_25: 'fa_epsyoyttm_u25',
  UNDER_30: 'fa_epsyoyttm_u30',
  OVER_5: 'fa_epsyoyttm_o5',
  OVER_10: 'fa_epsyoyttm_o10',
  OVER_15: 'fa_epsyoyttm_o15',
  OVER_20: 'fa_epsyoyttm_o20',
  OVER_25: 'fa_epsyoyttm_o25',
  OVER_30: 'fa_epsyoyttm_o30',
} as const;

/** Union of all known screener EPS Growth TTM filter values. */
export type ScreenerEPSGrowthTTMFilter = (typeof ScreenerEPSGrowthTTMFilter)[keyof typeof ScreenerEPSGrowthTTMFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth Past 3 Years filters  (data-filter="fa_eps3years")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthPast3YFilter = {
  NEGATIVE: 'fa_eps3years_neg',
  POSITIVE: 'fa_eps3years_pos',
  POSITIVE_LOW: 'fa_eps3years_poslow',
  HIGH: 'fa_eps3years_high',
  UNDER_5: 'fa_eps3years_u5',
  UNDER_10: 'fa_eps3years_u10',
  UNDER_15: 'fa_eps3years_u15',
  UNDER_20: 'fa_eps3years_u20',
  UNDER_25: 'fa_eps3years_u25',
  UNDER_30: 'fa_eps3years_u30',
  OVER_5: 'fa_eps3years_o5',
  OVER_10: 'fa_eps3years_o10',
  OVER_15: 'fa_eps3years_o15',
  OVER_20: 'fa_eps3years_o20',
  OVER_25: 'fa_eps3years_o25',
  OVER_30: 'fa_eps3years_o30',
} as const;

/** Union of all known screener EPS Growth Past 3 Years filter values. */
export type ScreenerEPSGrowthPast3YFilter = (typeof ScreenerEPSGrowthPast3YFilter)[keyof typeof ScreenerEPSGrowthPast3YFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth Past 5 Years filters  (data-filter="fa_eps5years")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthPast5YFilter = {
  NEGATIVE: 'fa_eps5years_neg',
  POSITIVE: 'fa_eps5years_pos',
  POSITIVE_LOW: 'fa_eps5years_poslow',
  HIGH: 'fa_eps5years_high',
  UNDER_5: 'fa_eps5years_u5',
  UNDER_10: 'fa_eps5years_u10',
  UNDER_15: 'fa_eps5years_u15',
  UNDER_20: 'fa_eps5years_u20',
  UNDER_25: 'fa_eps5years_u25',
  UNDER_30: 'fa_eps5years_u30',
  OVER_5: 'fa_eps5years_o5',
  OVER_10: 'fa_eps5years_o10',
  OVER_15: 'fa_eps5years_o15',
  OVER_20: 'fa_eps5years_o20',
  OVER_25: 'fa_eps5years_o25',
  OVER_30: 'fa_eps5years_o30',
} as const;

/** Union of all known screener EPS Growth Past 5 Years filter values. */
export type ScreenerEPSGrowthPast5YFilter = (typeof ScreenerEPSGrowthPast5YFilter)[keyof typeof ScreenerEPSGrowthPast5YFilter];

// ---------------------------------------------------------------------------
// Screener EPS Growth Next 5 Years filters  (data-filter="fa_estltgrowth")
// ---------------------------------------------------------------------------

export const ScreenerEPSGrowthNext5YFilter = {
  NEGATIVE: 'fa_estltgrowth_neg',
  POSITIVE: 'fa_estltgrowth_pos',
  POSITIVE_LOW: 'fa_estltgrowth_poslow',
  HIGH: 'fa_estltgrowth_high',
  UNDER_5: 'fa_estltgrowth_u5',
  UNDER_10: 'fa_estltgrowth_u10',
  UNDER_15: 'fa_estltgrowth_u15',
  UNDER_20: 'fa_estltgrowth_u20',
  UNDER_25: 'fa_estltgrowth_u25',
  UNDER_30: 'fa_estltgrowth_u30',
  OVER_5: 'fa_estltgrowth_o5',
  OVER_10: 'fa_estltgrowth_o10',
  OVER_15: 'fa_estltgrowth_o15',
  OVER_20: 'fa_estltgrowth_o20',
  OVER_25: 'fa_estltgrowth_o25',
  OVER_30: 'fa_estltgrowth_o30',
} as const;

/** Union of all known screener EPS Growth Next 5 Years filter values. */
export type ScreenerEPSGrowthNext5YFilter = (typeof ScreenerEPSGrowthNext5YFilter)[keyof typeof ScreenerEPSGrowthNext5YFilter];

// ---------------------------------------------------------------------------
// Screener Sales Growth Qtr Over Qtr filters  (data-filter="fa_salesqoq")
// ---------------------------------------------------------------------------

export const ScreenerSalesGrowthQoQFilter = {
  NEGATIVE: 'fa_salesqoq_neg',
  POSITIVE: 'fa_salesqoq_pos',
  POSITIVE_LOW: 'fa_salesqoq_poslow',
  HIGH: 'fa_salesqoq_high',
  UNDER_5: 'fa_salesqoq_u5',
  UNDER_10: 'fa_salesqoq_u10',
  UNDER_15: 'fa_salesqoq_u15',
  UNDER_20: 'fa_salesqoq_u20',
  UNDER_25: 'fa_salesqoq_u25',
  UNDER_30: 'fa_salesqoq_u30',
  OVER_5: 'fa_salesqoq_o5',
  OVER_10: 'fa_salesqoq_o10',
  OVER_15: 'fa_salesqoq_o15',
  OVER_20: 'fa_salesqoq_o20',
  OVER_25: 'fa_salesqoq_o25',
  OVER_30: 'fa_salesqoq_o30',
} as const;

/** Union of all known screener Sales Growth QoQ filter values. */
export type ScreenerSalesGrowthQoQFilter = (typeof ScreenerSalesGrowthQoQFilter)[keyof typeof ScreenerSalesGrowthQoQFilter];

// ---------------------------------------------------------------------------
// Screener Sales Growth TTM filters  (data-filter="fa_salesyoyttm")
// ---------------------------------------------------------------------------

export const ScreenerSalesGrowthTTMFilter = {
  NEGATIVE: 'fa_salesyoyttm_neg',
  POSITIVE: 'fa_salesyoyttm_pos',
  POSITIVE_LOW: 'fa_salesyoyttm_poslow',
  HIGH: 'fa_salesyoyttm_high',
  UNDER_5: 'fa_salesyoyttm_u5',
  UNDER_10: 'fa_salesyoyttm_u10',
  UNDER_15: 'fa_salesyoyttm_u15',
  UNDER_20: 'fa_salesyoyttm_u20',
  UNDER_25: 'fa_salesyoyttm_u25',
  UNDER_30: 'fa_salesyoyttm_u30',
  OVER_5: 'fa_salesyoyttm_o5',
  OVER_10: 'fa_salesyoyttm_o10',
  OVER_15: 'fa_salesyoyttm_o15',
  OVER_20: 'fa_salesyoyttm_o20',
  OVER_25: 'fa_salesyoyttm_o25',
  OVER_30: 'fa_salesyoyttm_o30',
} as const;

/** Union of all known screener Sales Growth TTM filter values. */
export type ScreenerSalesGrowthTTMFilter = (typeof ScreenerSalesGrowthTTMFilter)[keyof typeof ScreenerSalesGrowthTTMFilter];

// ---------------------------------------------------------------------------
// Screener Sales Growth Past 3 Years filters  (data-filter="fa_sales3years")
// ---------------------------------------------------------------------------

export const ScreenerSalesGrowthPast3YFilter = {
  NEGATIVE: 'fa_sales3years_neg',
  POSITIVE: 'fa_sales3years_pos',
  POSITIVE_LOW: 'fa_sales3years_poslow',
  HIGH: 'fa_sales3years_high',
  UNDER_5: 'fa_sales3years_u5',
  UNDER_10: 'fa_sales3years_u10',
  UNDER_15: 'fa_sales3years_u15',
  UNDER_20: 'fa_sales3years_u20',
  UNDER_25: 'fa_sales3years_u25',
  UNDER_30: 'fa_sales3years_u30',
  OVER_5: 'fa_sales3years_o5',
  OVER_10: 'fa_sales3years_o10',
  OVER_15: 'fa_sales3years_o15',
  OVER_20: 'fa_sales3years_o20',
  OVER_25: 'fa_sales3years_o25',
  OVER_30: 'fa_sales3years_o30',
} as const;

/** Union of all known screener Sales Growth Past 3 Years filter values. */
export type ScreenerSalesGrowthPast3YFilter = (typeof ScreenerSalesGrowthPast3YFilter)[keyof typeof ScreenerSalesGrowthPast3YFilter];

// ---------------------------------------------------------------------------
// Screener Sales Growth Past 5 Years filters  (data-filter="fa_sales5years")
// ---------------------------------------------------------------------------

export const ScreenerSalesGrowthPast5YFilter = {
  NEGATIVE: 'fa_sales5years_neg',
  POSITIVE: 'fa_sales5years_pos',
  POSITIVE_LOW: 'fa_sales5years_poslow',
  HIGH: 'fa_sales5years_high',
  UNDER_5: 'fa_sales5years_u5',
  UNDER_10: 'fa_sales5years_u10',
  UNDER_15: 'fa_sales5years_u15',
  UNDER_20: 'fa_sales5years_u20',
  UNDER_25: 'fa_sales5years_u25',
  UNDER_30: 'fa_sales5years_u30',
  OVER_5: 'fa_sales5years_o5',
  OVER_10: 'fa_sales5years_o10',
  OVER_15: 'fa_sales5years_o15',
  OVER_20: 'fa_sales5years_o20',
  OVER_25: 'fa_sales5years_o25',
  OVER_30: 'fa_sales5years_o30',
} as const;

/** Union of all known screener Sales Growth Past 5 Years filter values. */
export type ScreenerSalesGrowthPast5YFilter = (typeof ScreenerSalesGrowthPast5YFilter)[keyof typeof ScreenerSalesGrowthPast5YFilter];

// ---------------------------------------------------------------------------
// Screener Earnings & Revenue Surprise filters  (data-filter="fa_epsrev")
// ---------------------------------------------------------------------------

export const ScreenerEarningsRevenueSurpriseFilter = {
  BOTH_POSITIVE: 'fa_epsrev_bp',
  BOTH_MET: 'fa_epsrev_bm',
  BOTH_NEGATIVE: 'fa_epsrev_bn',
  EPS_POSITIVE: 'fa_epsrev_ep',
  EPS_MET: 'fa_epsrev_em',
  EPS_NEGATIVE: 'fa_epsrev_en',
  EPS_UNDER_NEG100: 'fa_epsrev_eu100',
  EPS_UNDER_NEG50: 'fa_epsrev_eu50',
  EPS_UNDER_NEG40: 'fa_epsrev_eu40',
  EPS_UNDER_NEG30: 'fa_epsrev_eu30',
  EPS_UNDER_NEG20: 'fa_epsrev_eu20',
  EPS_UNDER_NEG10: 'fa_epsrev_eu10',
  EPS_UNDER_NEG5: 'fa_epsrev_eu5',
  EPS_OVER_5: 'fa_epsrev_eo5',
  EPS_OVER_10: 'fa_epsrev_eo10',
  EPS_OVER_20: 'fa_epsrev_eo20',
  EPS_OVER_30: 'fa_epsrev_eo30',
  EPS_OVER_40: 'fa_epsrev_eo40',
  EPS_OVER_50: 'fa_epsrev_eo50',
  EPS_OVER_60: 'fa_epsrev_eo60',
  EPS_OVER_70: 'fa_epsrev_eo70',
  EPS_OVER_80: 'fa_epsrev_eo80',
  EPS_OVER_90: 'fa_epsrev_eo90',
  EPS_OVER_100: 'fa_epsrev_eo100',
  EPS_OVER_200: 'fa_epsrev_eo200',
  REV_POSITIVE: 'fa_epsrev_rp',
  REV_MET: 'fa_epsrev_rm',
  REV_NEGATIVE: 'fa_epsrev_rn',
  REV_UNDER_NEG100: 'fa_epsrev_ru100',
  REV_UNDER_NEG50: 'fa_epsrev_ru50',
  REV_UNDER_NEG40: 'fa_epsrev_ru40',
  REV_UNDER_NEG30: 'fa_epsrev_ru30',
  REV_UNDER_NEG20: 'fa_epsrev_ru20',
  REV_UNDER_NEG10: 'fa_epsrev_ru10',
  REV_UNDER_NEG5: 'fa_epsrev_ru5',
  REV_OVER_5: 'fa_epsrev_ro5',
  REV_OVER_10: 'fa_epsrev_ro10',
  REV_OVER_20: 'fa_epsrev_ro20',
  REV_OVER_30: 'fa_epsrev_ro30',
  REV_OVER_40: 'fa_epsrev_ro40',
  REV_OVER_50: 'fa_epsrev_ro50',
  REV_OVER_60: 'fa_epsrev_ro60',
  REV_OVER_70: 'fa_epsrev_ro70',
  REV_OVER_80: 'fa_epsrev_ro80',
  REV_OVER_90: 'fa_epsrev_ro90',
  REV_OVER_100: 'fa_epsrev_ro100',
  REV_OVER_200: 'fa_epsrev_ro200',
} as const;

/** Union of all known screener Earnings & Revenue Surprise filter values. */
export type ScreenerEarningsRevenueSurpriseFilter = (typeof ScreenerEarningsRevenueSurpriseFilter)[keyof typeof ScreenerEarningsRevenueSurpriseFilter];

// ---------------------------------------------------------------------------
// Screener Return on Assets filters  (data-filter="fa_roa")
// ---------------------------------------------------------------------------

export const ScreenerROAFilter = {
  POSITIVE: 'fa_roa_pos',
  NEGATIVE: 'fa_roa_neg',
  VERY_POSITIVE: 'fa_roa_verypos',
  VERY_NEGATIVE: 'fa_roa_veryneg',
  UNDER_NEG50: 'fa_roa_u-50',
  UNDER_NEG45: 'fa_roa_u-45',
  UNDER_NEG40: 'fa_roa_u-40',
  UNDER_NEG35: 'fa_roa_u-35',
  UNDER_NEG30: 'fa_roa_u-30',
  UNDER_NEG25: 'fa_roa_u-25',
  UNDER_NEG20: 'fa_roa_u-20',
  UNDER_NEG15: 'fa_roa_u-15',
  UNDER_NEG10: 'fa_roa_u-10',
  UNDER_NEG5: 'fa_roa_u-5',
  OVER_5: 'fa_roa_o5',
  OVER_10: 'fa_roa_o10',
  OVER_15: 'fa_roa_o15',
  OVER_20: 'fa_roa_o20',
  OVER_25: 'fa_roa_o25',
  OVER_30: 'fa_roa_o30',
  OVER_35: 'fa_roa_o35',
  OVER_40: 'fa_roa_o40',
  OVER_45: 'fa_roa_o45',
  OVER_50: 'fa_roa_o50',
} as const;

/** Union of all known screener Return on Assets filter values. */
export type ScreenerROAFilter = (typeof ScreenerROAFilter)[keyof typeof ScreenerROAFilter];

// ---------------------------------------------------------------------------
// Screener Return on Equity filters  (data-filter="fa_roe")
// ---------------------------------------------------------------------------

export const ScreenerROEFilter = {
  POSITIVE: 'fa_roe_pos',
  NEGATIVE: 'fa_roe_neg',
  VERY_POSITIVE: 'fa_roe_verypos',
  VERY_NEGATIVE: 'fa_roe_veryneg',
  UNDER_NEG50: 'fa_roe_u-50',
  UNDER_NEG45: 'fa_roe_u-45',
  UNDER_NEG40: 'fa_roe_u-40',
  UNDER_NEG35: 'fa_roe_u-35',
  UNDER_NEG30: 'fa_roe_u-30',
  UNDER_NEG25: 'fa_roe_u-25',
  UNDER_NEG20: 'fa_roe_u-20',
  UNDER_NEG15: 'fa_roe_u-15',
  UNDER_NEG10: 'fa_roe_u-10',
  UNDER_NEG5: 'fa_roe_u-5',
  OVER_5: 'fa_roe_o5',
  OVER_10: 'fa_roe_o10',
  OVER_15: 'fa_roe_o15',
  OVER_20: 'fa_roe_o20',
  OVER_25: 'fa_roe_o25',
  OVER_30: 'fa_roe_o30',
  OVER_35: 'fa_roe_o35',
  OVER_40: 'fa_roe_o40',
  OVER_45: 'fa_roe_o45',
  OVER_50: 'fa_roe_o50',
} as const;

/** Union of all known screener Return on Equity filter values. */
export type ScreenerROEFilter = (typeof ScreenerROEFilter)[keyof typeof ScreenerROEFilter];

// ---------------------------------------------------------------------------
// Screener Return on Invested Capital filters  (data-filter="fa_roi")
// ---------------------------------------------------------------------------

export const ScreenerROIFilter = {
  POSITIVE: 'fa_roi_pos',
  NEGATIVE: 'fa_roi_neg',
  VERY_POSITIVE: 'fa_roi_verypos',
  VERY_NEGATIVE: 'fa_roi_veryneg',
  UNDER_NEG50: 'fa_roi_u-50',
  UNDER_NEG45: 'fa_roi_u-45',
  UNDER_NEG40: 'fa_roi_u-40',
  UNDER_NEG35: 'fa_roi_u-35',
  UNDER_NEG30: 'fa_roi_u-30',
  UNDER_NEG25: 'fa_roi_u-25',
  UNDER_NEG20: 'fa_roi_u-20',
  UNDER_NEG15: 'fa_roi_u-15',
  UNDER_NEG10: 'fa_roi_u-10',
  UNDER_NEG5: 'fa_roi_u-5',
  OVER_5: 'fa_roi_o5',
  OVER_10: 'fa_roi_o10',
  OVER_15: 'fa_roi_o15',
  OVER_20: 'fa_roi_o20',
  OVER_25: 'fa_roi_o25',
  OVER_30: 'fa_roi_o30',
  OVER_35: 'fa_roi_o35',
  OVER_40: 'fa_roi_o40',
  OVER_45: 'fa_roi_o45',
  OVER_50: 'fa_roi_o50',
} as const;

/** Union of all known screener Return on Invested Capital filter values. */
export type ScreenerROIFilter = (typeof ScreenerROIFilter)[keyof typeof ScreenerROIFilter];

// ---------------------------------------------------------------------------
// Screener Current Ratio filters  (data-filter="fa_curratio")
// ---------------------------------------------------------------------------

export const ScreenerCurrentRatioFilter = {
  HIGH: 'fa_curratio_high',
  LOW: 'fa_curratio_low',
  UNDER_1: 'fa_curratio_u1',
  UNDER_0_5: 'fa_curratio_u0.5',
  OVER_0_5: 'fa_curratio_o0.5',
  OVER_1: 'fa_curratio_o1',
  OVER_1_5: 'fa_curratio_o1.5',
  OVER_2: 'fa_curratio_o2',
  OVER_3: 'fa_curratio_o3',
  OVER_4: 'fa_curratio_o4',
  OVER_5: 'fa_curratio_o5',
  OVER_10: 'fa_curratio_o10',
} as const;

/** Union of all known screener Current Ratio filter values. */
export type ScreenerCurrentRatioFilter = (typeof ScreenerCurrentRatioFilter)[keyof typeof ScreenerCurrentRatioFilter];

// ---------------------------------------------------------------------------
// Screener Quick Ratio filters  (data-filter="fa_quickratio")
// ---------------------------------------------------------------------------

export const ScreenerQuickRatioFilter = {
  HIGH: 'fa_quickratio_high',
  LOW: 'fa_quickratio_low',
  UNDER_1: 'fa_quickratio_u1',
  UNDER_0_5: 'fa_quickratio_u0.5',
  OVER_0_5: 'fa_quickratio_o0.5',
  OVER_1: 'fa_quickratio_o1',
  OVER_1_5: 'fa_quickratio_o1.5',
  OVER_2: 'fa_quickratio_o2',
  OVER_3: 'fa_quickratio_o3',
  OVER_4: 'fa_quickratio_o4',
  OVER_5: 'fa_quickratio_o5',
  OVER_10: 'fa_quickratio_o10',
} as const;

/** Union of all known screener Quick Ratio filter values. */
export type ScreenerQuickRatioFilter = (typeof ScreenerQuickRatioFilter)[keyof typeof ScreenerQuickRatioFilter];

// ---------------------------------------------------------------------------
// Screener LT Debt/Equity filters  (data-filter="fa_ltdebteq")
// ---------------------------------------------------------------------------

export const ScreenerLTDebtEquityFilter = {
  HIGH: 'fa_ltdebteq_high',
  LOW: 'fa_ltdebteq_low',
  UNDER_1: 'fa_ltdebteq_u1',
  UNDER_0_9: 'fa_ltdebteq_u0.9',
  UNDER_0_8: 'fa_ltdebteq_u0.8',
  UNDER_0_7: 'fa_ltdebteq_u0.7',
  UNDER_0_6: 'fa_ltdebteq_u0.6',
  UNDER_0_5: 'fa_ltdebteq_u0.5',
  UNDER_0_4: 'fa_ltdebteq_u0.4',
  UNDER_0_3: 'fa_ltdebteq_u0.3',
  UNDER_0_2: 'fa_ltdebteq_u0.2',
  UNDER_0_1: 'fa_ltdebteq_u0.1',
  OVER_0_1: 'fa_ltdebteq_o0.1',
  OVER_0_2: 'fa_ltdebteq_o0.2',
  OVER_0_3: 'fa_ltdebteq_o0.3',
  OVER_0_4: 'fa_ltdebteq_o0.4',
  OVER_0_5: 'fa_ltdebteq_o0.5',
  OVER_0_6: 'fa_ltdebteq_o0.6',
  OVER_0_7: 'fa_ltdebteq_o0.7',
  OVER_0_8: 'fa_ltdebteq_o0.8',
  OVER_0_9: 'fa_ltdebteq_o0.9',
  OVER_1: 'fa_ltdebteq_o1',
} as const;

/** Union of all known screener LT Debt/Equity filter values. */
export type ScreenerLTDebtEquityFilter = (typeof ScreenerLTDebtEquityFilter)[keyof typeof ScreenerLTDebtEquityFilter];

// ---------------------------------------------------------------------------
// Screener Debt/Equity filters  (data-filter="fa_debteq")
// ---------------------------------------------------------------------------

export const ScreenerDebtEquityFilter = {
  HIGH: 'fa_debteq_high',
  LOW: 'fa_debteq_low',
  UNDER_1: 'fa_debteq_u1',
  UNDER_0_9: 'fa_debteq_u0.9',
  UNDER_0_8: 'fa_debteq_u0.8',
  UNDER_0_7: 'fa_debteq_u0.7',
  UNDER_0_6: 'fa_debteq_u0.6',
  UNDER_0_5: 'fa_debteq_u0.5',
  UNDER_0_4: 'fa_debteq_u0.4',
  UNDER_0_3: 'fa_debteq_u0.3',
  UNDER_0_2: 'fa_debteq_u0.2',
  UNDER_0_1: 'fa_debteq_u0.1',
  OVER_0_1: 'fa_debteq_o0.1',
  OVER_0_2: 'fa_debteq_o0.2',
  OVER_0_3: 'fa_debteq_o0.3',
  OVER_0_4: 'fa_debteq_o0.4',
  OVER_0_5: 'fa_debteq_o0.5',
  OVER_0_6: 'fa_debteq_o0.6',
  OVER_0_7: 'fa_debteq_o0.7',
  OVER_0_8: 'fa_debteq_o0.8',
  OVER_0_9: 'fa_debteq_o0.9',
  OVER_1: 'fa_debteq_o1',
} as const;

/** Union of all known screener Debt/Equity filter values. */
export type ScreenerDebtEquityFilter = (typeof ScreenerDebtEquityFilter)[keyof typeof ScreenerDebtEquityFilter];

// ---------------------------------------------------------------------------
// Screener Gross Margin filters  (data-filter="fa_grossmargin")
// ---------------------------------------------------------------------------

export const ScreenerGrossMarginFilter = {
  POSITIVE: 'fa_grossmargin_pos',
  NEGATIVE: 'fa_grossmargin_neg',
  HIGH: 'fa_grossmargin_high',
  UNDER_90: 'fa_grossmargin_u90',
  UNDER_80: 'fa_grossmargin_u80',
  UNDER_70: 'fa_grossmargin_u70',
  UNDER_60: 'fa_grossmargin_u60',
  UNDER_50: 'fa_grossmargin_u50',
  UNDER_45: 'fa_grossmargin_u45',
  UNDER_40: 'fa_grossmargin_u40',
  UNDER_35: 'fa_grossmargin_u35',
  UNDER_30: 'fa_grossmargin_u30',
  UNDER_25: 'fa_grossmargin_u25',
  UNDER_20: 'fa_grossmargin_u20',
  UNDER_15: 'fa_grossmargin_u15',
  UNDER_10: 'fa_grossmargin_u10',
  UNDER_5: 'fa_grossmargin_u5',
  OVER_5: 'fa_grossmargin_o5',
  OVER_10: 'fa_grossmargin_o10',
  OVER_15: 'fa_grossmargin_o15',
  OVER_20: 'fa_grossmargin_o20',
  OVER_25: 'fa_grossmargin_o25',
  OVER_30: 'fa_grossmargin_o30',
  OVER_35: 'fa_grossmargin_o35',
  OVER_40: 'fa_grossmargin_o40',
  OVER_45: 'fa_grossmargin_o45',
  OVER_50: 'fa_grossmargin_o50',
  OVER_60: 'fa_grossmargin_o60',
  OVER_70: 'fa_grossmargin_o70',
  OVER_80: 'fa_grossmargin_o80',
  OVER_90: 'fa_grossmargin_o90',
} as const;

/** Union of all known screener Gross Margin filter values. */
export type ScreenerGrossMarginFilter = (typeof ScreenerGrossMarginFilter)[keyof typeof ScreenerGrossMarginFilter];

// ---------------------------------------------------------------------------
// Screener Operating Margin filters  (data-filter="fa_opermargin")
// ---------------------------------------------------------------------------

export const ScreenerOperatingMarginFilter = {
  POSITIVE: 'fa_opermargin_pos',
  NEGATIVE: 'fa_opermargin_neg',
  HIGH: 'fa_opermargin_high',
  VERY_NEGATIVE: 'fa_opermargin_veryneg',
  UNDER_NEG50: 'fa_opermargin_u-50',
  UNDER_NEG40: 'fa_opermargin_u-40',
  UNDER_NEG30: 'fa_opermargin_u-30',
  UNDER_NEG20: 'fa_opermargin_u-20',
  UNDER_NEG10: 'fa_opermargin_u-10',
  UNDER_NEG5: 'fa_opermargin_u-5',
  UNDER_5: 'fa_opermargin_u5',
  UNDER_10: 'fa_opermargin_u10',
  UNDER_15: 'fa_opermargin_u15',
  UNDER_20: 'fa_opermargin_u20',
  UNDER_25: 'fa_opermargin_u25',
  UNDER_30: 'fa_opermargin_u30',
  OVER_5: 'fa_opermargin_o5',
  OVER_10: 'fa_opermargin_o10',
  OVER_15: 'fa_opermargin_o15',
  OVER_20: 'fa_opermargin_o20',
  OVER_25: 'fa_opermargin_o25',
  OVER_30: 'fa_opermargin_o30',
  OVER_35: 'fa_opermargin_o35',
  OVER_40: 'fa_opermargin_o40',
  OVER_45: 'fa_opermargin_o45',
  OVER_50: 'fa_opermargin_o50',
} as const;

/** Union of all known screener Operating Margin filter values. */
export type ScreenerOperatingMarginFilter = (typeof ScreenerOperatingMarginFilter)[keyof typeof ScreenerOperatingMarginFilter];

// ---------------------------------------------------------------------------
// Screener Net Profit Margin filters  (data-filter="fa_netmargin")
// ---------------------------------------------------------------------------

export const ScreenerNetProfitMarginFilter = {
  POSITIVE: 'fa_netmargin_pos',
  NEGATIVE: 'fa_netmargin_neg',
  HIGH: 'fa_netmargin_high',
  VERY_NEGATIVE: 'fa_netmargin_veryneg',
  UNDER_NEG50: 'fa_netmargin_u-50',
  UNDER_NEG40: 'fa_netmargin_u-40',
  UNDER_NEG30: 'fa_netmargin_u-30',
  UNDER_NEG20: 'fa_netmargin_u-20',
  UNDER_NEG10: 'fa_netmargin_u-10',
  UNDER_NEG5: 'fa_netmargin_u-5',
  UNDER_5: 'fa_netmargin_u5',
  UNDER_10: 'fa_netmargin_u10',
  UNDER_15: 'fa_netmargin_u15',
  UNDER_20: 'fa_netmargin_u20',
  UNDER_25: 'fa_netmargin_u25',
  UNDER_30: 'fa_netmargin_u30',
  OVER_5: 'fa_netmargin_o5',
  OVER_10: 'fa_netmargin_o10',
  OVER_15: 'fa_netmargin_o15',
  OVER_20: 'fa_netmargin_o20',
  OVER_25: 'fa_netmargin_o25',
  OVER_30: 'fa_netmargin_o30',
  OVER_35: 'fa_netmargin_o35',
  OVER_40: 'fa_netmargin_o40',
  OVER_45: 'fa_netmargin_o45',
  OVER_50: 'fa_netmargin_o50',
} as const;

/** Union of all known screener Net Profit Margin filter values. */
export type ScreenerNetProfitMarginFilter = (typeof ScreenerNetProfitMarginFilter)[keyof typeof ScreenerNetProfitMarginFilter];

// ---------------------------------------------------------------------------
// Screener Payout Ratio filters  (data-filter="fa_payoutratio")
// ---------------------------------------------------------------------------

export const ScreenerPayoutRatioFilter = {
  NONE: 'fa_payoutratio_none',
  POSITIVE: 'fa_payoutratio_pos',
  LOW: 'fa_payoutratio_low',
  HIGH: 'fa_payoutratio_high',
  UNDER_10: 'fa_payoutratio_u10',
  UNDER_20: 'fa_payoutratio_u20',
  UNDER_30: 'fa_payoutratio_u30',
  UNDER_40: 'fa_payoutratio_u40',
  UNDER_50: 'fa_payoutratio_u50',
  UNDER_60: 'fa_payoutratio_u60',
  UNDER_70: 'fa_payoutratio_u70',
  UNDER_80: 'fa_payoutratio_u80',
  UNDER_90: 'fa_payoutratio_u90',
  UNDER_100: 'fa_payoutratio_u100',
  OVER_10: 'fa_payoutratio_o10',
  OVER_20: 'fa_payoutratio_o20',
  OVER_30: 'fa_payoutratio_o30',
  OVER_40: 'fa_payoutratio_o40',
  OVER_50: 'fa_payoutratio_o50',
  OVER_60: 'fa_payoutratio_o60',
  OVER_70: 'fa_payoutratio_o70',
  OVER_80: 'fa_payoutratio_o80',
  OVER_90: 'fa_payoutratio_o90',
  OVER_100: 'fa_payoutratio_o100',
} as const;

/** Union of all known screener Payout Ratio filter values. */
export type ScreenerPayoutRatioFilter = (typeof ScreenerPayoutRatioFilter)[keyof typeof ScreenerPayoutRatioFilter];
