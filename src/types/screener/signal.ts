/*
 * ---
 * Workflow Summary
 * Invocation: Imported by consumers and re-exported from types/screener/index.ts.
 *
 * | Step | Description                          | Input | Output                     |
 * |------|--------------------------------------|-------|----------------------------|
 * | 1    | Export ScreenerSignal const + type   | —     | Typed signal value strings |
 * ---
 */

/** All known screener signal values for the `s` query parameter. */
export const ScreenerSignal = {
  TOP_GAINERS: 'ta_topgainers',
  TOP_LOSERS: 'ta_toplosers',
  NEW_HIGH: 'ta_newhigh',
  NEW_LOW: 'ta_newlow',
  MOST_VOLATILE: 'ta_mostvolatile',
  MOST_ACTIVE: 'ta_mostactive',
  UNUSUAL_VOLUME: 'ta_unusualvolume',
  OVERBOUGHT: 'ta_overbought',
  OVERSOLD: 'ta_oversold',
  DOWNGRADES: 'n_downgrades',
  UPGRADES: 'n_upgrades',
  EARNINGS_BEFORE: 'n_earningsbefore',
  EARNINGS_AFTER: 'n_earningsafter',
  RECENT_INSIDER_BUYING: 'it_latestbuys',
  RECENT_INSIDER_SELLING: 'it_latestsales',
  MAJOR_NEWS: 'n_majornews',
  HORIZONTAL_SR: 'ta_p_horizontal',
  TL_RESISTANCE: 'ta_p_tlresistance',
  TL_SUPPORT: 'ta_p_tlsupport',
  WEDGE_UP: 'ta_p_wedgeup',
  WEDGE_DOWN: 'ta_p_wedgedown',
  TRIANGLE_ASCENDING: 'ta_p_wedgeresistance',
  TRIANGLE_DESCENDING: 'ta_p_wedgesupport',
  WEDGE: 'ta_p_wedge',
  CHANNEL_UP: 'ta_p_channelup',
  CHANNEL_DOWN: 'ta_p_channeldown',
  CHANNEL: 'ta_p_channel',
  DOUBLE_TOP: 'ta_p_doubletop',
  DOUBLE_BOTTOM: 'ta_p_doublebottom',
  MULTIPLE_TOP: 'ta_p_multipletop',
  MULTIPLE_BOTTOM: 'ta_p_multiplebottom',
  HEAD_AND_SHOULDERS: 'ta_p_headandshoulders',
  HEAD_AND_SHOULDERS_INVERSE: 'ta_p_headandshouldersinv',
} as const;

/** Union of all known screener signal values. */
export type ScreenerSignal = (typeof ScreenerSignal)[keyof typeof ScreenerSignal];
