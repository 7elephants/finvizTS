
// ---------------------------------------------------------------------------
// Screener exchange filters
// ---------------------------------------------------------------------------

export const ScreenerExchangeFilter = {
  AMEX: 'exch_amex',
  CBOE: 'exch_cboe',
  NASDAQ: 'exch_nasd',
  NYSE: 'exch_nyse',
} as const;

/** Union of all known screener exchange filter ID values. */
export type ScreenerExchangeFilter = (typeof ScreenerExchangeFilter)[keyof typeof ScreenerExchangeFilter];

// ---------------------------------------------------------------------------
// Screener market cap filters
// ---------------------------------------------------------------------------

export const ScreenerMarketCapFilter = {
  MEGA: 'cap_mega',
  LARGE: 'cap_large',
  MID: 'cap_mid',
  SMALL: 'cap_small',
  MICRO: 'cap_micro',
  NANO: 'cap_nano',
  LARGE_OVER: 'cap_largeover',
  MID_OVER: 'cap_midover',
  SMALL_OVER: 'cap_smallover',
  MICRO_OVER: 'cap_microover',
  LARGE_UNDER: 'cap_largeunder',
  MID_UNDER: 'cap_midunder',
  SMALL_UNDER: 'cap_smallunder',
  MICRO_UNDER: 'cap_microunder',
} as const;

/** Union of all known screener market cap filter ID values. */
export type ScreenerMarketCapFilter = (typeof ScreenerMarketCapFilter)[keyof typeof ScreenerMarketCapFilter];

// ---------------------------------------------------------------------------
// Screener earnings date filters
// ---------------------------------------------------------------------------

export const ScreenerEarningsDateFilter = {
  TODAY: 'earningsdate_today',
  TODAY_BEFORE: 'earningsdate_todaybefore',
  TODAY_AFTER: 'earningsdate_todayafter',
  TOMORROW: 'earningsdate_tomorrow',
  TOMORROW_BEFORE: 'earningsdate_tomorrowbefore',
  TOMORROW_AFTER: 'earningsdate_tomorrowafter',
  YESTERDAY: 'earningsdate_yesterday',
  YESTERDAY_BEFORE: 'earningsdate_yesterdaybefore',
  YESTERDAY_AFTER: 'earningsdate_yesterdayafter',
  NEXT_5_DAYS: 'earningsdate_nextdays5',
  PREV_5_DAYS: 'earningsdate_prevdays5',
  THIS_WEEK: 'earningsdate_thisweek',
  NEXT_WEEK: 'earningsdate_nextweek',
  PREV_WEEK: 'earningsdate_prevweek',
  THIS_MONTH: 'earningsdate_thismonth',
} as const;

/** Union of all known screener market cap filter ID values. */
export type ScreenerEarningsDateFilter = (typeof ScreenerEarningsDateFilter)[keyof typeof ScreenerEarningsDateFilter];

// ---------------------------------------------------------------------------
// Screener price filters
// ---------------------------------------------------------------------------

export const ScreenerPriceFilter = {
  UNDER_1: 'sh_price_u1',
  UNDER_2: 'sh_price_u2',
  UNDER_3: 'sh_price_u3',
  UNDER_4: 'sh_price_u4',
  UNDER_5: 'sh_price_u5',
  UNDER_7: 'sh_price_u7',
  UNDER_10: 'sh_price_u10',
  UNDER_15: 'sh_price_u15',
  UNDER_20: 'sh_price_u20',
  UNDER_30: 'sh_price_u30',
  UNDER_40: 'sh_price_u40',
  UNDER_50: 'sh_price_u50',
  OVER_1: 'sh_price_o1',
  OVER_2: 'sh_price_o2',
  OVER_3: 'sh_price_o3',
  OVER_4: 'sh_price_o4',
  OVER_5: 'sh_price_o5',
  OVER_7: 'sh_price_o7',
  OVER_10: 'sh_price_o10',
  OVER_15: 'sh_price_o15',
  OVER_20: 'sh_price_o20',
  OVER_30: 'sh_price_o30',
  OVER_40: 'sh_price_o40',
  OVER_50: 'sh_price_o50',
  OVER_60: 'sh_price_o60',
  OVER_70: 'sh_price_o70',
  OVER_80: 'sh_price_o80',
  OVER_90: 'sh_price_o90',
  OVER_100: 'sh_price_o100',
  FROM_1_TO_5: 'sh_price_1to5',
  FROM_1_TO_10: 'sh_price_1to10',
  FROM_1_TO_20: 'sh_price_1to20',
  FROM_5_TO_10: 'sh_price_5to10',
  FROM_5_TO_20: 'sh_price_5to20',
  FROM_5_TO_50: 'sh_price_5to50',
  FROM_10_TO_50: 'sh_price_10to50',
  FROM_20_TO_50: 'sh_price_20to50',
  FROM_20_TO_100: 'sh_price_20to100',
} as const;

/** Union of all known screener price filter ID values. */
export type ScreenerPriceFilter = (typeof ScreenerPriceFilter)[keyof typeof ScreenerPriceFilter];

// ---------------------------------------------------------------------------
// Screener index filters
// ---------------------------------------------------------------------------

export const ScreenerIndexFilter = {
  SP500: 'idx_sp500',
  NDX: 'idx_ndx',
  DJI: 'idx_dji',
  RUT: 'idx_rut',
} as const;

/** Union of all known screener index filter ID values. */
export type ScreenerIndexFilter = (typeof ScreenerIndexFilter)[keyof typeof ScreenerIndexFilter];

// ---------------------------------------------------------------------------
// Screener dividend yield filters
// ---------------------------------------------------------------------------

export const ScreenerDividendYieldFilter = {
  NONE: 'fa_div_none',
  POSITIVE: 'fa_div_pos',
  HIGH: 'fa_div_high',
  VERY_HIGH: 'fa_div_veryhigh',
  OVER_1: 'fa_div_o1',
  OVER_2: 'fa_div_o2',
  OVER_3: 'fa_div_o3',
  OVER_4: 'fa_div_o4',
  OVER_5: 'fa_div_o5',
  OVER_6: 'fa_div_o6',
  OVER_7: 'fa_div_o7',
  OVER_8: 'fa_div_o8',
  OVER_9: 'fa_div_o9',
  OVER_10: 'fa_div_o10',
} as const;

/** Union of all known screener dividend yield filter ID values. */
export type ScreenerDividendYieldFilter = (typeof ScreenerDividendYieldFilter)[keyof typeof ScreenerDividendYieldFilter];

// ---------------------------------------------------------------------------
// Screener average volume filters
// ---------------------------------------------------------------------------

export const ScreenerAverageVolumeFilter = {
  UNDER_50K: 'sh_avgvol_u50',
  UNDER_100K: 'sh_avgvol_u100',
  UNDER_500K: 'sh_avgvol_u500',
  UNDER_750K: 'sh_avgvol_u750',
  UNDER_1M: 'sh_avgvol_u1000',
  OVER_50K: 'sh_avgvol_o50',
  OVER_100K: 'sh_avgvol_o100',
  OVER_200K: 'sh_avgvol_o200',
  OVER_300K: 'sh_avgvol_o300',
  OVER_400K: 'sh_avgvol_o400',
  OVER_500K: 'sh_avgvol_o500',
  OVER_750K: 'sh_avgvol_o750',
  OVER_1M: 'sh_avgvol_o1000',
  OVER_2M: 'sh_avgvol_o2000',
  FROM_100K_TO_500K: 'sh_avgvol_100to500',
  FROM_100K_TO_1M: 'sh_avgvol_100to1000',
  FROM_500K_TO_1M: 'sh_avgvol_500to1000',
  FROM_500K_TO_10M: 'sh_avgvol_500to10000',
} as const;

