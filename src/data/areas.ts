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
  slug: string;
  statistics: AreaStatistics;
};

export function getAreaPagePath(citySlug: string) {
  if (citySlug === "cleveland") return "/";
  return `/sell-your-house-fast-as-is-${citySlug}`;
}

export const sharedLocalPhoto = {
  src: "/images/local-area/cleveland-east-boulevard.jpg",
  alt: "Brick house with a front porch and lawn in Cleveland’s East Boulevard Historic District, Glenville",
  photographer: "Warren LeMay",
  sourceUrl: "https://www.flickr.com/photos/warrenlemay/28439607087/",
  title: "East Boulevard Historic District, Glenville, Cleveland, OH",
  license: "CC0 1.0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
} as const;

type AreaRecord = Pick<AreaPageData, "city" | "slug" | "nearbyCities"> & {
  statistics: Omit<AreaStatistics, "supportingCopy">;
  googleMapsEmbedUrl?: string;
};

function createArea(record: AreaRecord): AreaPageData {
  const { city } = record;
  return {
    ...record,
    googleMapsEmbedUrl: record.googleMapsEmbedUrl ??
      `https://www.google.com/maps?q=${encodeURIComponent(`${city}, Ohio, USA`)}&output=embed`,
    intro: {
      headline: `We Know ${city}`,
      supportingCopy: city === "Cleveland"
        ? "Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland."
        : `Whether you’re selling a home you live in or a rental property, we look at its condition, your situation, and the local ${city} market to prepare a straightforward as-is cash offer.`,
    },
    statistics: {
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
    medianSalePrice: "$144,904",
    homesSold: "46",
    medianPricePerSquareFoot: "$141/sq ft",
    medianDaysOnMarket: "39 days",
    dataPeriod: "June–August 2026",
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
    "medianSalePrice": "$196,870",
    "homesSold": "23",
    "medianPricePerSquareFoot": "$182/sq ft",
    "medianDaysOnMarket": "33 days",
    "dataPeriod": "June–August 2026",
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
  statistics: {
    medianSalePrice: "$149,901",
    homesSold: "1,179",
    medianPricePerSquareFoot: "$100/sq ft",
    medianDaysOnMarket: "32 days",
    dataPeriod: "June–August 2026",
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
  statistics: {
    medianSalePrice: "$256,081",
    homesSold: "205",
    medianPricePerSquareFoot: "$130/sq ft",
    medianDaysOnMarket: "27 days",
    dataPeriod: "June–August 2026",
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
    medianSalePrice: "$167,889",
    homesSold: "171",
    medianPricePerSquareFoot: "$113/sq ft",
    medianDaysOnMarket: "30 days",
    dataPeriod: "June–August 2026",
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
  statistics: {
    medianSalePrice: "$153,898",
    homesSold: "91",
    medianPricePerSquareFoot: "$127/sq ft",
    medianDaysOnMarket: "26 days",
    dataPeriod: "June–August 2026",
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
    "medianSalePrice": "$543,141",
    "homesSold": "37",
    "medianPricePerSquareFoot": "$201/sq ft",
    "medianDaysOnMarket": "16 days",
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
    medianSalePrice: "$459,720",
    homesSold: "12",
    medianPricePerSquareFoot: "$258/sq ft",
    medianDaysOnMarket: "29 days",
    dataPeriod: "May–July 2026",
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
    medianSalePrice: "$259,828",
    homesSold: "81",
    medianPricePerSquareFoot: "$153/sq ft",
    medianDaysOnMarket: "21 days",
    dataPeriod: "June–August 2026",
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
  statistics: {
    medianSalePrice: "$153,898",
    homesSold: "77",
    medianPricePerSquareFoot: "$107/sq ft",
    medianDaysOnMarket: "32 days",
    dataPeriod: "June–August 2026",
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
    "medianSalePrice": "$274,818",
    "homesSold": "75",
    "medianPricePerSquareFoot": "$163/sq ft",
    "medianDaysOnMarket": "22 days",
    "dataPeriod": "June–August 2026",
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
    "medianSalePrice": "$414,726",
    "homesSold": "14",
    "medianPricePerSquareFoot": "$242/sq ft",
    "medianDaysOnMarket": "37 days",
    "dataPeriod": "June–August 2026",
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
    medianSalePrice: "$312,693",
    homesSold: "55",
    medianPricePerSquareFoot: "$177/sq ft",
    medianDaysOnMarket: "8 days",
    dataPeriod: "June–August 2026",
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
    medianSalePrice: "$231,847",
    homesSold: "294",
    medianPricePerSquareFoot: "$173/sq ft",
    medianDaysOnMarket: "10 days",
    dataPeriod: "June–August 2026",
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
    medianSalePrice: "$247,336",
    homesSold: "64",
    medianPricePerSquareFoot: "$199/sq ft",
    medianDaysOnMarket: "9 days",
    dataPeriod: "June–August 2026",
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
    medianSalePrice: "$277,816",
    homesSold: "31",
    medianPricePerSquareFoot: "$135/sq ft",
    medianDaysOnMarket: "30 days",
    dataPeriod: "June–August 2026",
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
    medianSalePrice: "$336,277",
    homesSold: "49",
    medianPricePerSquareFoot: "$190/sq ft",
    medianDaysOnMarket: "9 days",
    dataPeriod: "June–August 2026",
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
    "medianSalePrice": "$509,663",
    "homesSold": "80",
    "medianPricePerSquareFoot": "$208/sq ft",
    "medianDaysOnMarket": "29 days",
    "dataPeriod": "June–August 2026",
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
    medianSalePrice: "$199,868",
    homesSold: "101",
    medianPricePerSquareFoot: "$125/sq ft",
    medianDaysOnMarket: "22 days",
    dataPeriod: "June–August 2026",
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
  statistics: {
    medianSalePrice: "$308,546",
    homesSold: "74",
    medianPricePerSquareFoot: "$191/sq ft",
    medianDaysOnMarket: "18 days",
    dataPeriod: "June–August 2026",
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
];
