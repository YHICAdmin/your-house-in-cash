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
const beachwoodArea = createArea({
  city: "Beachwood",
  slug: "beachwood",
  statistics: {
    medianSalePrice: "$504,666",
    homesSold: "40",
    medianPricePerSquareFoot: "$233/sq ft",
    medianDaysOnMarket: "20 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1191/OH/Beachwood/housing-market"
  },
  nearbyCities: [
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "Lyndhurst",
      slug: "lyndhurst"
    },
    {
      name: "Warrensville Heights",
      slug: "warrensville-heights"
    },
    {
      name: "Richmond Heights",
      slug: "richmond-heights"
    },
    {
      name: "South Euclid",
      slug: "south-euclid"
    }
  ]
});

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
      name: "Maple Heights",
      slug: "maple-heights"
    },
    {
      name: "Garfield Heights",
      slug: "garfield-heights"
    },
    {
      name: "Warrensville Heights",
      slug: "warrensville-heights"
    },
    {
      name: "Independence",
      slug: "independence"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "Broadview Heights",
      slug: "broadview-heights"
    }
  ]
});

const bereaArea = createArea({
  city: "Berea",
  slug: "berea",
  statistics: {
    medianSalePrice: "$255,041",
    homesSold: "76",
    medianPricePerSquareFoot: "$176/sq ft",
    medianDaysOnMarket: "9 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/1516/OH/Berea/housing-market"
  },
  nearbyCities: [
    {
      name: "Middleburg Heights",
      slug: "middleburg-heights"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Strongsville",
      slug: "strongsville"
    },
    {
      name: "North Olmsted",
      slug: "north-olmsted"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "North Royalton",
      slug: "north-royalton"
    }
  ]
});

const broadviewHeightsArea = createArea({
  city: "Broadview Heights",
  slug: "broadview-heights",
  statistics: {
    medianSalePrice: "$419,722",
    homesSold: "75",
    medianPricePerSquareFoot: "$196/sq ft",
    medianDaysOnMarket: "24 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/2349/OH/Broadview-Heights/housing-market"
  },
  nearbyCities: [
    {
      name: "Seven Hills",
      slug: "seven-hills"
    },
    {
      name: "North Royalton",
      slug: "north-royalton"
    },
    {
      name: "Independence",
      slug: "independence"
    },
    {
      name: "Strongsville",
      slug: "strongsville"
    },
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Garfield Heights",
      slug: "garfield-heights"
    }
  ]
});

const brookParkArea = createArea({
  city: "Brook Park",
  slug: "brook-park",
  statistics: {
    medianSalePrice: "$244,838",
    homesSold: "50",
    medianPricePerSquareFoot: "$231/sq ft",
    medianDaysOnMarket: "8 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/2402/OH/Brook-Park/housing-market"
  },
  nearbyCities: [
    {
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Brooklyn",
      slug: "brooklyn"
    },
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Middleburg Heights",
      slug: "middleburg-heights"
    },
    {
      name: "Berea",
      slug: "berea"
    }
  ]
});

const brooklynArea = createArea({
  city: "Brooklyn",
  slug: "brooklyn",
  statistics: {
    medianSalePrice: "$228,849",
    homesSold: "39",
    medianPricePerSquareFoot: "$176/sq ft",
    medianDaysOnMarket: "17 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/2390/OH/Brooklyn/housing-market"
  },
  nearbyCities: [
    {
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Seven Hills",
      slug: "seven-hills"
    },
    {
      name: "Lakewood",
      slug: "lakewood"
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
      name: "Lakewood",
      slug: "lakewood"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "Euclid",
      slug: "euclid"
    },
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Garfield Heights",
      slug: "garfield-heights"
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
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "East Cleveland",
      slug: "east-cleveland"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "South Euclid",
      slug: "south-euclid"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    }
  ]
});

const eastClevelandArea = createArea({
  city: "East Cleveland",
  slug: "east-cleveland",
  statistics: {
    medianSalePrice: "$128,815",
    homesSold: "17",
    medianPricePerSquareFoot: "$63/sq ft",
    medianDaysOnMarket: "72 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/6038/OH/East-Cleveland/housing-market"
  },
  nearbyCities: [
    {
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "Euclid",
      slug: "euclid"
    },
    {
      name: "South Euclid",
      slug: "south-euclid"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
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
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "East Cleveland",
      slug: "east-cleveland"
    },
    {
      name: "South Euclid",
      slug: "south-euclid"
    },
    {
      name: "Richmond Heights",
      slug: "richmond-heights"
    },
    {
      name: "Lyndhurst",
      slug: "lyndhurst"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    }
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47744.50783599262!2d-81.56199711803099!3d41.59019609607561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830fe5dbe9c8b3b%3A0x57cade33d51809cd!2sEuclid%2C%20OH%2C%20USA!5e0!3m2!1sen!2sca!4v1748013566014!5m2!1sen!2sca"
});

const fairviewParkArea = createArea({
  city: "Fairview Park",
  slug: "fairview-park",
  statistics: {
    medianSalePrice: "$290,783",
    homesSold: "64",
    medianPricePerSquareFoot: "$195/sq ft",
    medianDaysOnMarket: "8 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/6780/OH/Fairview-Park/housing-market"
  },
  nearbyCities: [
    {
      name: "Rocky River",
      slug: "rocky-river"
    },
    {
      name: "Westlake",
      slug: "westlake"
    },
    {
      name: "North Olmsted",
      slug: "north-olmsted"
    },
    {
      name: "Lakewood",
      slug: "lakewood"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Cleveland",
      slug: "cleveland"
    }
  ]
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
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Maple Heights",
      slug: "maple-heights"
    },
    {
      name: "Bedford",
      slug: "bedford"
    },
    {
      name: "Warrensville Heights",
      slug: "warrensville-heights"
    },
    {
      name: "Independence",
      slug: "independence"
    },
    {
      name: "Seven Hills",
      slug: "seven-hills"
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
      name: "Seven Hills",
      slug: "seven-hills"
    },
    {
      name: "Garfield Heights",
      slug: "garfield-heights"
    },
    {
      name: "Broadview Heights",
      slug: "broadview-heights"
    },
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Bedford",
      slug: "bedford"
    },
    {
      name: "Maple Heights",
      slug: "maple-heights"
    }
  ]
});