/** Union of all known screener average volume filter ID values. */
export type ScreenerAverageVolumeFilter = (typeof ScreenerAverageVolumeFilter)[keyof typeof ScreenerAverageVolumeFilter];

// ---------------------------------------------------------------------------
// Screener target price filters
// ---------------------------------------------------------------------------

export const ScreenerTargetPriceFilter = {
  A50: 'targetprice_a50',
  A40: 'targetprice_a40',
  A30: 'targetprice_a30',
  A20: 'targetprice_a20',
  A10: 'targetprice_a10',
  A5: 'targetprice_a5',
  ABOVE: 'targetprice_above',
  BELOW: 'targetprice_below',
  B5: 'targetprice_b5',
  B10: 'targetprice_b10',
  B20: 'targetprice_b20',
  B30: 'targetprice_b30',
  B40: 'targetprice_b40',
  B50: 'targetprice_b50',
} as const;

/** Union of all known screener target price filter ID values. */
export type ScreenerTargetPriceFilter = (typeof ScreenerTargetPriceFilter)[keyof typeof ScreenerTargetPriceFilter];

// ---------------------------------------------------------------------------
// Screener sub theme filters
// ---------------------------------------------------------------------------

export const ScreenerSubThemeFilter = {
AGRICULTURE_PROTEIN: 'subtheme_agriculturealtprotein',
AGRICULTURE_CROPS: 'subtheme_agriculturecropinputs',
AGRICULTURE_INDOOR_FARMING: 'subtheme_agricultureindoorfarming',
AGRICULTURE_PROCESSING: 'subtheme_agricultureprocessing',
AGRICULTURE_SMART_FARMING: 'subtheme_agriculturesmartfarming',
AI_ADSSEARCH: 'subtheme_aiadssearch',
AI_AGI: 'subtheme_aiagi',
AI_APPLICATIONS: 'subtheme_aiapplications',
AI_CLOUD: 'subtheme_aicloud',
AI_COMPUTE: 'subtheme_aicompute',
AI_DATA: 'subtheme_aidata',
AI_EDGE: 'subtheme_aiedge',
AI_ENERGY: 'subtheme_aienergy',
AI_ENTERPRISE: 'subtheme_aienterprise',
AI_MODELS: 'subtheme_aimodels',
AI_NETWORKING: 'subtheme_ainetworking',
AI_ROBOTICS: 'subtheme_airobotics',
AI_SECURITY: 'subtheme_aisecurity',
AUTOMATION_AUTO:'subtheme_automationautomation',
AUTOMATION_PRINTING:'subtheme_automationdprinting',
AUTOMATION_IOT:'subtheme_automationiot',
AUTOMATION_LOGISTICS:'subtheme_automationlogistics',
AUTOMATION_MACHINEVISION:'subtheme_automationmachinevision',
AUTOMATION_ROBOTICS:'subtheme_automationrobotics',
AUTOMATION_SOFTWARE:'subtheme_automationsoftware',
AUTONOMOUS_MOBILITY:'subtheme_autonomousavmobility',
AUTONOMOUS_DEFENSE:'subtheme_autonomousdefense',
AUTONOMOUS_INDUSTRIAL: 'subtheme_autonomousindustrial',
AUTONOMONUS_MACHINEVISION: 'subtheme_autonomousmachinevision',
AUTONOMOUS_SOFTWARE: 'subtheme_autonomoussoftware',
AUTONOMOUS_SPECIALIZED: 'subtheme_autonomousspecialized',
BIG_DATA_AI_PLATFORMS: 'subtheme_bigdataaiplatforms',
BIG_DATA_ANALYTICS_BI: 'subtheme_bigdataanalyticsbi',
BIG_DATA_INFRASTRUCTURE: 'subtheme_bigdatainfrastructure',
BIG_DATA_PROVIDERS: 'subtheme_bigdataproviders',
BIOMETRICS_GOVERNMENT_DEFENSE: 'subtheme_biometricsgovdefense',
BIOMETRICS_HARDWARE: 'subtheme_biometricshardware',
BIOMETRICS_IDENTITY: 'subtheme_biometricsidentity',
BIOMETRICS_SOFTWARE: 'subtheme_biometricssoftware',
BLOCKCHAIN_ENTERPRISE: 'subtheme_blockchainenterprise',
BLOCKCHAIN_INFRASTRUCTURE: 'subtheme_blockchaininfrastructure',
BLOCKCHAIN_MINING: 'subtheme_blockchainmining',
BLOCKCHAIN_PAYMENTS: 'subtheme_blockchainpayments',
BLOCKCHAIN_PLATFORMS: 'subtheme_blockchainplatforms',
BLOCKCHAIN_TOKENIZATION: 'subtheme_blockchaintokenization',
CLOUD_DATABASES: 'subtheme_clouddatabases',
CLOUD_DATACENTERS: 'subtheme_clouddatacenters',
CLOUD_DEVOPS: 'subtheme_clouddevops',
CLOUD_EDGE: 'subtheme_cloudedge',
CLOUD_HARDWARE: 'subtheme_cloudhardware',
CLOUD_HSAAS: 'subtheme_cloudhsaas',
CLOUD_HYBRID_CLOUD: 'subtheme_cloudhybridcloud',
CLOUD_HYPERSCALERS: 'subtheme_cloudhyperscalers',
CLOUD_MULTICLOUD: 'subtheme_cloudmulticloud',
CLOUD_PAAS: 'subtheme_cloudpaas',
CLOUD_SECURITY: 'subtheme_cloudsecurity',
CLOUD_SERVERLESS: 'subtheme_cloudserverless',
COMM_AGRIBIOFUELS: 'subtheme_commagribiofuels',
COMM_AGRIFERTILIZERS: 'subtheme_commagrifertilizers',
COMM_AGRIGRAINS: 'subtheme_commagrigrains',
COMM_AGRILIVESTOCK: 'subtheme_commagrilivestock',
COMM_AGRISOTS: 'subtheme_commagrisofts',
COMM_ENERGYBIOFUELS: 'subtheme_commenergybiofuels',
COMM_ENERGYGASLNG: 'subtheme_commenergygaslng',
COMM_ENERGYOIL: 'subtheme_commenergyoil',
COMM_ENERGYURANIUM: 'subtheme_commenergyuranium',
COMM_METALS_BATTERY: 'subtheme_commmetalsbattery',
COMM_METALS_GOLD: 'subtheme_commmetalsgold',
COMM_METALS_INDUSTRIAL: 'subtheme_commmetalsindustrial',
COMM_METALS_PRECIOUS: 'subtheme_commmetalsprecious',
COMM_METALS_RARE_EARTH: 'subtheme_commmetalsrareearth',
COMM_METALS_RECYCLING: 'subtheme_commmetalsrecycling',
COMM_METALS_SILVER: 'subtheme_commmetalssilver',
CONSUMER_APPAREL: 'subtheme_consumerapparel',
CONSUMER_FARM_DIRECT: 'subtheme_consumerfarmdirect',
CONSUMER_FOOD: 'subtheme_consumerfood',
CONSUMER_HOUSEHOLD: 'subtheme_consumerhousehold',
CONSUMER_LUXURY: 'subtheme_consumerluxury',
CONSUMER_SECONDHAND: 'subtheme_consumersecondhand',
CYBERSECURITY_APPSECURITY: 'subtheme_cybersecurityappsecurity',
CYBERSECURITY_CLOUD: 'subtheme_cybersecuritycloud',
CYBERSECURITY_ENDPOINT: 'subtheme_cybersecurityendpoint',
CYBERSECURITY_IDENTITY_IAM: 'subtheme_cybersecurityidentityiam',
CYBERSECURITY_NETWORK: 'subtheme_cybersecuritynetwork',
CYBERSECURITY_SIEM: 'subtheme_cybersecuritysiem',
CYBERSECURITY_THREAT_OPS: 'subtheme_cybersecuritythreatops',
CYBERSECURITY_ZERO_TRUST: 'subtheme_cybersecurityzerotrust',
DEFENSE_AVIATION: 'subtheme_defenseaviation',
DEFENSE_CYBERDEFENSE: 'subtheme_defensecyberdefense',
DEFENSE_DRONES: 'subtheme_defensedrones',
DEFENSE_MANUFACTURING: 'subtheme_defensemanufacturing',
DEFENSE_MISSILES: 'subtheme_defensemissiles',
DEFENSE_SPACETECH: 'subtheme_defensespacetech',
DEFENSE_WEAPONS: 'subtheme_defenseweapons',
ECOMMERCE_ADS_MEDIA: 'subtheme_ecommerceadsmedia',
ECOMMERCE_DTC: 'subtheme_ecommercedtc',
ECOMMERCE_GROCERY: 'subtheme_ecommercegrocery',
ECOMMERCE_LOGISTICS: 'subtheme_ecommercelogistics',
ECOMMERCE_MARKETPLACES: 'subtheme_ecommercemarketplaces',
ECOMMERCE_OMNICHANNEL: 'subtheme_ecommerceomnichannel',
ECOMMERCE_PLATFORMS: 'subtheme_ecommerceplatforms',
ECOMMERCE_SECONDHAND: 'subtheme_ecommercesecondhand',
ECOMMERCE_SOCIAL: 'subtheme_ecommercesocial',
EDUCATION_CURRICULUM: 'subtheme_educationcurriculum',
EDUCATION_INFRASTRUCTURE: 'subtheme_educationinfrastructure',
EDUCATION_PLATFORMS: 'subtheme_educationplatforms',
EDUCATION_WORKFORCE: 'subtheme_educationworkforce',
ENERGY_BASE_MAJORS: 'subtheme_energybasemajors',
ENERGY_BASE_NUCLEAR: 'subtheme_energybasenuclear',
ENERGY_BASE_OIL_PRODUCTION: 'subtheme_energybaseoilproduction',
ENERGY_BASE_OIL_REFINING: 'subtheme_energybaseoilrefining',
ENERGY_BASE_OIL_SERVICES: 'subtheme_energybaseoilservices',
ENERGY_BASE_THERMAL: 'subtheme_energybasethermal',
ENERGY_BASE_UTILITIES: 'subtheme_energybaseutilities',
ENERGY_CLEAN_BATTERIES: 'subtheme_energycleanbatteries',
ENERGY_CLEAN_BIOFUELS: 'subtheme_energycleanbiofuels',
ENERGY_CLEAN_GEO_THERMAL: 'subtheme_energycleangeothermal',
ENERGY_CLEAN_HYDROGEN: 'subtheme_energycleanhydrogen',
ENERGY_CLEAN_MATERIALS: 'subtheme_energycleanmaterials',
ENERGY_CLEAN_SMART_GRID: 'subtheme_energycleansmartgrid',
ENERGY_CLEAN_SOLAR: 'subtheme_energycleansolar',
ENERGY_CLEAN_UTILITIES: 'subtheme_energycleanutilities',
ENERGY_CLEAN_WIND: 'subtheme_energycleanwind',
ENTERTAINMENT_BETTING: 'subtheme_entertainmentbetting',
ENTERTAINMENT_GAMBLING: 'subtheme_entertainmentgambling',
ENTERTAINMENT_GAMING: 'subtheme_entertainmentgaming',
ENTERTAINMENT_INFRASTRUCTURE: 'subtheme_entertainmentinfrastructure',
ENTERTAINMENT_MUSIC: 'subtheme_entertainmentmusic',
ENTERTAINMENT_VIDEO: 'subtheme_entertainmentvideo',
ENVIRONMENTAL_AGRICULTURE: 'subtheme_environmentalagriculture',
ENVIRONMENTAL_AIR_QUALITY: 'subtheme_environmentalairquality',
ENVIRONMENTAL_CLIMATE: 'subtheme_environmentalclimate',
ENVIRONMENTAL_WASTE: 'subtheme_environmentalwaste',
ENVIRONMENTAL_WATER: 'subtheme_environmentalwater',
EVS_BATTERIES: 'subtheme_evsbatteries',
EVS_CHARGING: 'subtheme_evscharging',
EVS_CHIPS: 'subtheme_evschips',
EVS_FLEETS: 'subtheme_evsfleets',
EVS_MANUFACTURERS: 'subtheme_evsmanufacturers',
EVS_SELF_DRIVING: 'subtheme_evsselfdriving',
EVS_SUPPLIERS: 'subtheme_evssuppliers',
FINTECH_BLOCKCHAIN: 'subtheme_fintechblockchain',
FINTECH_EXCHANGES: 'subtheme_fintechexchanges',
FINTECH_INSURANCE: 'subtheme_fintechinsurance',
FINTECH_LENDING: 'subtheme_fintechlending',
FINTECH_NEOBANKS: 'subtheme_fintechneobanks',
FINTECH_PAYMENTS: 'subtheme_fintechpayments',
FINTECH_TRADING: 'subtheme_fintechtrading',
HARDWARE_DATACENTERS: 'subtheme_hardwaredatacenters',
HARDWARE_ELECTRONICS: 'subtheme_hardwareelectronics',
HARDWARE_GAMING: 'subtheme_hardwaregaming',
HARDWARE_INDUSTRYAL_IOT: 'subtheme_hardwareindustrialiot',
HARDWARE_NETWORKING: 'subtheme_hardwarenetworking',
HARDWARE_NEXT_GEN: 'subtheme_hardwarenextgen',
HARDWARE_PCS_DEVICES: 'subtheme_hardwarepcsdevices',
HARDWARE_PRINTING: 'subtheme_hardwareprinting',
HARDWARE_SERVERS: 'subtheme_hardwareservers',
HARDWARE_STORAGE: 'subtheme_hardwarestorage',
HARDWARE_TELECOM: 'subtheme_hardwaretelecom',
HEALTHCARE_DEVICES: 'subtheme_healthcaredevices',
HEALTHCARE_DIAGNOSTICS: 'subtheme_healthcarediagnostics',
HEALTHCARE_GENOMICS: 'subtheme_healthcaregenomics',
HEALTHCARE_IT_DATA: 'subtheme_healthcareitdata',
HEALTHCARE_METABOLIC: 'subtheme_healthcaremetabolic',
HEALTHCARE_NEXT_GEN: 'subtheme_healthcarenextgen',
HEALTHCARE_ONCOLOGY: 'subtheme_healthcareoncology',
HEALTHCARE_TELEMEDICINE: 'subtheme_healthcaretelemedicine',
HEALTHCARE_THERAPEUTICS: 'subtheme_healthcaretherapeutics',
IOT_EDGE_DEVICES: 'subtheme_iotedgedevices',
IOT_ENTERPRISE: 'subtheme_iotenterprise',
IOT_HARDWARE: 'subtheme_iothardware',
IOT_NETWORKING: 'subtheme_iotnetworking',
IOT_SECURITY: 'subtheme_iotsecurity',
IOT_SOFTWARE: 'subtheme_iotsoftware',
LONGEVITY_AGING_PHARMA: 'subtheme_longevityagingpharma',
LONGEVITY_HEALTHCARE: 'subtheme_longevityhealthcare',
LONGEVITY_HEALTHY_AGING: 'subtheme_longevityhealthyaging',
LONGEVITY_SENIOR_LIVING: 'subtheme_longevityseniorliving',
NANOTECH_ELECTRONICS: 'subtheme_nanotechelectronics',
NANOTECH_ENERGY: 'subtheme_nanotechenergy',
NANOTECH_MATERIALS: 'subtheme_nanotechmaterials',
NANOTECH_MEDICINE: 'subtheme_nanotechmedicine',
NANOTECH_PRODUCTS: 'subtheme_nanotechproducts',
NANOTECH_RESEARCH_TOOLS: 'subtheme_nanotechresearchtools',
NUTRITIONAL_PROTEIN: 'subtheme_nutritionaltprotein',
NUTRITION_MEAL_DELIVERY: 'subtheme_nutritionmealdelivery',
NUTRITION_RETAILERS: 'subtheme_nutritionretailers',
NUTRITION_SUPPLEMENTS: 'subtheme_nutritionsupplements',
QUANTUM_APPLICATIONS: 'subtheme_quantumapplications',
QUANTUM_CLOUD: 'subtheme_quantumcloud',
QUANTUM_ENABLING_TECH: 'subtheme_quantumenablingtech',
QUANTUM_HARDWARE: 'subtheme_quantumhardware',
QUANTUM_NETWORKING: 'subtheme_quantumnetworking',
QUANTUM_SOFTWARE: 'subtheme_quantumsoftware',
REAL_ESTATE_HEALTHCARE: 'subtheme_realestatehealthcare',
REAL_ESTATE_HOUSING: 'subtheme_realestatehousing',
REAL_ESTATE_IT_TELECOM: 'subtheme_realestateittelecom',
REAL_ESTATE_OFFICE: 'subtheme_realestateoffice',
REAL_ESTATE_RETAIL: 'subtheme_realestateretail',
REAL_ESTATE_TOURISM: 'subtheme_realestatetourism',
REAL_ESTATE_WAREHOUSING: 'subtheme_realestatewarehousing',
ROBOTICS_AUTOMATION: 'subtheme_roboticsautomation',
ROBOTICS_AV_MOBILITY: 'subtheme_roboticsavmobility',
ROBOTICS_CONSUMER: 'subtheme_roboticsconsumer',
ROBOTICS_LOGISTICS: 'subtheme_roboticslogistics',
ROBOTICS_MACHINE_VISION: 'subtheme_roboticsmachinevision',
ROBOTICS_MEDICAL: 'subtheme_roboticsmedical',
SEMICONDUCTOR_ANALOG: 'subtheme_semisanalog',
SEMICONDUCTOR_COMPUTE: 'subtheme_semiscompute',
SEMICONDUCTOR_DESIGN_TOOLS: 'subtheme_semisdesigntools',
SEMICONDUCTOR_FOUNDRIES: 'subtheme_semisfoundries',
SEMICONDUCTOR_LITHOGRAPHY: 'subtheme_semislithography',
SEMICONDUCTOR_MEMORY: 'subtheme_semismemory',
SEMICONDUCTOR_NEXT_GEN: 'subtheme_semisnextgen',
SEMICONDUCTOR_PACKAGING: 'subtheme_semispackaging',
SEMICONDUCTOR_WIRELESS: 'subtheme_semiswireless',
SMART_HOME_AUTOMATION: 'subtheme_smarthomeautomation',
SMART_HOME_DEVICES: 'subtheme_smarthomedevices',
SMART_HOME_ENERGY: 'subtheme_smarthomeenergy',
SMART_HOME_NETWORKING: 'subtheme_smarthomenetworking',
SMART_HOME_SECURITY: 'subtheme_smarthomesecurity',
SMART_HOME_VOICE_AI: 'subtheme_smarthomevoiceai',
SOCIAL_ADVERTISING: 'subtheme_socialadvertising',
SOCIAL_GAMING: 'subtheme_socialgaming',
SOCIAL_NETWORKS: 'subtheme_socialnetworks',
SOCIAL_NICHE: 'subtheme_socialniche',
SOCIAL_VISUAL_CONTENT: 'subtheme_socialvisualcontent',
SOFTWARE_COLLABORATION: 'subtheme_softwarecollaboration',
SOFTWARE_CRM: 'subtheme_softwarecrm',
SOFTWARE_DATA_ANALYTICS: 'subtheme_softwaredataanalytics',
SOFTWARE_DESIGN: 'subtheme_softwaredesign',
SOFTWARE_DEVOPS: 'subtheme_softwaredevops',
SOFTWARE_ECOMMERCE: 'subtheme_softwareecommerce',
SOFTWARE_ENTERPRISE: 'subtheme_softwareenterprise',
SOFTWARE_GAMING: 'subtheme_softwaregaming',
SOFTWARE_HSAAS: 'subtheme_softwarehsaas',
SOFTWARE_OSAAS: 'subtheme_softwareos',
SOFTWARE_SECURITY: 'subtheme_softwaresecurity',
SOFTWARE_VSAAS: 'subtheme_softwarevsaas',
SPACE_DATA_ANALYTICS: 'subtheme_spacedataanalytics',
SPACE_DEFENSE: 'subtheme_spacedefense',
SPACE_INFRASTRUCTURE: 'subtheme_spaceinfrastructure',
SPACE_LAUNCH: 'subtheme_spacelaunch',
SPACE_SATELLITES: 'subtheme_spacesatellites',
TELECOM_CLOUD_EDGE: 'subtheme_telecomcloudedge',
TELECOM_ENTERPRISE: 'subtheme_telecomenterprise',
TELECOM_GOVERNMENT: 'subtheme_telecomgovernment',
TELECOM_INFRASTRUCTURE: 'subtheme_telecominfrastructure',
TELECOM_SATELLITES: 'subtheme_telecomsatcom',
TELECOM_WIRELESS: 'subtheme_telecomwireless',
TRANSPORTATION_AIR_CARGO: 'subtheme_transportationaircargo',
TRANSPORTATION_AIR_TRAVEL: 'subtheme_transportationairtravel',
TRANSPORTATION_INFRASTRUCTURE: 'subtheme_transportationinfrastructure',
TRANSPORTATION_MARITIME: 'subtheme_transportationmaritime',
TRANSPORTATION_NEXT_GEN: 'subtheme_transportationnextgen',
TRANSPORTATION_RAIL: 'subtheme_transportationrail',
TRANSPORTATION_TRUCKING: 'subtheme_transportationtrucking',
TRANSPORTATION_WAREHOUSING: 'subtheme_transportationwarehousing',
VP_AR_APPLICATIONS: 'subtheme_varealityapplications',
VP_AR_ENTERPRISE: 'subtheme_varealityenterprise',
VP_AR_HARDWARE: 'subtheme_varealityhardware',
VP_AR_INFRASTRUCTURE: 'subtheme_varealityinfrastructure',
VP_AR_SOFTWARE: 'subtheme_varealitysoftware',
WEARABLES_IMMERSIVE: 'subtheme_wearablesimmersive',
WEARABLES_MEDICAL: 'subtheme_wearablesmedical',
WEARABLES_SMARTWATCHES: 'subtheme_wearablessmartwatches',
WEARABLES_SOFTWARE: 'subtheme_wearablessoftware',
WEARABLES_SPORT: 'subtheme_wearablessport',
} as const;

