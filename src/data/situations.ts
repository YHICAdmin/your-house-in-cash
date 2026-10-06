import type { StaticImageData } from "next/image";
import foreclosureImage from "../../public/images/situations/foreclosure-hero.jpg";
import inheritedPropertyImage from "../../public/images/situations/inherited-property-hero.jpg";
import landlordsImage from "../../public/images/situations/landlords-hero.jpg";
import majorRepairsImage from "../../public/images/situations/major-repairs-hero.jpg";
import vacantPropertyImage from "../../public/images/situations/vacant-property-hero.jpg";
import relocationImage from "../../public/images/situations/relocation-hero.jpg";
import divorceImage from "../../public/images/situations/divorce-hero.jpg";
import liensImage from "../../public/images/situations/liens-hero.jpg";
import fireDamageImage from "../../public/images/situations/fire-damage-hero.jpg";
import hoarderHouseImage from "../../public/images/situations/hoarder-house-hero.jpg";

export type Situation = {
  slug: string;
  headline: string;
  supportingCopy: string;
  image: StaticImageData;
  imageAlt: string;
};

export const situations: Situation[] = [
  {
    slug: "foreclosure",
    headline: "Understanding your options before foreclosure",
    supportingCopy: "Falling behind on mortgage payments can leave you unsure where to start. Explore the questions to ask about your loan, the foreclosure timeline, and the options to consider for your home.",
    image: foreclosureImage,
    imageAlt: "Wooden model house and keys resting on a document",
  },
  {
    slug: "inherited-property",
    headline: "What to know about inheriting a house",
    supportingCopy: "Inheriting a house can bring questions about the property, its upkeep, and what comes next. Explore the key considerations and your options for keeping, renting, or selling it.",
    image: inheritedPropertyImage,
    imageAlt: "Bedroom with a four-poster bed, floral bedding, and a rocking chair",
  },
  {
    slug: "landlords",
    headline: "When owning a rental no longer fits",
    supportingCopy: "Managing a rental takes time, money, and ongoing attention. Explore what to consider when weighing continued ownership, help with property management, or selling the property.",
    image: landlordsImage,
    imageAlt: "Lease agreement with a pen and key on a dark table",
  },
  {
    slug: "major-repairs",
    headline: "What to consider when a house needs major repairs",
    supportingCopy: "A house that needs substantial work brings questions about cost, time, and where to begin. Explore how to assess the repairs and weigh renovating against selling the property in its current condition.",
    image: majorRepairsImage,
    imageAlt: "Room under renovation with exposed masonry, a concrete mixer, and buckets",
  },
  {
    slug: "vacant-property",
    headline: "What to do with a house that sits empty",
    supportingCopy: "An empty house still needs care, even when no one lives there. Explore the upkeep, security, and ongoing costs to consider as you decide whether to use, rent, or sell it.",
    image: vacantPropertyImage,
    imageAlt: "Empty room with a hardwood floor and a window, viewed through an open doorway",
  },
  {
    slug: "relocation",
    headline: "Planning what happens to your house when you move",
    supportingCopy: "Moving brings decisions about both your next home and the one you leave behind. Explore how timing, ongoing costs, and managing a property from a distance can shape your plans.",
    image: relocationImage,
    imageAlt: "Moving boxes beside covered furniture in a bright room",
  },
  {
    slug: "divorce",
    headline: "Deciding what happens to a house during divorce",
    supportingCopy: "A shared home can be one of the most complex decisions during a separation. Explore the questions around ownership, mortgage payments, and whether one person keeps the house or you sell it.",
    image: divorceImage,
    imageAlt: "Two empty wooden chairs beside a small table with a vase",
  },
  {
    slug: "liens",
    headline: "Selling a House With Liens",
    supportingCopy: "A lien can make a sale feel impossible before you know the facts. Understand how to identify title obstacles, confirm payoff amounts, and see what may remain after closing.",
    image: liensImage,
    imageAlt: "Keys resting on property documents beside miniature house models",
  },
  {
    slug: "fire-damage",
    headline: "Selling a Fire-Damaged House",
    supportingCopy: "A fire can leave you with urgent questions about the property, insurance, repairs, and what comes next. Understand how to protect the house and compare restoring it with selling as-is.",
    image: fireDamageImage,
    imageAlt: "Fire-damaged kitchen with charred walls and debris",
  },
  {
    slug: "hoarder-house",
    headline: "Selling a Hoarder House",
    supportingCopy: "A house with years of belongings can make every next step feel harder. Explore how to approach access, personal items, cleanout decisions, privacy, and selling with contents still inside.",
    image: hoarderHouseImage,
    imageAlt: "Shelves and boxes filled with stored papers and belongings",
  },
];
