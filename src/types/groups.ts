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
  Sector: 'sector',
  Industry: 'industry',
  Country: 'country',
  Capitalization: 'capitalization',
} as const;
export type GroupName = (typeof GroupName)[keyof typeof GroupName];

/** Valid industry subgroup names for the groups endpoint. */
export const IndustrySubgroup = {
  BasicMaterials: 'basicmaterials',
  CommunicationServices: 'communicationservices',
  ConsumerCyclical: 'consumercyclical',
  ConsumerDefensive: 'consumerdefensive',
  Energy: 'energy',
  Financial: 'financial',
  Healthcare: 'healthcare',
  Industrials: 'industrials',
  RealEstate: 'realestate',
  Technology: 'technology',
  Utilities: 'utilities',
} as const;
export type IndustrySubgroup = (typeof IndustrySubgroup)[keyof typeof IndustrySubgroup];

/** Valid view IDs for the groups endpoint. */
export const GroupView = {
  Overview: 110,
  Valuation: 120,
  Performance: 140,
  Custom: 150,
  PerformanceChart: 210,
  Spectrum: 310,
  Charts: 410,
  Maps: 510,
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