/** Union of all known screener sub theme filter ID values. */
export type ScreenerSubThemeFilter = (typeof ScreenerSubThemeFilter)[keyof typeof ScreenerSubThemeFilter];

// ---------------------------------------------------------------------------
// Screener sector filters
// ---------------------------------------------------------------------------

export const ScreenerSectorFilter = {
  BASIC_MATERIALS: 'sec_basicmaterials',
  COMMUNICATION_SERVICES: 'sec_communicationservices',
  CONSUMER_CYCLICAL: 'sec_consumercyclical',
  CONSUMER_DEFENSIVE: 'sec_consumerdefensive',
  ENERGY: 'sec_energy',
  FINANCIAL: 'sec_financial',
  HEALTHCARE: 'sec_healthcare',
  INDUSTRIALS: 'sec_industrials',
  REAL_ESTATE: 'sec_realestate',
  TECHNOLOGY: 'sec_technology',
  UTILITIES: 'sec_utilities',
} as const;

/** Union of all known screener sector filter ID values. */
export type ScreenerSectorFilter = (typeof ScreenerSectorFilter)[keyof typeof ScreenerSectorFilter];

// ---------------------------------------------------------------------------
// Screener short float filters
// ---------------------------------------------------------------------------

export const ScreenerShortFloatFilter = {
  LOW: 'sh_short_low',
  HIGH: 'sh_short_high',
  UNDER_5: 'sh_short_u5',
  UNDER_10: 'sh_short_u10',
  UNDER_15: 'sh_short_u15',
  UNDER_20: 'sh_short_u20',
  UNDER_25: 'sh_short_u25',
  UNDER_30: 'sh_short_u30',
  OVER_5: 'sh_short_o5',
  OVER_10: 'sh_short_o10',
  OVER_15: 'sh_short_o15',
  OVER_20: 'sh_short_o20',
  OVER_25: 'sh_short_o25',
  OVER_30: 'sh_short_o30',
} as const;

