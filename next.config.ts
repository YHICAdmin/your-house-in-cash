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
];

const nextConfig: NextConfig = {
  async redirects() {
    return retiredAreaSlugs.map((slug) => ({
      source: `/sell-your-house-fast-as-is-${slug}`,
      destination: "/areas-we-buy-in",
      permanent: true,
    }));
  },
};

export default nextConfig;
