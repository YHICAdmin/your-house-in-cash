export type NearbyCity = {
  name: string;
  slug: string;
};

export type AreaStatistics = {
  dataPeriod: string;
  medianDaysOnMarket: string;
  medianPricePerSquareFoot: string;
  medianSalePrice: string;
  homesSold: string;
  sourceName: string;
  sourceUrl: string;
  supportingCopy: {
    medianSalePrice: string;
    homesSold: string;
    medianPricePerSquareFoot: string;
    medianDaysOnMarket: string;
  };
};

export type AreaPageData = {
  city: string;
  googleMapsEmbedUrl: string;
  intro: {
    headline: string;
    supportingCopy: string;
  };
  nearbyCities: readonly [
    NearbyCity,
    NearbyCity,
    NearbyCity,
    NearbyCity,
    NearbyCity,
    NearbyCity,
  ];
  localPhoto: LocalPhoto;
  posInspection?: PosInspection;
  slug: string;
  statistics?: AreaStatistics;
};

export type PosInspection = {
  shortAnswer: string;
  sources: readonly {
    label: string;
    url: string;
  }[];
  status: "not-required" | "required";
  tableRows?: readonly {
    question: string;
    requirement: string;
  }[];
  verifiedDate: string;
};

export type LocalPhoto = {
  alt: string;
  attributionRequired: boolean;
  license: string;
  licenseUrl?: string;
  photographer: string;
  sourceUrl: string;
  src: string;
  title: string;
};

export function getAreaPagePath(citySlug: string) {
  if (citySlug === "cleveland") return "/";
  return `/sell-your-house-fast-as-is-${citySlug}`;
}