/** Union of all known screener short float filter ID values. */
export type ScreenerShortFloatFilter = (typeof ScreenerShortFloatFilter)[keyof typeof ScreenerShortFloatFilter];

// ---------------------------------------------------------------------------
// Screener relative volume filters
// ---------------------------------------------------------------------------

export const ScreenerRelativeVolumeFilter = {
  UNDER_POINT_1: 'sh_relvol_u0.1',
  UNDER_POINT_25: 'sh_relvol_u0.25',
  UNDER_POINT_5: 'sh_relvol_u0.5',
  UNDER_POINT_75: 'sh_relvol_u0.75',
  UNDER_1: 'sh_relvol_u1',
  UNDER_1_POINT_5: 'sh_relvol_u1.5',
  UNDER_2: 'sh_relvol_u2',
  OVER_POINT_25: 'sh_relvol_o0.25',
  OVER_POINT_5: 'sh_relvol_o0.5',
  OVER_POINT_75: 'sh_relvol_o0.75',
  OVER_1: 'sh_relvol_o1',
  OVER_1_POINT_5: 'sh_relvol_o1.5',
  OVER_2: 'sh_relvol_o2',
  OVER_3: 'sh_relvol_o3',
  OVER_5: 'sh_relvol_o5',
  OVER_10: 'sh_relvol_o10',
} as const;

