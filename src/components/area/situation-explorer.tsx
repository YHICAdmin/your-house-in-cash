"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState } from "react";
import { TextLink } from "@/components/ui/text-link";
import styles from "./area-situations.module.css";

type Situation = {
  benefits: readonly [string, string, string];
  explanation: string;
  image: string;
  label: string;
  slug: string;
};

const situations = [
  {
    label: "Foreclosure",
    slug: "foreclosure",
    image: "/images/situations/foreclosure.webp",
    explanation:
      "Facing foreclosure can feel overwhelming. We offer a straightforward way to sell your house as-is and work around your timeline.",
    benefits: [
      "Sell without making repairs",
      "Choose a flexible closing date",
      "Avoid a traditional listing",
    ],
  },
  {
    label: "Inherited Property",
    slug: "inherited-property",
    image: "/images/situations/inherited-property.webp",
    explanation:
      "An inherited property can bring repairs, belongings, and decisions you did not plan for. We make it easier to sell as-is without preparing the house for the traditional market.",
    benefits: [
      "Sell the inherited property as-is",
      "Leave unwanted belongings behind",
      "Simplify the sale process",
    ],
  },
  {
    label: "Tired Landlord",
    slug: "tired-landlord",
    image: "/images/situations/tired-landlord.webp",
    explanation:
      "Managing tenants, maintenance, and ongoing expenses can become exhausting. We buy rental properties as-is so you can move on without another traditional listing.",
    benefits: [
      "Sell an occupied or vacant rental",
      "Skip repairs and another listing",
      "Choose a timeline that works for you",
    ],
  },
  {
    label: "Major Repairs",
    slug: "major-repairs",
    image: "/images/situations/major-repairs.webp",
    explanation:
      "A house that needs major repairs can be difficult to sell traditionally. We buy properties as-is, so you can sell without completing the repairs first.",
    benefits: [
      "Sell without completing repairs",
      "Skip cleaning and staging",
      "Avoid traditional buyer financing",
    ],
  },
  {
    label: "Vacant Property",
    slug: "vacant-property",
    image: "/images/situations/vacant-property.webp",
    explanation:
      "A vacant house can create ongoing costs, maintenance, and security concerns. We provide a straightforward way to sell it as-is.",
    benefits: [
      "Reduce ongoing holding costs",
      "Sell without preparing the property",
      "Choose a flexible closing date",
    ],
  },
  {
    label: "Problem Tenants",
    slug: "problem-tenants",
    image: "/images/situations/problem-tenants.webp",
    explanation:
      "Selling a property with tenant issues can feel complicated. We can evaluate the property as-is and discuss a sale that fits its current occupancy situation.",
    benefits: [
      "Sell the property in its current condition",
      "Discuss options for an occupied property",
      "Avoid another traditional listing",
    ],
  },
  {
    label: "Relocation",
    slug: "relocation",
    image: "/images/situations/relocation.webp",
    explanation:
      "When you need to relocate, timing matters. We offer a flexible, straightforward sale without requiring you to prepare the house for the market.",
    benefits: [
      "Choose a closing date around your move",
      "Skip repairs and staging",
      "Coordinate the sale after relocating",
    ],
  },
  {
    label: "Divorce",
    slug: "divorce",
    image: "/images/situations/divorce.webp",
    explanation:
      "Selling a house during a divorce can add stress to an already difficult transition. We provide a simple and discreet way to sell the property as-is.",
    benefits: [
      "Use a simple, discreet sale process",
      "Choose a flexible timeline",
      "Sell the property as-is",
    ],
  },
  {
    label: "Behind on Property Taxes",
    slug: "behind-on-property-taxes",
    image: "/images/situations/behind-on-property-taxes.webp",
    explanation:
      "Falling behind on property taxes can create increasing pressure. We offer a straightforward as-is sale so you can explore your next step.",
    benefits: [
      "Sell the property as-is",
      "Avoid preparing for a traditional listing",
      "Choose a closing date that fits your situation",
    ],
  },
  {
    label: "Code Violations",
    slug: "code-violations",
    image: "/images/situations/code-violations.webp",
    explanation:
      "Code violations can make repairs and a traditional listing more difficult. We buy houses as-is, including properties with unresolved violations.",
    benefits: [
      "Sell with existing code violations",
      "Avoid completing repairs before the sale",
      "Use a straightforward sale process",
    ],
  },
] as const satisfies readonly Situation[];

type SituationExplorerProps = {
  descriptionId: string;
  headingId: string;
};

export function SituationExplorer({
  descriptionId,
  headingId,
}: SituationExplorerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const selected = situations[selectedIndex];

  function selectSituation(index: number) {
    if (index === selectedIndex) return;

    setSelectedIndex(index);
    setAnnouncement(`${situations[index].label} details are now available.`);
  }

  return (
    <>
      <div
        className={styles.selector}
        role="group"
        aria-describedby={descriptionId}
        aria-labelledby={headingId}
      >
        {situations.map((situation, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={situation.slug}
              className={`${styles.option}${isSelected ? ` ${styles.selectedOption}` : ""}`}
              type="button"
              aria-pressed={isSelected}
              onClick={() => selectSituation(index)}
            >
              <span className={styles.optionLabel}>{situation.label}</span>
            </button>
          );
        })}
      </div>

      <div
        className={styles.selectedContent}
        role="region"
        aria-label={`${selected.label} details`}
      >
        <Image
          className={styles.situationImage}
          src={selected.image}
          alt=""
          width={1200}
          height={675}
          sizes="(min-width: 1200px) 70vw, calc(100vw - 64px)"
        />
        <p className={`${styles.explanation} text-body-large`}>
          {selected.explanation}
        </p>
        <ul className={styles.benefits}>
          {selected.benefits.map((benefit) => (
            <li key={benefit} className="text-body">
              <Check aria-hidden="true" size={20} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <TextLink href={`/situations/${selected.slug}`}>
          Learn More About {selected.label}
        </TextLink>
      </div>

      <div className={styles.contactOption}>
        <p className={`${styles.contactText} text-body`}>
          Not sure which situation fits?
        </p>
        <TextLink href="/get-cash-offer">
          Tell Us About Your Situation
        </TextLink>
      </div>

      <p className={styles.announcement} aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </>
  );
}
