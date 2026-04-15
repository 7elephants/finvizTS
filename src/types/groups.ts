/*
 * ---
 * Workflow Summary
 * Invocation: Imported by groups.ts and re-exported from types/index.ts.
 *
 * | Step | Description                            | Input | Output                      |
 * |------|----------------------------------------|-------|-----------------------------|
 * | 1    | Export GroupName const + type          | —     | Typed group name constants  |
 * | 2    | Export IndustrySubgroup const + type   | —     | Typed subgroup constants    |
 * | 3    | Export GroupView const + type          | —     | Typed view ID constants     |
 * | 4    | Export GroupOptions interface          | —     | Typed request options       |
 * | 5    | Export Group response type             | —     | Typed group row             |
 * ---
 */

/** Valid group names for the groups endpoint. */
export const GroupName = {
  SECTOR: 'sector',
  INDUSTRY: 'industry',
  COUNTRY: 'country',
  CAPITALIZATION: 'capitalization',
} as const;
export type GroupName = (typeof GroupName)[keyof typeof GroupName];

/** Valid industry subgroup names for the groups endpoint. */
export const IndustrySubgroup = {
  BASIC_MATERIALS: 'basicmaterials',
  COMMUNICATION_SERVICES: 'communicationservices',
  CONSUMER_CYCLICAL: 'consumercyclical',
  CONSUMER_DEFENSIVE: 'consumerdefensive',
  ENERGY: 'energy',
  FINANCIAL: 'financial',
  HEALTHCARE: 'healthcare',
  INDUSTRIALS: 'industrials',
  REAL_ESTATE: 'realestate',
  TECHNOLOGY: 'technology',
  UTILITIES: 'utilities',
} as const;
export type IndustrySubgroup = (typeof IndustrySubgroup)[keyof typeof IndustrySubgroup];

/** Valid view IDs for the groups endpoint. */
export const GroupView = {
  OVERVIEW: 110,
  VALUATION: 120,
  PERFORMANCE: 140,
  CUSTOM: 150,
  PERFORMANCE_CHART: 210,
  SPECTRUM: 310,
  CHARTS: 410,
  MAPS: 510,
} as const;
export type GroupView = (typeof GroupView)[keyof typeof GroupView];

/** Options for a groups request. */
export interface GroupOptions {
  /** Subgroup name (only applicable for certain groups). */
  subgroup?: string;
  /** Column indices to include in the response. */
  fields?: number[];
}

/** A single row returned by the groups endpoint. */
export type Group = Record<string, string>;