/** Union of all known screener relative volume filter ID values. */
export type ScreenerRelativeVolumeFilter = (typeof ScreenerRelativeVolumeFilter)[keyof typeof ScreenerRelativeVolumeFilter];

// ---------------------------------------------------------------------------
// Screener IPO date filters
// ---------------------------------------------------------------------------

export const ScreenerIPODateFilter = {
  TODAY: 'ipodate_today',
  YESTERDAY: 'ipodate_yesterday',
  PREV_WEEK: 'ipodate_prevweek',
  PREV_MONTH: 'ipodate_prevmonth',
  PREV_QUARTER: 'ipodate_prevquarter',
  PREV_YEAR: 'ipodate_prevyear',
  PREV_2_YEARS: 'ipodate_prev2yrs',
  PREV_3_YEARS: 'ipodate_prev3yrs',
  PREV_5_YEARS: 'ipodate_prev5yrs',
  MORE_1_YEAR: 'ipodate_more1',
  MORE_5_YEARS: 'ipodate_more5',
  MORE_10_YEARS: 'ipodate_more10',
  MORE_15_YEARS: 'ipodate_more15',
  MORE_20_YEARS: 'ipodate_more20',
  MORE_25_YEARS: 'ipodate_more25',
} as const;

/** Union of all known screener IPO date filter ID values. */
export type ScreenerIPODateFilter = (typeof ScreenerIPODateFilter)[keyof typeof ScreenerIPODateFilter];

// ---------------------------------------------------------------------------
// Screener Industry filters
// ---------------------------------------------------------------------------

