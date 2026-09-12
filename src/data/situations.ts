import type { StaticImageData } from "next/image";
import inheritedPropertyImage from "../../project-documentation/website-specification/assets/situations/inherited-property-hero.jpg";

export type Situation = {
  slug: string;
  headline: string;
  supportingCopy: string;
  image: StaticImageData;
  imageAlt: string;
};

export const situations: Situation[] = [
  {
    slug: "inherited-property",
    headline: "What to know about inheriting a house",
    supportingCopy: "Inheriting a house can bring questions about the property, its upkeep, and what comes next. Explore the key considerations and your options for keeping, renting, or selling it.",
    image: inheritedPropertyImage,
    imageAlt: "Bedroom with a four-poster bed, floral bedding, and a rocking chair",
  },
];
