import type { NextConfig } from "next";

const retiredAreaSlugs = [
  "bratenahl",
  "brecksville",
  "gates-mills",
  "glenwillow",
  "highland-heights",
  "highland-hills",
  "oakwood-village",
  "walton-hills",
  "woodmere",
  "cuyahoga-heights",
  "linndale",
  "north-randall",
];

const nextConfig: NextConfig = {
  async redirects() {
    return retiredAreaSlugs.map((slug) => ({
      source: `/sell-your-house-fast-as-is-${slug}`,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