export const ScreenerIndustryFilter = {
  STOCKS_ONLY: 'ind_stocksonly',
  STOCKS_ONLY_SPAC: 'ind_stocksonlyspac',
  ETF: 'ind_exchangetradedfund',
  ADVERTISING_AGENCIES: 'ind_advertisingagencies',
  AEROSPACE_DEFENSE: 'ind_aerospacedefense',
  AGRICULTURAL_INPUTS: 'ind_agriculturalinputs',
  AIRLINES: 'ind_airlines',
  AIRPORTS_AIR_SERVICES: 'ind_airportsairservices',
  ALUMINUM: 'ind_aluminum',
  APPAREL_MANUFACTURING: 'ind_apparelmanufacturing',
  APPAREL_RETAIL: 'ind_apparelretail',
  ASSET_MANAGEMENT: 'ind_assetmanagement',
  AUTO_MANUFACTURERS: 'ind_automanufacturers',
  AUTO_PARTS: 'ind_autoparts',
  AUTO_TRUCK_DEALERSHIPS: 'ind_autotruckdealerships',
  BANKS_DIVERSIFIED: 'ind_banksdiversified',
  BANKS_REGIONAL: 'ind_banksregional',
  BEVERAGES_BREWERS: 'ind_beveragesbrewers',
  BEVERAGES_NON_ALCOHOLIC: 'ind_beveragesnonalcoholic',
  BEVERAGES_WINERIES_DISTILLERIES: 'ind_beverageswineriesdistilleries',
  BIO_TECHNOLOGY: 'ind_biotechnology',
  BROADCASTING: 'ind_broadcasting',
  BUILDING_MATERIALS: 'ind_buildingmaterials',
  BUILDING_PRODUCTS_EQUIPMENT: 'ind_buildingproductsequipment',
  BUSINESS_EQUIPMENT_SUPPLIES: 'ind_businessequipmentsupplies',
  CAPITAL_MARKETS: 'ind_capitalmarkets',
  CHEMICALS: 'ind_chemicals',
  CLOSED_END_FUND_DEBT: 'ind_closedendfunddebt',
  CLOSED_END_FUND_EQUITY: 'ind_closedendfundequity',
  CLOSED_END_FUND_FOREIGN: 'ind_closedendfundforeign',
  COKING_COAL: 'ind_cokingcoal',
  COMMUNICATION_EQUIPMENT: 'ind_communicationequipment',
  COMPUTER_HARDWARE: 'ind_computerhardware',
  CONFECTIONERS: 'ind_confectioners',
  CONGLOMERATES: 'ind_conglomerates',
  CONSULTING_SERVICES: 'ind_consultingservices',
  CONSUMER_ELECTRONICS: 'ind_consumerelectronics',
  COPPER: 'ind_copper',
  CREDIT_SERVICES: 'ind_creditservices',
  DEPARTMENT_STORES: 'ind_departmentstores',
  DIAGNOSTICS_RESEARCH: 'ind_diagnosticsresearch',
  DISCOUNT_STORES: 'ind_discountstores',
  DRUG_MANUFACTURERS_GENERAL: 'ind_drugmanufacturersgeneral',
  DRUG_MANUFACTURERS_SPECIALTY_GENERIC: 'ind_drugmanufacturersspecialtygeneric',
  EDUCATION_TRAINING_SERVICES: 'ind_educationtrainingservices',
  ELECTRICAL_EQUIPMENT_PARTS: 'ind_electricalequipmentparts',
  ELECTRONIC_COMPONENTS: 'ind_electroniccomponents',
  ELECTRONIC_GAMING_MULTIMEDIA: 'ind_electronicgamingmultimedia',
  ELECTRONICS_COMPUTER_DISTRIBUTION: 'ind_electronicscomputerdistribution',
  ENGINEERING_CONSTRUCTION: 'ind_engineeringconstruction',
  ENTERTAINMENT: 'ind_entertainment',
  EXCHANGE_TRADED_FUND: 'ind_exchangetradedfund',
  FARM_HEAVY_CONSTRUCTION_MACHINERY: 'ind_farmheavyconstructionmachinery',
  FARM_PRODUCTS: 'ind_farmproducts',
  FINANCIAL_CONGLOMERATES: 'ind_financialconglomerates',
  FINANCIAL_DATA_STOCK_EXCHANGES: 'ind_financialdatastockexchanges',
  FOOD_DISTRIBUTION: 'ind_fooddistribution',
  FOOTWEAR_ACCESSORIES: 'ind_footwearaccessories',
  FURNISHINGS_FIXTURES_APPLIANCES: 'ind_furnishingsfixturesappliances',
  GAMBLING: 'ind_gambling',
  GOLD: 'ind_gold',
  GROCERY_STORES: 'ind_grocerystores',
  HEALTHCARE_PLANS: 'ind_healthcareplans',
  HEALTH_INFORMATION_SERVICES: 'ind_healthinformationservices',
  HOME_IMPROVEMENT_RETAIL: 'ind_homeimprovementretail',
  HOUSEHOLD_PERSONAL_PRODUCTS: 'ind_householdpersonalproducts',
  INDUSTRIAL_DISTRIBUTION: 'ind_industrialdistribution',
  INFORMATION_TECHNOLOGY_SERVICES: 'ind_informationtechnologyservices',
  INFRASTRUCTURE_OPERATIONS: 'ind_infrastructureoperations',
  INSURANCE_BROKERS: 'ind_insurancebrokers',
  INSURANCE_DIVERSIFIED: 'ind_insurancediversified',
  INSURANCE_LIFE: 'ind_insurancelife',
  INSURANCE_PROPERTY_CASUALTY: 'ind_insurancepropertycasualty',
  INSURANCE_REINSURANCE: 'ind_insurancereinsurance',
  INSURANCE_SPECIALTY: 'ind_insurancespecialty',
  INTEGRATED_FREIGHT_LOGISTICS: 'ind_integratedfreightlogistics',
  INTERNET_CONTENT_INFORMATION: 'ind_internetcontentinformation',
  INTERNET_RETAIL: 'ind_internetretail',
  LEISURE: 'ind_leisure',
  LODGING: 'ind_lodging',
  LUMBER_WOOD_PRODUCTION: 'ind_lumberwoodproduction',
  LUXURY_GOODS: 'ind_luxurygoods',
  MARINE_SHIPPING: 'ind_marineshipping',
  MEDICAL_CARE_FACILITIES: 'ind_medicalcarefacilities',
  MEDICAL_DEVICES: 'ind_medicaldevices',
  MEDICAL_DISTRIBUTION: 'ind_medicaldistribution',
  MEDICAL_INSTRUMENTS_SUPPLIES: 'ind_medicalinstrumentssupplies',
  METAL_FABRICATION: 'ind_metalfabrication',
  MORTGAGE_FINANCE: 'ind_mortgagefinance',
  OIL_GAS_DRILLING: 'ind_oilgasdrilling',
  OIL_GAS_E_P: 'ind_oilgasep',
  OIL_GAS_EQUIPMENT_SERVICES: 'ind_oilgasequipmentservices',
  OIL_GAS_INTEGRATED: 'ind_oilgasintegrated',
  OIL_GAS_MIDSTREAM: 'ind_oilgasmidstream',
  OIL_GAS_REFINING_MARKETING: 'ind_oilgasrefiningmarketing',
  OTHER_INDUSTRIAL_METALS_MINING: 'ind_otherindustrialmetalsmining',
  OTHER_PRECIOUS_METALS_MINING: 'ind_otherpreciousmetalsmining',
  PACKAGED_FOODS: 'ind_packagedfoods',
  PACKAGING_CONTAINERS: 'ind_packagingcontainers',
  PAPER_PAPER_PRODUCTS: 'ind_paperpaperproducts',
  PERSONAL_SERVICES: 'ind_personalservices',
  PHARMACEUTICAL_RETAILERS: 'ind_pharmaceuticalretailers',
  POLLUTION_TREATMENT_CONTROLS: 'ind_pollutiontreatmentcontrols',
  PUBLISHING: 'ind_publishing',
  RAILROADS: 'ind_railroads',
  REAL_ESTATE_DEVELOPMENT: 'ind_realestatedevelopment',
  REAL_ESTATE_DIVERSIFIED: 'ind_realestatediversified',
  REAL_ESTATE_SERVICES: 'ind_realestateservices',
  RECREATIONAL_VEHICLES: 'ind_recreationalvehicles',
  REIT_DIVERSIFIED: 'ind_reitdiversified',
  REIT_HEALTHCARE_FACILITIES: 'ind_reithealthcarefacilities',
  REIT_HOTEL_MOTEL: 'ind_reithotelmotel',
  REIT_INDUSTRIAL: 'ind_reitindustrial',
  REIT_MORTGAGE: 'ind_reitmortgage',
  REIT_OFFICE: 'ind_reitoffice',
  REIT_RESIDENTIAL: 'ind_reitresidential',
  REIT_RETAIL: 'ind_reitretail',
  REIT_SPECIALTY: 'ind_reitspecialty',
  RENTAL_LEASING_SERVICES: 'ind_rentalleasingservices',
  RESIDENTIAL_CONSTRUCTION: 'ind_residentialconstruction',
  RESORTS_CASINOS: 'ind_resortscasinos',
  RESTAURANTS: 'ind_restaurants',
  SCIENTIFIC_TECHNICAL_INSTRUMENTS: 'ind_scientifictechnicalinstruments',
  SECURITY_PROTECTION_SERVICES: 'ind_securityprotectionservices',
  SEMICONDUCTOR_EQUIPMENT_MATERIALS: 'ind_semiconductorequipmentmaterials',
  SEMICONDUCTORS: 'ind_semisconductors',
  SHELL_COMPANIES: 'ind_shellcompanies',
  SILVER: 'ind_silver',
  SOFTWARE_APPLICATION: 'ind_softwareapplication',
  SOFTWARE_INFRASTRUCTURE: 'ind_softwareinfrastructure',
  SOLAR: 'ind_solar',
  SPECIALTY_BUSINESS_SERVICES: 'ind_specialtybusinessservices',
  SPECIALTY_CHEMICALS: 'ind_specialtychemicals',
  SPECIALTY_INDUSTRIAL_MACHINERY: 'ind_specialtyindustrialmachinery',
  SPECIALTY_RETAIL: 'ind_specialtyretail',
  STAFFING_EMPLOYMENT_SERVICES: 'ind_staffingemploymentservices',
  STEEL: 'ind_steel',
  TELECOM_SERVICES: 'ind_telecomservices',
  TEXTILE_MANUFACTURING: 'ind_textilemanufacturing',
  THERMAL_COAL: 'ind_thermalcoal',
  TOBACCO: 'ind_tobacco',
  TOOLS_ACCESSORIES: 'ind_toolsaccessories',
  TRAVEL_SERVICES: 'ind_travelservices',
  TRUCKING: 'ind_trucking',
  URANIUM: 'ind_uranium',
  UTILITIES_DIVERSIFIED: 'ind_utilitiesdiversified',
  UTILITIES_INDEPENDENT_POWER_PRODUCERS: 'ind_utilitiesindependentpowerproducers',
  UTILITIES_REGULATED_ELECTRIC: 'ind_utilitiesregulatedelectric',
  UTILITIES_REGULATED_GAS: 'ind_utilitiesregulatedgas',
  UTILITIES_REGULATED_WATER: 'ind_utilitiesregulatedwater',
  UTILITIES_RENEWABLE: 'ind_utilitiesrenewable',
  WASTE_MANAGEMENT: 'ind_wastemanagement',
  } as const;

