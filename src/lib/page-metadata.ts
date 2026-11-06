import type { Metadata } from "next";

const fallbackImage = {
  url: "/images/area-hero/local-right.png",
  width: 1536,
  height: 1024,
  alt: "Your House in Cash",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
};

export function createPageMetadata({ title, description, canonical, image }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: "Your House in Cash",
      title,
      description,
      url: canonical,
      images: [image ?? fallbackImage],
    },
  };
}