const lakewoodArea = createArea({
  city: "Lakewood",
  slug: "lakewood",
  statistics: {
    medianSalePrice: "$359,762",
    homesSold: "211",
    medianPricePerSquareFoot: "$215/sq ft",
    medianDaysOnMarket: "15 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/10611/OH/Lakewood/housing-market"
  },
  nearbyCities: [
    {
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Rocky River",
      slug: "rocky-river"
    },
    {
      name: "Fairview Park",
      slug: "fairview-park"
    },
    {
      name: "Westlake",
      slug: "westlake"
    },
    {
      name: "Brooklyn",
      slug: "brooklyn"
    },
    {
      name: "Parma",
      slug: "parma"
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
      name: "South Euclid",
      slug: "south-euclid"
    },
    {
      name: "Richmond Heights",
      slug: "richmond-heights"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
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
      name: "Garfield Heights",
      slug: "garfield-heights"
    },
    {
      name: "Bedford",
      slug: "bedford"
    },
    {
      name: "Warrensville Heights",
      slug: "warrensville-heights"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "Independence",
      slug: "independence"
    },
    {
      name: "Cleveland",
      slug: "cleveland"
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
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Berea",
      slug: "berea"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Strongsville",
      slug: "strongsville"
    },
    {
      name: "North Royalton",
      slug: "north-royalton"
    }
  ]
});

const northOlmstedArea = createArea({
  city: "North Olmsted",
  slug: "north-olmsted",
  statistics: {
    medianSalePrice: "$302,800",
    homesSold: "161",
    medianPricePerSquareFoot: "$178/sq ft",
    medianDaysOnMarket: "12 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/14718/OH/North-Olmsted/housing-market"
  },
  nearbyCities: [
    {
      name: "Westlake",
      slug: "westlake"
    },
    {
      name: "Fairview Park",
      slug: "fairview-park"
    },
    {
      name: "Berea",
      slug: "berea"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Middleburg Heights",
      slug: "middleburg-heights"
    },
    {
      name: "Rocky River",
      slug: "rocky-river"
    }
  ]
});

const northRoyaltonArea = createArea({
  city: "North Royalton",
  slug: "north-royalton",
  statistics: {
    medianSalePrice: "$341,524",
    homesSold: "129",
    medianPricePerSquareFoot: "$187/sq ft",
    medianDaysOnMarket: "15 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/14764/OH/North-Royalton/housing-market"
  },
  nearbyCities: [
    {
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Broadview Heights",
      slug: "broadview-heights"
    },
    {
      name: "Strongsville",
      slug: "strongsville"
    },
    {
      name: "Seven Hills",
      slug: "seven-hills"
    },
    {
      name: "Middleburg Heights",
      slug: "middleburg-heights"
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
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Brooklyn",
      slug: "brooklyn"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Seven Hills",
      slug: "seven-hills"
    },
    {
      name: "Independence",
      slug: "independence"
    },
    {
      name: "North Royalton",
      slug: "north-royalton"
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
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    },
    {
      name: "Middleburg Heights",
      slug: "middleburg-heights"
    },
    {
      name: "Berea",
      slug: "berea"
    },
    {
      name: "North Royalton",
      slug: "north-royalton"
    },
    {
      name: "Seven Hills",
      slug: "seven-hills"
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
      name: "South Euclid",
      slug: "south-euclid"
    },
    {
      name: "Lyndhurst",
      slug: "lyndhurst"
    },
    {
      name: "Euclid",
      slug: "euclid"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    }
  ]
});