/** Union of all known screener industry filter ID values. */
export type ScreenerIndustryFilter = (typeof ScreenerIndustryFilter)[keyof typeof ScreenerIndustryFilter];

// ---------------------------------------------------------------------------
// Screener analyst recommendation filters
// ---------------------------------------------------------------------------

export const ScreenerAnalystRecommendationFilter = {
  STRONG_BUY: 'an_recom_strongbuy',
  BUY_BETTER: 'an_recom_buybetter',
  BUY: 'an_recom_buy',
  HOLD_BETTER: 'an_recom_holdbetter',
  HOLD: 'an_recom_hold',
  HOLD_WORSE: 'an_recom_holdworse',
  SELL: 'an_recom_sell',
  SELL_WORSE: 'an_recom_sellworse',
  STRONG_SELL: 'an_recom_strongsell',
} as const;

/** Union of all known screener analyst recommendation filter ID values. */
export type ScreenerAnalystRecommendationFilter = (typeof ScreenerAnalystRecommendationFilter)[keyof typeof ScreenerAnalystRecommendationFilter];

// ---------------------------------------------------------------------------
// Screener current volume filters
// ---------------------------------------------------------------------------

export const ScreenerCurrentVolumeFilter = {
  UNDER_50K: 'sh_curvol_u50k',
  UNDER_100K: 'sh_curvol_u100k',
  UNDER_500K: 'sh_curvol_u500k',
  UNDER_750K: 'sh_curvol_u750k',
  UNDER_1M: 'sh_curvol_u1000',
  OVER_0: 'sh_curvol_o0',
  OVER_50K: 'sh_curvol_o50k',
  OVER_100K: 'sh_curvol_o100k',
  OVER_200K: 'sh_curvol_o200k',
  OVER_300K: 'sh_curvol_o300k',
  OVER_400K: 'sh_curvol_o400k',
  OVER_500K: 'sh_curvol_o500k',
  OVER_750K: 'sh_curvol_o750k',
  OVER_1M: 'sh_curvol_o1000',
  OVER_2M: 'sh_curvol_o2000',
  OVER_5M: 'sh_curvol_o5000',
  OVER_10M: 'sh_curvol_o10000',
  OVER_20M: 'sh_curvol_o20000',
  OVER_50P: 'sh_curvol_o50sf',
  OVER_100P: 'sh_curvol_o100sf',
  UNDER_1M_USD: 'sh_curvol_uusd1000',
  UNDER_10M_USD: 'sh_curvol_uusd10000',
  UNDER_100M_USD: 'sh_curvol_uusd100000',
  UNDER_1B_USD: 'sh_curvol_uusd1000000',
  OVER_1M_USD: 'sh_curvol_ousd1000',
  OVER_10M_USD: 'sh_curvol_ousd10000',
  OVER_100M_USD: 'sh_curvol_ousd100000',
  OVER_1B_USD: 'sh_curvol_ousd1000000',
} as const;

/** Union of all known screener current volume filter ID values. */
export type ScreenerCurrentVolumeFilter = (typeof ScreenerCurrentVolumeFilter)[keyof typeof ScreenerCurrentVolumeFilter];

// ---------------------------------------------------------------------------
// Screener shares outstanding filters
// ---------------------------------------------------------------------------

export const ScreenerSharesOutstandingFilter = {
  UNDER_1M: 'sh_outstanding_u1000',
  UNDER_5M: 'sh_outstanding_u5000',
  UNDER_10M: 'sh_outstanding_u10000',
  UNDER_20M: 'sh_outstanding_u20000',
  UNDER_50M: 'sh_outstanding_u50000',
  UNDER_100M: 'sh_outstanding_u100000',
  OVER_1M: 'sh_outstanding_o1',
  OVER_2M: 'sh_outstanding_o2',
  OVER_5M: 'sh_outstanding_o5',
  OVER_10M: 'sh_outstanding_o10',
  OVER_20M: 'sh_outstanding_o20',
  OVER_50M: 'sh_outstanding_o50',
  OVER_100M: 'sh_outstanding_o100',
  OVER_200M: 'sh_outstanding_o200',
  OVER_500M: 'sh_outstanding_o500',
  OVER_1B: 'sh_outstanding_o1000',
} as const;

/** Union of all known screener shares outstanding filter ID values. */
export type ScreenerSharesOutstandingFilter = (typeof ScreenerSharesOutstandingFilter)[keyof typeof ScreenerSharesOutstandingFilter];

// ---------------------------------------------------------------------------
// Screener country filters
// ---------------------------------------------------------------------------

