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
  googleMapsEmbedUrl: string;
  localPhoto: {
    src: string;
    alt: string;
    photographer: string;
    sourceUrl: string;
    title: string;
    license: string;
    licenseUrl: string;
  };
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

export const clevelandArea = {
  city: "Cleveland",
  slug: "cleveland",
  localPhoto: {
    src: "/images/local-area/cleveland-east-boulevard.jpg",
    alt: "Brick house with a front porch and lawn in Cleveland’s East Boulevard Historic District, Glenville",
    photographer: "Warren LeMay",
    sourceUrl: "https://www.flickr.com/photos/warrenlemay/28439607087/",
    title: "East Boulevard Historic District, Glenville, Cleveland, OH",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191251.91240052145!2d-81.70586405!3d41.497532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH%2C%20USA!5e0!3m2!1sen!2sil!4v1788783140965!5m2!1sen!2sil",
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
} as const satisfies AreaPageData;