const localPhotos: Record<string, LocalPhoto> = {
  bedford: { src: "/images/local-area/bedford.jpg", alt: "Bedford Historic District in Bedford, Ohio", title: "Bedford Historic District, Bedford, Ohio", photographer: "Bennett-ne", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bedford_Historic_District,_Bedford,_Ohio.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "bedford-heights": { src: "/images/local-area/bedford-heights.jpg", alt: "Cleveland Holocaust Memorial in Bedford Heights, Ohio", title: "Holocaust Memorial Cleveland Ohio", photographer: "Arnold H Berger", sourceUrl: "https://commons.wikimedia.org/wiki/File:Holmem-scene-large.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  cleveland: { src: "/images/local-area/cleveland.jpg", alt: "Cleveland skyline viewed from Lakewood Park", title: "Cleveland skyline from Lakewood Park, January 2026", photographer: "Erik Drost", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cleveland_skyline_from_Lakewood_Park,_January_2026.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", attributionRequired: true },
  "cleveland-heights": { src: "/images/local-area/cleveland-heights.jpg", alt: "Taylor Tudors building in Cleveland Heights, Ohio", title: "North building - Taylor Tudors", photographer: "Tim Evanson", sourceUrl: "https://commons.wikimedia.org/wiki/File:North_building_-_Taylor_Tudors.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
  euclid: { src: "/images/local-area/euclid.jpg", alt: "Old City Hall in Euclid, Ohio", title: "Euclid (Ohio) - Old City Hall", photographer: "stu_spivack", sourceUrl: "https://commons.wikimedia.org/wiki/File:Euclid_(Ohio)_-_Old_City_Hall.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
  "garfield-heights": { src: "/images/local-area/garfield-heights.jpg", alt: "Garfield Heights City Hall and Civic Center", title: "Garfield Heights city hall", photographer: "AJHalliwell", sourceUrl: "https://commons.wikimedia.org/wiki/File:Garfield_Heights_city_hall.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "highland-heights": { src: "/images/local-area/highland-heights.jpg", alt: "Air traffic control tower at Cuyahoga County Airport in Highland Heights", title: "CGF TOWER", photographer: "Cole Goldberg", sourceUrl: "https://commons.wikimedia.org/wiki/File:CGF_TOWER.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  independence: { src: "/images/local-area/independence.jpg", alt: "Independence Presbyterian Church in Independence, Ohio", title: "Independence Presbyterian Church", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Independence_Presbyterian_Church.jpg", license: "Public domain", attributionRequired: false },
  lyndhurst: { src: "/images/local-area/lyndhurst.jpg", alt: "Old Euclid District 4 Schoolhouse in Lyndhurst, Ohio", title: "Old Euclid District 4 Schoolhouse in Lyndhurst", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Old_Euclid_District_4_Schoolhouse_in_Lyndhurst.jpg", license: "Public domain", attributionRequired: false },
  "maple-heights": { src: "/images/local-area/maple-heights.jpg", alt: "Homes on Vine Street in Maple Heights, Ohio", title: "Southern end of Vine Street, Maple Heights", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Southern_end_of_Vine_Street,_Maple_Heights.jpg", license: "Public domain", attributionRequired: false },
  "mayfield-heights": { src: "/images/local-area/mayfield-heights.jpg", alt: "Mayfield Heights City Hall", title: "Mayfield City Hall - panoramio", photographer: "mil199", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mayfield_City_Hall_-_panoramio.jpg", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", attributionRequired: true },
  "mayfield-village": { src: "/images/local-area/mayfield-village.jpg", alt: "Old Center School in Mayfield, Ohio", title: "Old Center School in Mayfield", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Old_Center_School_in_Mayfield.jpg", license: "Public domain", attributionRequired: false },
  "middleburg-heights": { src: "/images/local-area/middleburg-heights.jpg", alt: "Municipal Center flower displays and City Hall in Middleburg Heights", title: "Middleburg Heights 9-14-24 combined IMG 7312", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Middleburg_Heights_9-14-24_combined_IMG_7312.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  parma: { src: "/images/local-area/parma.png", alt: "Cleveland skyline viewed from State Road in Parma, Ohio", title: "Parma, OH - Cleveland Skyline from State Rd", photographer: "JSmetana", sourceUrl: "https://commons.wikimedia.org/wiki/File:Parma,_OH_-_Cleveland_Skyline_from_State_Rd.png", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "parma-heights": { src: "/images/local-area/parma-heights.jpg", alt: "Robert W. Henry House in Parma Heights, Ohio", title: "Robert W. Henry House, Parma Heights", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Robert_W._Henry_House,_Parma_Heights.jpg", license: "Public domain", attributionRequired: false },
  "richmond-heights": { src: "/images/local-area/richmond-heights.jpg", alt: "Main house at Greenwood Farm in Richmond Heights, Ohio", title: "The main house at Greenwood Farm", photographer: "RHOhio", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_main_house_at_Greenwood_Farm.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "seven-hills": { src: "/images/local-area/seven-hills.jpg", alt: "John Froelich House in Seven Hills, Ohio", title: "John Froelich House", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Froelich_House.jpg", license: "Public domain", attributionRequired: false },
  solon: { src: "/images/local-area/solon.jpg", alt: "Solon City Hall in Solon, Ohio", title: "SolonCityHall", photographer: "Mayor Pez", sourceUrl: "https://commons.wikimedia.org/wiki/File:SolonCityHall.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "south-euclid": { src: "/images/local-area/south-euclid.jpg", alt: "South Euclid War Memorial", title: "South Euclid War Memorial 2", photographer: "User:THD3", sourceUrl: "https://commons.wikimedia.org/wiki/File:South_Euclid_War_Memorial_2.jpg", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", attributionRequired: true },
  "university-heights": { src: "/images/local-area/university-heights.jpg", alt: "Saint Ignatius Hall at John Carroll University in University Heights", title: "Administration Building (Saint Ignatius Hall), John Carroll University, University Heights, OH", photographer: "w_lemay", sourceUrl: "https://commons.wikimedia.org/wiki/File:Administration_Building_(Saint_Ignatius_Hall),_John_Carroll_University,_University_Heights,_OH.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
};

Object.assign(localPhotos, {
  "bay-village": { src: "/images/local-area/bay-village.jpg", alt: "Huntington Beach in Bay Village with Cleveland in the distance", title: "Huntington Beach With Downtown Cleveland In Background", photographer: "Heather McLaughlin", sourceUrl: "https://commons.wikimedia.org/wiki/File:Huntington_Beach_With_Downtown_Cleveland_In_Background.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  beachwood: { src: "/images/local-area/beachwood.jpg", alt: "Beachwood water tower", title: "Beachwood water tower", photographer: "Nick22aku", sourceUrl: "https://commons.wikimedia.org/wiki/File:Beachwood_water_tower.jpg", license: "Public domain", attributionRequired: false },
  berea: { src: "/images/local-area/berea.jpg", alt: "Downtown Berea, Ohio", title: "Berea OH", photographer: "Geoffrey.landis", sourceUrl: "https://commons.wikimedia.org/wiki/File:Berea_OH.jpg", license: "CC BY-SA 1.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/1.0", attributionRequired: true },
  bratenahl: { src: "/images/local-area/bratenahl.jpg", alt: "Gwinn Estate gateway in Bratenahl", title: "Gwinn Estate gateway", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gwinn_Estate_gateway.jpg", license: "Public domain", attributionRequired: false },
  brecksville: { src: "/images/local-area/brecksville.jpg", alt: "Jonas Coonrad House in Brecksville", title: "Jonas Coonrad House NPS", photographer: "National Park Service", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jonas_Coonrad_House_NPS.jpg", license: "Public domain", attributionRequired: false },
  "broadview-heights": { src: "/images/local-area/broadview-heights.jpg", alt: "View across Broadview Heights", title: "City of Broadview Heights, Ohio", photographer: "Highvolt", sourceUrl: "https://commons.wikimedia.org/wiki/File:City_of_Broadview_Heights,_Ohio_from_Broadview_Commons_Shopping_Center,_June_2014.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "brook-park": { src: "/images/local-area/brook-park.jpg", alt: "Homes along Richard Drive in Brook Park, Ohio", title: "Richard from Smith, Brook Park", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Richard_from_Smith,_Brook_Park.jpg", license: "Public domain", attributionRequired: false },
  brooklyn: { src: "/images/local-area/brooklyn.jpg", alt: "Welcome sign in Brooklyn, Ohio", title: "Brooklyn Welcome Sign", photographer: "Vaultguy999", sourceUrl: "https://commons.wikimedia.org/wiki/File:BrooklynWelcomeSign.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "brooklyn-heights": { src: "/images/local-area/brooklyn-heights.jpg", alt: "Brooklyn Heights, Ohio", title: "Brooklyn Heights", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Brooklyn_Heights(8)9-15-24_thumbnail_IMG_7510.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "chagrin-falls": { src: "/images/local-area/chagrin-falls.jpg", alt: "Chagrin Falls waterfall and bridge", title: "Chagrin Falls, Ohio", photographer: "Paul Sableman", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chagrin_Falls,_Ohio.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  "cuyahoga-heights": { src: "/images/local-area/cuyahoga-heights.jpg", alt: "Cuyahoga Heights Village Hall", title: "Cuyahoga Heights village hall", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuyahoga_heights_village_hall.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "east-cleveland": { src: "/images/local-area/east-cleveland.jpg", alt: "East Cleveland City Hall", title: "East Cleveland City Hall", photographer: "Greg", sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Cleveland_City_Hall.jpg", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", attributionRequired: true },
  "fairview-park": { src: "/images/local-area/fairview-park.jpg", alt: "Bain Cabin in Fairview Park", title: "Fairview Park Bain Cabin", photographer: "Vinceye", sourceUrl: "https://commons.wikimedia.org/wiki/File:Fairview_Park_Bain_Cabin.jpg", license: "CC0", attributionRequired: false },
  "gates-mills": { src: "/images/local-area/gates-mills.jpg", alt: "Gates Mills Methodist Episcopal Church", title: "Gates Mills Methodist Episcopal Church", photographer: "Jf1123581321", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gates_Mills_Methodist_Episcopal_Church_Joseph_Frost.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  glenwillow: { src: "/images/local-area/glenwillow.jpg", alt: "Glenwillow Village Hall", title: "Glenwillow village hall", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Glenwillow_village_hall.jpg", license: "Public domain", attributionRequired: false },
  "highland-hills": { src: "/images/local-area/highland-hills.jpg", alt: "Cuyahoga Community College in Highland Hills", title: "Cuyahoga Community College, Highland Hills", photographer: "Ohio Redevelopment Projects", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuyahoga_Community_College,_Highland_Hills.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  lakewood: { src: "/images/local-area/lakewood.jpg", alt: "Lakewood Downtown Historic District", title: "Lakewood Downtown Historic District", photographer: "Catsmeowmeow", sourceUrl: "https://commons.wikimedia.org/wiki/File:OH_Cuyahoga_Lakewood_Downtown_Historic_District_016.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  linndale: { src: "/images/local-area/linndale.jpg", alt: "Linndale Village Hall", title: "Linndale village hall", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Linndale_village_hall.jpg", license: "Public domain", attributionRequired: false },
  "north-olmsted": { src: "/images/local-area/north-olmsted.jpg", alt: "North Olmsted Old Town Hall", title: "North Olmsted Old Town Hall", photographer: "Ameike", sourceUrl: "https://commons.wikimedia.org/wiki/File:North_Olmsted_Old_Town_Hall.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "north-randall": { src: "/images/local-area/north-randall.jpg", alt: "Thistledown Racino racetrack in North Randall, Ohio", title: "Thistledown Racino, North Randall, Ohio", photographer: "Nicholas Eckhart", sourceUrl: "https://commons.wikimedia.org/wiki/File:Thistledown_Racino,_North_Randall,_Ohio.jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  "north-royalton": { src: "/images/local-area/north-royalton.jpg", alt: "John M. Annis House in North Royalton", title: "John M. Annis House", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:John_M._Annis_House.jpg", license: "Public domain", attributionRequired: false },
  "oakwood-village": { src: "/images/local-area/oakwood-village.jpg", alt: "Alonzo Drake House in Oakwood Village", title: "Alonzo Drake House", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Alonzo_Drake_House.jpg", license: "Public domain", attributionRequired: false },
  "olmsted-falls": { src: "/images/local-area/olmsted-falls.jpg", alt: "Grand Pacific Hotel in Olmsted Falls", title: "Grand Pacific Hotel in Olmsted Falls", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Grand_Pacific_Hotel_in_Olmsted_Falls.jpg", license: "Public domain", attributionRequired: false },
  "orange-village": { src: "/images/local-area/orange-village.jpg", alt: "Orange Village, Ohio", title: "Orange Village", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Orange_8-3-25_thumbnail_IMG_1.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
  "pepper-pike": { src: "/images/local-area/pepper-pike.jpg", alt: "Horses in Pepper Pike", title: "Pepper Pike Horses", photographer: "Hannah Wolfe", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pepper_Pike_Horses.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "rocky-river": { src: "/images/local-area/rocky-river.jpg", alt: "Aerial view of Rocky River, Ohio", title: "Rocky River Ohio aerial view", photographer: "Ken Winters, U.S. Army Corps of Engineers", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rocky_River_Ohio_aerial_view.jpg", license: "Public domain", attributionRequired: false },
  "shaker-heights": { src: "/images/local-area/shaker-heights.jpg", alt: "Homes in Shaker Heights", title: "Shaker Heights Houses", photographer: "Spencer", sourceUrl: "https://commons.wikimedia.org/wiki/File:Shaker_Heights_Houses.jpg", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5", attributionRequired: true },
  strongsville: { src: "/images/local-area/strongsville.jpg", alt: "Strong House in Strongsville", title: "Strong House", photographer: "Chris Light", sourceUrl: "https://commons.wikimedia.org/wiki/File:Strong_House_2.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", attributionRequired: true },
  "valley-view": { src: "/images/local-area/valley-view.jpg", alt: "Wilson's Mill near Valley View", title: "Wilson's Mill", photographer: "Frank John Aleksandrowicz", sourceUrl: "https://commons.wikimedia.org/wiki/File:WILSON%27S_MILL,_FORMERLY_KNOWN_AS_ALEXANDER%27S_MILL,_ON_THE_OHIO-ERIE_CANAL_SOUTH_OF_ALEXANDER_ROAD_NEAR_VALLEY_VIEW..._-_NARA_-_558001.jpg", license: "Public domain", attributionRequired: false },
  "walton-hills": { src: "/images/local-area/walton-hills.jpg", alt: "Meadowpark Drive in Walton Hills", title: "Meadowpark Drive, WH", photographer: "Nyttend", sourceUrl: "https://commons.wikimedia.org/wiki/File:Meadowpark_Drive,_WH.jpg", license: "Public domain", attributionRequired: false },
  "warrensville-heights": { src: "/images/local-area/warrensville-heights.jpg", alt: "Warrensville Heights Town Center", title: "Warrensville Heights Town Center Project", photographer: "Ohio Redevelopment Projects - ODSA", sourceUrl: "https://commons.wikimedia.org/wiki/File:Warrensville_Heights-Town_Center_Project_(CORF).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", attributionRequired: true },
  westlake: { src: "/images/local-area/westlake.jpg", alt: "Westlake Porter Public Library", title: "Westlake Porter Public Library", photographer: "Kulshrax", sourceUrl: "https://commons.wikimedia.org/wiki/File:Westlake_Porter_Public_Library.jpg", license: "Public domain", attributionRequired: false },
  woodmere: { src: "/images/local-area/woodmere.jpg", alt: "Woodmere, Ohio", title: "Woodmere", photographer: "SilentMatt Psychedelic", sourceUrl: "https://commons.wikimedia.org/wiki/File:Woodmere_8-17-25_thumbnail_IMG_3899b.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", attributionRequired: true },
} satisfies Record<string, LocalPhoto>);

export const defaultLocalPhoto = localPhotos.cleveland;

type AreaRecord = Pick<AreaPageData, "city" | "slug" | "nearbyCities" | "posInspection"> & {
  statistics?: Omit<AreaStatistics, "supportingCopy">;
  googleMapsEmbedUrl?: string;
};

function createArea(record: AreaRecord): AreaPageData {
  const { city } = record;
  return {
    ...record,
    localPhoto: localPhotos[record.slug] ?? defaultLocalPhoto,
    googleMapsEmbedUrl: record.googleMapsEmbedUrl ??
      `https://www.google.com/maps?q=${encodeURIComponent(`${city}, Ohio, USA`)}&output=embed`,
    intro: {
      headline: `We Know ${city}`,
      supportingCopy: city === "Cleveland"
        ? "Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland."
        : `Whether you’re selling a home you live in or a rental property, we look at its condition, your situation, and the local ${city} market to prepare a straightforward as-is cash offer.`,
    },
    statistics: record.statistics && {
      ...record.statistics,
      supportingCopy: {
        medianSalePrice: city === "Cleveland"
          ? "See what homes are selling for across Cleveland and get a quick sense of the local market."
          : `See what homes are selling for across ${city}.`,
        homesSold: `Recent sales activity across ${city}.`,
        medianPricePerSquareFoot: `Compare ${city} home values by square foot.`,
        medianDaysOnMarket: `See how long ${city} homes typically stay on the market before selling.`,
      },
    },
  };
}

// Verified Redfin snapshots and the approved recommendation mapping are documented
// in project-documentation/website-specification/content/areas.md.
const bedfordArea = createArea({
  city: "Bedford",
  slug: "bedford",
  statistics: {
    medianSalePrice: "$164,921",
    homesSold: "46",
    medianPricePerSquareFoot: "$159/sq ft",
    medianDaysOnMarket: "34 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1289/OH/Bedford/housing-market"
  },
  nearbyCities: [
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Bedford Heights",
      "slug": "bedford-heights"
    },
    {
      "name": "Solon",
      "slug": "solon"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    }
  ]
});

const bedfordHeightsArea = createArea({
  "city": "Bedford Heights",
  "slug": "bedford-heights",
  "statistics": {
    "medianSalePrice": "$199,905",
    "homesSold": "23",
    "medianPricePerSquareFoot": "$171/sq ft",
    "medianDaysOnMarket": "33 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/1304/OH/Bedford-Heights/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Solon",
      "slug": "solon"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    }
  ]
});

export const clevelandArea = createArea({
  city: "Cleveland",
  slug: "cleveland",
  posInspection: {
    status: "not-required",
    shortAnswer: "Cleveland does not require a point-of-sale inspection for a residential home transfer. It does require a Certificate of Disclosure before a voluntary transfer of one- to four-unit residential property; the certificate reports City records and is not a POS inspection.",
    sources: [
      {
        label: "City of Cleveland: Certificates of Disclosure",
        url: "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/records-administration/certificates-disclosure",
      },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$149,929",
    homesSold: "1,116",
    medianPricePerSquareFoot: "$92/sq ft",
    medianDaysOnMarket: "32 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/4145/OH/Cleveland/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    }
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191251.91240052145!2d-81.70586405!3d41.497532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH%2C%20USA!5e0!3m2!1sen!2sil!4v1788783140965!5m2!1sen!2sil"
});

const clevelandHeightsArea = createArea({
  city: "Cleveland Heights",
  slug: "cleveland-heights",
  posInspection: {
    status: "required",
    shortAnswer: "The seller must obtain a Point-of-Sale Certificate of Inspection before entering into a sale agreement. A sale can close with unresolved Class A violations when the required escrow and purchaser acknowledgement are in place.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering into an agreement to sell any residential or commercial property. The Certificate of Inspection is valid for one year from issuance." },
      { question: "What does it cost?", requirement: "$200 for the first unit and $50 for each additional unit." },
      { question: "What happens if there are violations?", requirement: "The buyer may assume violations. Uncorrected Class A violations require escrow of at least $1,000 and 125% of the City’s estimated repair cost before title transfer." },
      { question: "What paperwork is required?", requirement: "The seller must give the buyer the Certificate of Inspection and Certificate of Compliance, if available. A purchaser-signed Acknowledgement Form must be provided to Housing Inspections before title transfer." },
      { question: "How do I apply?", requirement: "Apply and schedule through the City’s online portal, or submit an application through Housing Inspections." },
    ],
    sources: [
      { label: "City of Cleveland Heights: Point-of-Sale Inspections", url: "https://www.clevelandheights.gov/205/Point-of-Sale-Inspections" },
      { label: "City of Cleveland Heights: Escrow Requirements", url: "https://www.clevelandheights.gov/209/Escrow-Requirements" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$243,661",
    homesSold: "183",
    medianPricePerSquareFoot: "$133/sq ft",
    medianDaysOnMarket: "28 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/4153/OH/Cleveland-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

export const euclidArea = createArea({
  city: "Euclid",
  slug: "euclid",
  statistics: {
    medianSalePrice: "$172,168",
    homesSold: "150",
    medianPricePerSquareFoot: "$119/sq ft",
    medianDaysOnMarket: "34 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/6612/OH/Euclid/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "Highland Heights",
      "slug": "highland-heights"
    }
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47744.50783599262!2d-81.56199711803099!3d41.59019609607561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fe5dbe9c8b3b%3A0x57cade33d51809cd!2sEuclid%2C%20OH%2C%20USA!5e0!3m2!1sen!2sca!4v1748013566014!5m2!1sen!2sca"
});

const garfieldHeightsArea = createArea({
  city: "Garfield Heights",
  slug: "garfield-heights",
  posInspection: {
    status: "required",
    shortAnswer: "A Point-of-Sale inspection and Compliance Certificate are required before title transfer. The buyer can assume outstanding violations by completing the City’s required forms and must complete the repairs within 90 days after transfer.",
    tableRows: [
      { question: "When is it required?", requirement: "For all structures being sold, transferred, or otherwise conveyed. A Compliance Certificate is required for title transfer." },
      { question: "What does the City inspect?", requirement: "The City inspects the exterior. An interior inspection requires the City’s consent form." },
      { question: "Can the sale close with violations?", requirement: "Yes. The buyer may assume outstanding violations by submitting a notarized Affidavit, and must complete the repairs within 90 days after title transfer." },
      { question: "What paperwork is required?", requirement: "The buyer must submit a notarized Buyer’s Acknowledgement Form. If violations are assumed, a notarized Affidavit is also required before the Compliance Certificate is issued." },
      { question: "How do I apply?", requirement: "Use the City’s current Point-of-Sale application and submit the required forms to the Building Department." },
    ],
    sources: [
      { label: "City of Garfield Heights: Point-of-Sale Inspections", url: "https://garfieldhts.org/168/Point-of-Sale-Inspections" },
      { label: "City of Garfield Heights: Buyer Affidavit (PDF)", url: "https://garfieldhts.org/DocumentCenter/View/2867/Affidavit-PDF-updated-8-12-2024" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$151,028",
    homesSold: "87",
    medianPricePerSquareFoot: "$115/sq ft",
    medianDaysOnMarket: "22 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/7498/OH/Garfield-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Parma",
      "slug": "parma"
    }
  ]
});

const highlandHeightsArea = createArea({
  "city": "Highland Heights",
  "slug": "highland-heights",
  "statistics": {
    "medianSalePrice": "$537,000",
    "homesSold": "37",
    "medianPricePerSquareFoot": "$203/sq ft",
    "medianDaysOnMarket": "19 days",
    "dataPeriod": "June–August 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/8967/OH/Highland-Heights/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Mayfield Village",
      "slug": "mayfield-village"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

const independenceArea = createArea({
  city: "Independence",
  slug: "independence",
  statistics: {
    medianSalePrice: "$432,244",
    homesSold: "12",
    medianPricePerSquareFoot: "$196/sq ft",
    medianDaysOnMarket: "32 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/9463/OH/Independence/housing-market"
  },
  nearbyCities: [
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    }
  ]
});

const lyndhurstArea = createArea({
  city: "Lyndhurst",
  slug: "lyndhurst",
  statistics: {
    medianSalePrice: "$259,876",
    homesSold: "78",
    medianPricePerSquareFoot: "$165/sq ft",
    medianDaysOnMarket: "22 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/11615/OH/Lyndhurst/housing-market"
  },
  nearbyCities: [
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Highland Heights",
      "slug": "highland-heights"
    }
  ]
});

const mapleHeightsArea = createArea({
  city: "Maple Heights",
  slug: "maple-heights",
  posInspection: {
    status: "required",
    shortAnswer: "The owner must obtain a Point of Sale/Property Maintenance inspection before selling or transferring an improved residential property. A sale can proceed with violations still outstanding only when the City’s approved escrow and buyer paperwork requirements are completed.",
    tableRows: [
      {
        question: "When is it required?",
        requirement: "Before selling, transferring, conveying, or entering into an agreement to transfer improved residential property. The initial inspection is valid for six months, subject to the City’s conditions.",
      },
      {
        question: "What does it cost?",
        requirement: "Single-family: $100 plus a $10 administrative fee. Two-family: $150 plus $10. Three-family: $210 plus $10.",
      },
      {
        question: "What does the City inspect?",
        requirement: "The City performs an exterior inspection. An interior inspection is performed only if the owner gives written consent; the owner must be present and provide yard access.",
      },
      {
        question: "Can the sale close with violations?",
        requirement: "Yes, if a City-registered contractor’s written estimate is approved by the Building Official and 100% of that estimate is escrowed. Before title transfer, the Building Department also requires proof of escrow, a Buyer’s Affidavit, and an Assumption of Violations Form.",
      },
      {
        question: "How do I apply?",
        requirement: "Submit the City’s Point of Sale Application to the Maple Heights Building Department. The application requires the owner’s information and a copy of a driver’s license or state-issued ID.",
      },
    ],
    sources: [
      {
        label: "City of Maple Heights: Point of Sale Inspection",
        url: "https://mapleheightsohio.gov/businesses/permits-and-registrations/point-of-sale-inspection/",
      },
      {
        label: "City of Maple Heights: Point of Sale Application (PDF)",
        url: "https://mapleheightsohio.gov/wp-content/uploads/2025/06/Point-of-Sale-Application_2.pdf",
      },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$144,931",
    homesSold: "70",
    medianPricePerSquareFoot: "$120/sq ft",
    medianDaysOnMarket: "25 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/12086/OH/Maple-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    }
  ]
});

const mayfieldHeightsArea = createArea({
  "city": "Mayfield Heights",
  "slug": "mayfield-heights",
  "statistics": {
    "medianSalePrice": "$271,871",
    "homesSold": "69",
    "medianPricePerSquareFoot": "$167/sq ft",
    "medianDaysOnMarket": "31 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/12397/OH/Mayfield-Heights/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Mayfield Village",
      "slug": "mayfield-village"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Highland Heights",
      "slug": "highland-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    }
  ]
});

const mayfieldVillageArea = createArea({
  "city": "Mayfield Village",
  "slug": "mayfield-village",
  "statistics": {
    "medianSalePrice": "$447,287",
    "homesSold": "16",
    "medianPricePerSquareFoot": "$154/sq ft",
    "medianDaysOnMarket": "38 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/12388/OH/Mayfield/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Highland Heights",
      "slug": "highland-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    }
  ]
});

const middleburgHeightsArea = createArea({
  city: "Middleburg Heights",
  slug: "middleburg-heights",
  statistics: {
    medianSalePrice: "$339,838",
    homesSold: "47",
    medianPricePerSquareFoot: "$178/sq ft",
    medianDaysOnMarket: "13 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/12733/OH/Middleburg-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    },
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    }
  ]
});

const parmaArea = createArea({
  city: "Parma",
  slug: "parma",
  statistics: {
    medianSalePrice: "$229,891",
    homesSold: "309",
    medianPricePerSquareFoot: "$181/sq ft",
    medianDaysOnMarket: "13 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/15701/OH/Parma/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Middleburg Heights",
      "slug": "middleburg-heights"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    }
  ]
});

const parmaHeightsArea = createArea({
  city: "Parma Heights",
  slug: "parma-heights",
  statistics: {
    medianSalePrice: "$243,884",
    homesSold: "66",
    medianPricePerSquareFoot: "$168/sq ft",
    medianDaysOnMarket: "15 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/15711/OH/Parma-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Middleburg Heights",
      "slug": "middleburg-heights"
    },
    {
      "name": "Seven Hills",
      "slug": "seven-hills"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    }
  ]
});

const richmondHeightsArea = createArea({
  city: "Richmond Heights",
  slug: "richmond-heights",
  statistics: {
    medianSalePrice: "$270,871",
    homesSold: "24",
    medianPricePerSquareFoot: "$155/sq ft",
    medianDaysOnMarket: "38 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/17125/OH/Richmond-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Highland Heights",
      "slug": "highland-heights"
    }
  ]
});

const sevenHillsArea = createArea({
  city: "Seven Hills",
  slug: "seven-hills",
  statistics: {
    medianSalePrice: "$327,844",
    homesSold: "50",
    medianPricePerSquareFoot: "$182/sq ft",
    medianDaysOnMarket: "10 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/18238/OH/Seven-Hills/housing-market"
  },
  nearbyCities: [
    {
      "name": "Parma",
      "slug": "parma"
    },
    {
      "name": "Independence",
      "slug": "independence"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "Parma Heights",
      "slug": "parma-heights"
    },
    {
      "name": "Middleburg Heights",
      "slug": "middleburg-heights"
    },
    {
      "name": "Cleveland",
      "slug": "cleveland"
    }
  ]
});

const solonArea = createArea({
  "city": "Solon",
  "slug": "solon",
  "statistics": {
    "medianSalePrice": "$452,285",
    "homesSold": "83",
    "medianPricePerSquareFoot": "$193/sq ft",
    "medianDaysOnMarket": "31 days",
    "dataPeriod": "July–September 2026",
    "sourceName": "Redfin",
    "sourceUrl": "https://www.redfin.com/city/18593/OH/Solon/housing-market"
  },
  "nearbyCities": [
    {
      "name": "Bedford Heights",
      "slug": "bedford-heights"
    },
    {
      "name": "Bedford",
      "slug": "bedford"
    },
    {
      "name": "Maple Heights",
      "slug": "maple-heights"
    },
    {
      "name": "Garfield Heights",
      "slug": "garfield-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    }
  ]
});

const southEuclidArea = createArea({
  city: "South Euclid",
  slug: "south-euclid",
  statistics: {
    medianSalePrice: "$200,904",
    homesSold: "94",
    medianPricePerSquareFoot: "$134/sq ft",
    medianDaysOnMarket: "21 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/18673/OH/South-Euclid/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "University Heights",
      "slug": "university-heights"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Euclid",
      "slug": "euclid"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    }
  ]
});

const universityHeightsArea = createArea({
  city: "University Heights",
  slug: "university-heights",
  posInspection: {
    status: "required",
    shortAnswer: "The seller must obtain a Point-of-Sale inspection before title transfer. A buyer may assume unresolved violations when the City’s Statement of Assumption of Violations is submitted before transfer.",
    tableRows: [
      { question: "When is it required?", requirement: "Before title transfer. The inspection is valid for one year from the initial inspection date." },
      { question: "What does it cost?", requirement: "$250 for a single-family home and $300 for a two-family home." },
      { question: "What happens if there are violations?", requirement: "The seller may correct all violations, correct some while the buyer assumes the rest, or have the buyer assume all violations. The City requires the buyer’s Statement of Assumption of Violations before transfer when violations remain." },
      { question: "How do I apply?", requirement: "Submit the Point-of-Sale application through CitizenServe or in person with the Housing Department, then schedule the inspection." },
    ],
    sources: [
      { label: "City of University Heights: Point-of-Sale Application (PDF)", url: "https://www.universityheights.com/wp-content/uploads/2022/01/POINT-OF-SALE-APPLICATION-2022.pdf" },
      { label: "City of University Heights: Point-of-Sale Transfer Process (PDF)", url: "https://www.universityheights.com/wp-content/uploads/2024/06/Point-of-Sale-Before-Sale-Is-Completed-REV-1.pdf" },
    ],
    verifiedDate: "November 10, 2026",
  },
  statistics: {
    medianSalePrice: "$289,612",
    homesSold: "59",
    medianPricePerSquareFoot: "$173/sq ft",
    medianDaysOnMarket: "26 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/19865/OH/University-Heights/housing-market"
  },
  nearbyCities: [
    {
      "name": "Cleveland Heights",
      "slug": "cleveland-heights"
    },
    {
      "name": "South Euclid",
      "slug": "south-euclid"
    },
    {
      "name": "Lyndhurst",
      "slug": "lyndhurst"
    },
    {
      "name": "Mayfield Heights",
      "slug": "mayfield-heights"
    },
    {
      "name": "Richmond Heights",
      "slug": "richmond-heights"
    },
    {
      "name": "Highland Heights",
      "slug": "highland-heights"
    }
  ]
});

const additionalAreaStatistics: Partial<Record<string, Omit<AreaStatistics, "supportingCopy">>> = {
  "bay-village": {
    medianSalePrice: "$449,786",
    homesSold: "71",
    medianPricePerSquareFoot: "$259/sq ft",
    medianDaysOnMarket: "18 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1171/OH/Bay-Village/housing-market",
  },
  berea: {
    medianSalePrice: "$255,210", homesSold: "74", medianPricePerSquareFoot: "$179/sq ft", medianDaysOnMarket: "9 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/1516/OH/Berea/housing-market",
  },
  bratenahl: {
    medianSalePrice: "$431,045", homesSold: "12", medianPricePerSquareFoot: "$203/sq ft", medianDaysOnMarket: "179 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2160/OH/Bratenahl/housing-market",
  },
  beachwood: {
    medianSalePrice: "$549,738",
    homesSold: "34",
    medianPricePerSquareFoot: "$201/sq ft",
    medianDaysOnMarket: "48 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1191/OH/Beachwood/housing-market",
  },
  brecksville: {
    medianSalePrice: "$474,774",
    homesSold: "62",
    medianPricePerSquareFoot: "$184/sq ft",
    medianDaysOnMarket: "22 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/2164/OH/Brecksville/housing-market",
  },
  "broadview-heights": {
    medianSalePrice: "$413,750", homesSold: "74", medianPricePerSquareFoot: "$188/sq ft", medianDaysOnMarket: "24 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2349/OH/Broadview-Heights/housing-market",
  },
  "brook-park": {
    medianSalePrice: "$243,384", homesSold: "45", medianPricePerSquareFoot: "$178/sq ft", medianDaysOnMarket: "14 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2402/OH/Brook-Park/housing-market",
  },
  "brooklyn-heights": {
    medianSalePrice: "$315,000", homesSold: "2", medianPricePerSquareFoot: "$206/sq ft", medianDaysOnMarket: "24 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/2396/OH/Brooklyn-Heights",
  },
  brooklyn: {
    medianSalePrice: "$216,897",
    homesSold: "38",
    medianPricePerSquareFoot: "$169/sq ft",
    medianDaysOnMarket: "14 days",
    dataPeriod: "July–September 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/2390/OH/Brooklyn/housing-market",
  },
  "chagrin-falls": {
    medianSalePrice: "$542,742", homesSold: "24", medianPricePerSquareFoot: "$329/sq ft", medianDaysOnMarket: "27 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/3481/OH/Chagrin-Falls/housing-market",
  },
  "cuyahoga-heights": {
    medianSalePrice: "$180,000", homesSold: "1", medianPricePerSquareFoot: "$122/sq ft", medianDaysOnMarket: "97 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/5101/OH/Cuyahoga-Heights",
  },
  "east-cleveland": {
    medianSalePrice: "$143,432", homesSold: "14", medianPricePerSquareFoot: "$46/sq ft", medianDaysOnMarket: "78 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/6038/OH/East-Cleveland/housing-market",
  },
  "fairview-park": {
    medianSalePrice: "$289,362", homesSold: "55", medianPricePerSquareFoot: "$191/sq ft", medianDaysOnMarket: "12 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/6780/OH/Fairview-Park/housing-market",
  },
  "gates-mills": {
    medianSalePrice: "$1,007,020", homesSold: "8", medianPricePerSquareFoot: "$250/sq ft", medianDaysOnMarket: "60 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/7517/OH/Gates-Mills/housing-market",
  },
  glenwillow: {
    medianSalePrice: "$220,000", homesSold: "1", medianPricePerSquareFoot: "$269/sq ft", medianDaysOnMarket: "46 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/7824/OH/Glenwillow/housing-market",
  },
  "highland-hills": {
    medianSalePrice: "$156,000", homesSold: "1", medianPricePerSquareFoot: "$169/sq ft", medianDaysOnMarket: "23 days",
    dataPeriod: "May–July 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/8969/OH/Highland-Hills/housing-market",
  },
  lakewood: {
    medianSalePrice: "$342,837", homesSold: "198", medianPricePerSquareFoot: "$196/sq ft", medianDaysOnMarket: "21 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/10611/OH/Lakewood/housing-market",
  },
  linndale: {
    medianSalePrice: "$140,000", homesSold: "1", medianPricePerSquareFoot: "$107/sq ft", medianDaysOnMarket: "47 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/11182/OH/Linndale",
  },
  "north-olmsted": {
    medianSalePrice: "$288,862", homesSold: "149", medianPricePerSquareFoot: "$172/sq ft", medianDaysOnMarket: "12 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/14718/OH/North-Olmsted/housing-market",
  },
  "north-randall": {
    medianSalePrice: "$200,000", homesSold: "1", medianPricePerSquareFoot: "$174/sq ft", medianDaysOnMarket: "27 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/neighborhood/765795/OH/North-Randall/North-Randall-Village",
  },
  "north-royalton": {
    medianSalePrice: "$357,830", homesSold: "121", medianPricePerSquareFoot: "$183/sq ft", medianDaysOnMarket: "19 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/14764/OH/North-Royalton/housing-market",
  },
  "orange-village": {
    medianSalePrice: "$623,453", homesSold: "24", medianPricePerSquareFoot: "$255/sq ft", medianDaysOnMarket: "62 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/15175/OH/Orange/housing-market",
  },
  "oakwood-village": {
    medianSalePrice: "$363,000", homesSold: "4", medianPricePerSquareFoot: "$143/sq ft", medianDaysOnMarket: "43 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/14977/OH/Oakwood",
  },
  "olmsted-falls": {
    medianSalePrice: "$259,876", homesSold: "53", medianPricePerSquareFoot: "$158/sq ft", medianDaysOnMarket: "27 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/15128/OH/Olmsted-Falls/housing-market",
  },
  "pepper-pike": {
    medianSalePrice: "$847,000", homesSold: "37", medianPricePerSquareFoot: "$258/sq ft", medianDaysOnMarket: "35 days",
    dataPeriod: "June–August 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/15864/OH/Pepper-Pike/housing-market",
  },
  "rocky-river": {
    medianSalePrice: "$396,011", homesSold: "89", medianPricePerSquareFoot: "$237/sq ft", medianDaysOnMarket: "18 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/17437/OH/Rocky-River/housing-market",
  },
  "shaker-heights": {
    medianSalePrice: "$363,577", homesSold: "118", medianPricePerSquareFoot: "$165/sq ft", medianDaysOnMarket: "37 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/18309/OH/Shaker-Heights/housing-market",
  },
  strongsville: {
    medianSalePrice: "$379,819", homesSold: "190", medianPricePerSquareFoot: "$190/sq ft", medianDaysOnMarket: "17 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/19034/OH/Strongsville/housing-market",
  },
  "valley-view": {
    medianSalePrice: "$343,000", homesSold: "2", medianPricePerSquareFoot: "$170/sq ft", medianDaysOnMarket: "6 days",
    dataPeriod: "May–July 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/19939/OH/Valley-View/housing-market",
  },
  "walton-hills": {
    medianSalePrice: "$394,812", homesSold: "9", medianPricePerSquareFoot: "$133/sq ft", medianDaysOnMarket: "52 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/20238/OH/Walton-Hills/housing-market",
  },
  westlake: {
    medianSalePrice: "$449,786", homesSold: "140", medianPricePerSquareFoot: "$173/sq ft", medianDaysOnMarket: "17 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/20680/OH/Westlake/housing-market",
  },
  woodmere: {
    medianSalePrice: "$398,000", homesSold: "2", medianPricePerSquareFoot: "$202/sq ft", medianDaysOnMarket: "96 days",
    dataPeriod: "Redfin snapshot checked November 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/20963/OH/Woodmere",
  },
  "warrensville-heights": {
    medianSalePrice: "$173,118", homesSold: "20", medianPricePerSquareFoot: "$173/sq ft", medianDaysOnMarket: "30 days",
    dataPeriod: "July–September 2026", sourceName: "Redfin", sourceUrl: "https://www.redfin.com/city/20280/OH/Warrensville-Heights/housing-market",
  },
};

const additionalPosInspections: Partial<Record<string, PosInspection>> = {
  "shaker-heights": {
    status: "required",
    shortAnswer: "The seller must apply for a Point-of-Sale inspection before entering into a contract to sell a residential property. A sale can close with violations still outstanding only when the City approves the required escrow arrangement.",
    tableRows: [
      { question: "When is it required?", requirement: "Before entering into an agreement to sell a residential property with a structure. The inspection is valid for transfer for 24 months from the original inspection date." },
      { question: "What does it cost?", requirement: "Single-family: $200. Two-family: $300. Condominium: $150. Apartment building: $200 for the first unit and $50 for each additional unit." },
      { question: "What does the City inspect?", requirement: "A visual inspection of the interior and exterior. Apartment-building common areas and fire-code violations are also included." },
      { question: "Can the sale close with violations?", requirement: "Yes. The buyer or seller must submit an itemized estimate from a registered contractor; after City approval, the buyer establishes City-held escrow equal to 150% of the estimated repairs." },
      { question: "How do I apply?", requirement: "Apply and pay online through the City’s CitizenServe Point-of-Sale process, then schedule the inspection with the City." },
    ],
    sources: [
      { label: "City of Shaker Heights: Point of Sale Procedure", url: "https://www.shakerheightsoh.gov/477/Point-of-Sale-Procedure" },
      { label: "City of Shaker Heights: POS Inspection and Escrow Requirements (PDF)", url: "https://www.shakerheightsoh.gov/DocumentCenter/View/124/Point-of-Sale-Escrow-Requirements-PDF" },
    ],
    verifiedDate: "November 10, 2026",
  },
};

const additionalAreas = [
  ["Bay Village", "bay-village", ["Westlake", "Rocky River", "Fairview Park", "North Olmsted", "Berea", "Lakewood"]],
  ["Berea", "berea", ["Olmsted Falls", "North Olmsted", "Strongsville", "Brook Park", "Middleburg Heights", "Fairview Park"]],
  ["Bratenahl", "bratenahl", ["Cleveland", "Euclid", "East Cleveland", "Cleveland Heights", "Shaker Heights", "Lakewood"]],
  ["Brecksville", "brecksville", ["Broadview Heights", "North Royalton", "Seven Hills", "Independence", "Solon", "Bedford"]],
  ["Broadview Heights", "broadview-heights", ["Brecksville", "North Royalton", "Seven Hills", "Parma", "Independence", "Middleburg Heights"]],
  ["Brook Park", "brook-park", ["Cleveland", "Berea", "Middleburg Heights", "Fairview Park", "Parma", "Parma Heights"]],
  ["Brooklyn", "brooklyn", ["Cleveland", "Parma", "Parma Heights", "Seven Hills", "Brooklyn Heights", "Lakewood"]],
  ["Brooklyn Heights", "brooklyn-heights", ["Brooklyn", "Cleveland", "Independence", "Seven Hills", "Parma", "Garfield Heights"]],
  ["Chagrin Falls", "chagrin-falls", ["Solon", "Gates Mills", "Orange Village", "Mayfield Village", "Highland Heights", "Richmond Heights"]],
  ["East Cleveland", "east-cleveland", ["Cleveland", "Cleveland Heights", "Euclid", "Bratenahl", "Shaker Heights", "University Heights"]],
  ["Beachwood", "beachwood", ["Shaker Heights", "University Heights", "Cleveland Heights", "Warrensville Heights", "Orange Village", "Woodmere"]],
  ["Cuyahoga Heights", "cuyahoga-heights", ["Cleveland", "Garfield Heights", "Valley View", "Brooklyn Heights", "Independence", "Maple Heights"]],
  ["Fairview Park", "fairview-park", ["Rocky River", "North Olmsted", "Westlake", "Lakewood", "Brook Park", "Berea"]],
  ["Gates Mills", "gates-mills", ["Mayfield Heights", "Mayfield Village", "Highland Heights", "Lyndhurst", "Richmond Heights", "Chagrin Falls"]],
  ["Glenwillow", "glenwillow", ["Solon", "Bedford Heights", "Bedford", "Maple Heights", "North Royalton", "Brecksville"]],
  ["Highland Hills", "highland-hills", ["Warrensville Heights", "Beachwood", "Shaker Heights", "Maple Heights", "Bedford Heights", "North Randall"]],
  ["Lakewood", "lakewood", ["Rocky River", "Fairview Park", "Brooklyn", "Cleveland", "Westlake", "Bay Village"]],
  ["Linndale", "linndale", ["Cleveland", "Brooklyn", "Lakewood", "Parma", "Parma Heights", "Brooklyn Heights"]],
  ["North Olmsted", "north-olmsted", ["Westlake", "Fairview Park", "Olmsted Falls", "Berea", "North Royalton", "Bay Village"]],
  ["North Randall", "north-randall", ["Warrensville Heights", "Highland Hills", "Maple Heights", "Bedford Heights", "Bedford", "Garfield Heights"]],
  ["North Royalton", "north-royalton", ["Broadview Heights", "Brecksville", "Strongsville", "Parma", "Seven Hills", "Glenwillow"]],
  ["Oakwood Village", "oakwood-village", ["Bedford", "Bedford Heights", "Walton Hills", "Maple Heights", "Solon", "Glenwillow"]],
  ["Olmsted Falls", "olmsted-falls", ["North Olmsted", "Berea", "Strongsville", "Westlake", "Fairview Park", "Bay Village"]],
  ["Orange Village", "orange-village", ["Chagrin Falls", "Gates Mills", "Mayfield Village", "Mayfield Heights", "Highland Heights", "Solon"]],
  ["Pepper Pike", "pepper-pike", ["Orange Village", "Gates Mills", "Mayfield Heights", "Lyndhurst", "Beachwood", "Woodmere"]],
  ["Rocky River", "rocky-river", ["Lakewood", "Fairview Park", "Westlake", "Bay Village", "North Olmsted", "Cleveland"]],
  ["Shaker Heights", "shaker-heights", ["Cleveland Heights", "University Heights", "Garfield Heights", "Maple Heights", "Cleveland", "East Cleveland"]],
  ["Strongsville", "strongsville", ["North Royalton", "Olmsted Falls", "Berea", "Middleburg Heights", "Parma Heights", "Broadview Heights"]],
  ["Valley View", "valley-view", ["Cuyahoga Heights", "Independence", "Garfield Heights", "Bedford", "Bedford Heights", "Seven Hills"]],
  ["Walton Hills", "walton-hills", ["Oakwood Village", "Bedford", "Bedford Heights", "Maple Heights", "Solon", "North Randall"]],
  ["Warrensville Heights", "warrensville-heights", ["Beachwood", "Highland Hills", "North Randall", "Shaker Heights", "University Heights", "Maple Heights"]],
  ["Westlake", "westlake", ["Bay Village", "Rocky River", "Fairview Park", "North Olmsted", "Olmsted Falls", "Strongsville"]],
  ["Woodmere", "woodmere", ["Beachwood", "Orange Village", "Pepper Pike", "Shaker Heights", "University Heights", "Warrensville Heights"]],
] as const satisfies readonly (readonly [string, string, readonly [string, string, string, string, string, string]])[];

const additionalAreaPages = additionalAreas.map(([city, slug, nearbyCities]) => createArea({
  city,
  slug,
  posInspection: additionalPosInspections[slug],
  statistics: additionalAreaStatistics[slug],
  nearbyCities: nearbyCities.map(name => ({
    name,
    slug: name.toLowerCase().replaceAll(" ", "-"),
  })) as unknown as AreaRecord["nearbyCities"],
}));

export const areas: readonly AreaPageData[] = [
  bedfordArea,
  bedfordHeightsArea,
  clevelandArea,
  clevelandHeightsArea,
  euclidArea,
  garfieldHeightsArea,
  highlandHeightsArea,
  independenceArea,
  lyndhurstArea,
  mapleHeightsArea,
  mayfieldHeightsArea,
  mayfieldVillageArea,
  middleburgHeightsArea,
  parmaArea,
  parmaHeightsArea,
  richmondHeightsArea,
  sevenHillsArea,
  solonArea,
  southEuclidArea,
  universityHeightsArea,
  ...additionalAreaPages,
];