export const ScreenerCountryFilter = {
  USA: 'geo_usa',
  FOREIGN: 'geo_notusa',
  ASIA: 'geo_asia',
  EUROPE: 'geo_europe',
  LATIN_AMERICA: 'geo_latinamerica',
  BRIC: 'geo_bric',
  ARGENTINA: 'geo_argentina',
  AUSTRALIA: 'geo_australia',
  BELGIUM: 'geo_belgium',
  BRAZIL: 'geo_brazil',
  CANADA: 'geo_canada',
  CHINA: 'geo_china',
  FRANCE: 'geo_france',
  GERMANY: 'geo_germany',
  GREECE: 'geo_greece',
  HONG_KONG: 'geo_hongkong',
  HUNGARY: 'geo_hungary',
  ICELAND: 'geo_iceland',
  INDIA: 'geo_india',
  INDONESIA: 'geo_indonesia',
  IRELAND: 'geo_ireland',
  ISRAEL: 'geo_israel',
  ITALY: 'geo_italy',
  JAPAN: 'geo_japan',
  JORDAN: 'geo_jordan',
  KAZAKHSTAN: 'geo_kazakhstan',
  LUXEMBOURG: 'geo_luxembourg',
  MALAYSIA: 'geo_malaysia',
  MEXMALTA: 'geo_malta',
  MEXICO: 'geo_mexico',
  MONACO: 'geo_monaco',
  NETHERLANDS: 'geo_netherlands',
  NEW_ZEALAND: 'geo_newzealand',
  NORWAY: 'geo_norway',
  PANAMA: 'geo_panama',
  PERU: 'geo_peru',
  PHILIPPINES: 'geo_philippines',
  PORTUGAL: 'geo_portugal',
  RUSSIA: 'geo_russia',
  SINGAPORE: 'geo_singapore',
  SOUTH_AFRICA: 'geo_southafrica',
  SOUTH_KOREA: 'geo_southkorea',
  SPAIN: 'geo_spain',
  SWEDEN: 'geo_sweden',
  SWITZERLAND: 'geo_switzerland',
  TAIWAN: 'geo_taiwan',
  THAILAND: 'geo_thailand',
  TURKEY: 'geo_turkey',
  UAE: 'geo_unitedarabemirates',
  UNITED_KINGDOM: 'geo_unitedkingdom',
  URUGUAY: 'geo_uruguay',
  VIETNAM: 'geo_vietnam',
} as const;

/** Union of all known screener country filter ID values. */
export type ScreenerCountryFilter = (typeof ScreenerCountryFilter)[keyof typeof ScreenerCountryFilter];

// ---------------------------------------------------------------------------
// Screener option/short filters
// ---------------------------------------------------------------------------

export const ScreenerOptionShortFilter = {
  OPTIONABLE: 'sh_opt_option',
  SHORTABLE: 'sh_opt_short',
  NOT_OPTIONABLE: 'sh_opt_notoption',
  NOT_SHORTABLE: 'sh_opt_notshort',
  OPTIONABLE_AND_SHORTABLE: 'sh_opt_optionshort',
  OPTIONABLE_AND_NOT_SHORTABLE: 'sh_opt_optionnotshort',
  NOT_OPTIONABLE_AND_SHORTABLE: 'sh_opt_notoptionshort',
  NOT_OPTIONABLE_AND_NOT_SHORTABLE: 'sh_opt_notoptionnotshort',
  SHORT_SALE_RESTRICTED: 'sh_opt_restricted',
  HALTED: 'sh_opt_halted',
  OVER_10K_AVAILABLE_TO_SHORT: 'sh_opt_so10k',
  OVER_100K_AVAILABLE_TO_SHORT: 'sh_opt_so100k',
  OVER_1M_AVAILABLE_TO_SHORT: 'sh_opt_so1m',
  OVER_10M_AVAILABLE_TO_SHORT: 'sh_opt_so10m',
  OVER_1M_USD_AVAILABLE_TO_SHORT: 'sh_opt_uo1m',
  OVER_10M_USD_AVAILABLE_TO_SHORT: 'sh_opt_uo10m',
  OVER_100M_USD_AVAILABLE_TO_SHORT: 'sh_opt_uo100m',
  OVER_1B_USD_AVAILABLE_TO_SHORT: 'sh_opt_uo1b',
} as const;

/** Union of all known screener option/short filter ID values. */
export type ScreenerOptionShortFilter = (typeof ScreenerOptionShortFilter)[keyof typeof ScreenerOptionShortFilter];

// ---------------------------------------------------------------------------
// Screener trades filters
// ---------------------------------------------------------------------------

export const ScreenerTradesFilter = {
  UNDER_100: 'sh_trades_u100',
  UNDER_500: 'sh_trades_u500',
  UNDER_1K: 'sh_trades_u1000',
  UNDER_5K: 'sh_trades_u5000',
  UNDER_10K: 'sh_trades_u10000',
  OVER_0: 'sh_trades_o0',
  OVER_100: 'sh_trades_o100',
  OVER_500: 'sh_trades_o500',
  OVER_1K: 'sh_trades_o1000',
  OVER_5K: 'sh_trades_o5000',
  OVER_10K: 'sh_trades_o10000',
  OVER_15K: 'sh_trades_o15000',
  OVER_20K: 'sh_trades_o20000',
  OVER_50K: 'sh_trades_o50000',
  OVER_100K: 'sh_trades_o100000',
} as const;

/** Union of all known screener trades filter ID values. */
export type ScreenerTradesFilter = (typeof ScreenerTradesFilter)[keyof typeof ScreenerTradesFilter];

// ---------------------------------------------------------------------------
// Screener float filters
// ---------------------------------------------------------------------------

export const ScreenerFloatFilter = {
  UNDER_1M: 'sh_float_u1',
  UNDER_5M: 'sh_float_u5',
  UNDER_10M: 'sh_float_u10',
  UNDER_20M: 'sh_float_u20',
  UNDER_50M: 'sh_float_u50',
  UNDER_100M: 'sh_float_u100',
  OVER_1M: 'sh_float_o1',
  OVER_2M: 'sh_float_o2',
  OVER_5M: 'sh_float_o5',
  OVER_10M: 'sh_float_o10',
  OVER_20M: 'sh_float_o20',
  OVER_50M: 'sh_float_o50',
  OVER_100M: 'sh_float_o100',
  OVER_200M: 'sh_float_o200',
  OVER_500M: 'sh_float_o500',
  OVER_1B: 'sh_float_o1000',
  UNDER_10_P: 'sh_float_u10p',
  UNDER_20_P: 'sh_float_u20p',
  UNDER_30_P: 'sh_float_u30p',
  UNDER_40_P: 'sh_float_u40p',
  UNDER_50_P: 'sh_float_u50p',
  UNDER_60_P: 'sh_float_u60p',
  UNDER_70_P: 'sh_float_u70p',
  UNDER_80_P: 'sh_float_u80p',
  UNDER_90_P: 'sh_float_u90p',
  OVER_10_P: 'sh_float_o10p',
  OVER_20_P: 'sh_float_o20p',
  OVER_30_P: 'sh_float_o30p',
  OVER_40_P: 'sh_float_o40p',
  OVER_50_P: 'sh_float_o50p',
  OVER_60_P: 'sh_float_o60p',
  OVER_70_P: 'sh_float_o70p',
  OVER_80_P: 'sh_float_o80p',
  OVER_90_P: 'sh_float_o90p',
} as const;

/** Union of all known screener float filter ID values. */
export type ScreenerFloatFilter = (typeof ScreenerFloatFilter)[keyof typeof ScreenerFloatFilter];


