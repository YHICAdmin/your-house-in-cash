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
};

export type AreaPageData = {
  city: string;
  googlePlaceId: string;
  intro: {
    headline: string;
    supportingCopy: string;
  };
  localMarket: {
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

export const clevelandArea = {
  city: "Cleveland",
  slug: "cleveland",
  googlePlaceId: "ChIJLWto4y7vMIgRQhhi91XLBO0",
  intro: {
    headline: "We Know Cleveland",
    supportingCopy:
      "Every local market has its own character. We understand the communities, housing landscape, and local factors that can shape a home sale in Cleveland.",
  },
  statistics: {
    medianSalePrice: "$149,925",
    homesSold: "1,202",
    medianPricePerSquareFoot: "$100/sq ft",
    medianDaysOnMarket: "33 days",
    dataPeriod: "July 2026",
    sourceName: "Redfin",
    sourceUrl: "https://www.redfin.com/city/4145/OH/Cleveland/housing-market",
  },
  nearbyCities: [
    { name: "Lakewood", slug: "lakewood" },
    { name: "Cleveland Heights", slug: "cleveland-heights" },
    { name: "Euclid", slug: "euclid" },
    { name: "Parma", slug: "parma" },
    { name: "Shaker Heights", slug: "shaker-heights" },
    { name: "Garfield Heights", slug: "garfield-heights" },
  ],
  localMarket: {
    headline: "Understanding the Cleveland Housing Market",
    supportingCopy:
      "From century-old homes to newer developments, Cleveland’s housing market varies from one part of the city to another. Property condition, location, and local buyer demand can all affect how a home sells. We look at those factors when evaluating a property and making a cash offer.",
  },
} as const satisfies AreaPageData;