const rockyRiverArea = createArea({
  city: "Rocky River",
  slug: "rocky-river",
  statistics: {
    medianSalePrice: "$395,988",
    homesSold: "94",
    medianPricePerSquareFoot: "$231/sq ft",
    medianDaysOnMarket: "16 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/17437/OH/Rocky-River/housing-market"
  },
  nearbyCities: [
    {
      name: "Lakewood",
      slug: "lakewood"
    },
    {
      name: "Fairview Park",
      slug: "fairview-park"
    },
    {
      name: "Westlake",
      slug: "westlake"
    },
    {
      name: "North Olmsted",
      slug: "north-olmsted"
    },
    {
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
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
      name: "Parma",
      slug: "parma"
    },
    {
      name: "Independence",
      slug: "independence"
    },
    {
      name: "North Royalton",
      slug: "north-royalton"
    },
    {
      name: "Garfield Heights",
      slug: "garfield-heights"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Broadview Heights",
      slug: "broadview-heights"
    }
  ]
});

const shakerHeightsArea = createArea({
  city: "Shaker Heights",
  slug: "shaker-heights",
  statistics: {
    medianSalePrice: "$434,712",
    homesSold: "134",
    medianPricePerSquareFoot: "$159/sq ft",
    medianDaysOnMarket: "27 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/18309/OH/Shaker-Heights/housing-market"
  },
  nearbyCities: [
    {
      name: "Cleveland",
      slug: "cleveland"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    },
    {
      name: "Warrensville Heights",
      slug: "warrensville-heights"
    },
    {
      name: "Maple Heights",
      slug: "maple-heights"
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
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "Lyndhurst",
      slug: "lyndhurst"
    },
    {
      name: "Richmond Heights",
      slug: "richmond-heights"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    },
    {
      name: "Euclid",
      slug: "euclid"
    }
  ]
});

const strongsvilleArea = createArea({
  city: "Strongsville",
  slug: "strongsville",
  statistics: {
    medianSalePrice: "$389,742",
    homesSold: "176",
    medianPricePerSquareFoot: "$191/sq ft",
    medianDaysOnMarket: "15 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/19034/OH/Strongsville/housing-market"
  },
  nearbyCities: [
    {
      name: "North Royalton",
      slug: "north-royalton"
    },
    {
      name: "Middleburg Heights",
      slug: "middleburg-heights"
    },
    {
      name: "Berea",
      slug: "berea"
    },
    {
      name: "Broadview Heights",
      slug: "broadview-heights"
    },
    {
      name: "Parma Heights",
      slug: "parma-heights"
    },
    {
      name: "Parma",
      slug: "parma"
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
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    },
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "South Euclid",
      slug: "south-euclid"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    },
    {
      name: "Lyndhurst",
      slug: "lyndhurst"
    },
    {
      name: "Warrensville Heights",
      slug: "warrensville-heights"
    }
  ]
});

const warrensvilleHeightsArea = createArea({
  city: "Warrensville Heights",
  slug: "warrensville-heights",
  statistics: {
    medianSalePrice: "$170,387",
    homesSold: "23",
    medianPricePerSquareFoot: "$137/sq ft",
    medianDaysOnMarket: "35 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/20280/OH/Warrensville-Heights/housing-market"
  },
  nearbyCities: [
    {
      name: "Shaker Heights",
      slug: "shaker-heights"
    },
    {
      name: "Beachwood",
      slug: "beachwood"
    },
    {
      name: "Maple Heights",
      slug: "maple-heights"
    },
    {
      name: "Bedford",
      slug: "bedford"
    },
    {
      name: "University Heights",
      slug: "university-heights"
    },
    {
      name: "Cleveland Heights",
      slug: "cleveland-heights"
    }
  ]
});

const westlakeArea = createArea({
  city: "Westlake",
  slug: "westlake",
  statistics: {
    medianSalePrice: "$457,197",
    homesSold: "156",
    medianPricePerSquareFoot: "$199/sq ft",
    medianDaysOnMarket: "16 days",
    dataPeriod: "June–August 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/20680/OH/Westlake/housing-market"
  },
  nearbyCities: [
    {
      name: "Rocky River",
      slug: "rocky-river"
    },
    {
      name: "Fairview Park",
      slug: "fairview-park"
    },
    {
      name: "North Olmsted",
      slug: "north-olmsted"
    },
    {
      name: "Lakewood",
      slug: "lakewood"
    },
    {
      name: "Berea",
      slug: "berea"
    },
    {
      name: "Brook Park",
      slug: "brook-park"
    }
  ]
});

export const areas: readonly AreaPageData[] = [
  beachwoodArea,
  bedfordArea,
  bereaArea,
  broadviewHeightsArea,
  brookParkArea,
  brooklynArea,
  clevelandArea,
  clevelandHeightsArea,
  eastClevelandArea,
  euclidArea,
  fairviewParkArea,
  garfieldHeightsArea,
  independenceArea,
  lakewoodArea,
  lyndhurstArea,
  mapleHeightsArea,
  middleburgHeightsArea,
  northOlmstedArea,
  northRoyaltonArea,
  parmaArea,
  parmaHeightsArea,
  richmondHeightsArea,
  rockyRiverArea,
  sevenHillsArea,
  shakerHeightsArea,
  southEuclidArea,
  strongsvilleArea,
  universityHeightsArea,
  warrensvilleHeightsArea,
  westlakeArea,
];
