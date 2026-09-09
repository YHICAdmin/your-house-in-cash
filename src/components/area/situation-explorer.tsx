"use client";

import { MessageCircle } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { IconContainer } from "@/components/ui/icon-container";
import { TextLink } from "@/components/ui/text-link";
import styles from "./area-situations.module.css";

type Situation = {
  explanation: string;
  heading: string;
  label: string;
  slug: string;
};

const situations = [
  {
    label: "Foreclosure",
    slug: "foreclosure",
    heading: "Understanding Your Timeline Before Foreclosure",
    explanation:
      "Facing foreclosure can feel overwhelming. We offer a straightforward way to sell your house as-is and work around your timeline.",
  },
  {
    label: "Inherited Property",
    slug: "inherited-property",
    heading: "What to Consider With an Inherited Property",
    explanation:
      "An inherited property can bring repairs, belongings, and decisions you did not plan for. We make it easier to sell as-is without preparing the house for the traditional market.",
  },
  {
    label: "Tired Landlord",
    slug: "tired-landlord",
    heading: "When Landlord Responsibilities Become Unsustainable",
    explanation:
      "Managing tenants, maintenance, and ongoing expenses can become exhausting. We buy rental properties as-is so you can move on without another traditional listing.",
  },
  {
    label: "Major Repairs",
    slug: "major-repairs",
    heading: "Selling a Home That Needs Major Repairs",
    explanation:
      "A house that needs major repairs can be difficult to sell traditionally. We buy properties as-is, so you can sell without completing the repairs first.",
  },
  {
    label: "Vacant Property",
    slug: "vacant-property",
    heading: "Managing the Costs of a Vacant Property",
    explanation:
      "A vacant house can create ongoing costs, maintenance, and security concerns. We provide a straightforward way to sell it as-is.",
  },
  {
    label: "Problem Tenants",
    slug: "problem-tenants",
    heading: "What to Consider When Tenants Are Involved",
    explanation:
      "Selling a property with tenant issues can feel complicated. We can evaluate the property as-is and discuss a sale that fits its current occupancy situation.",
  },
  {
    label: "Relocation",
    slug: "relocation",
    heading: "Coordinating a Home Sale With Relocation",
    explanation:
      "When you need to relocate, timing matters. We offer a flexible, straightforward sale without requiring you to prepare the house for the market.",
  },
  {
    label: "Divorce",
    slug: "divorce",
    heading: "Handling a Property During Divorce",
    explanation:
      "Selling a house during a divorce can add stress to an already difficult transition. We provide a simple and discreet way to sell the property as-is.",
  },
  {
    label: "Behind on Property Taxes",
    slug: "behind-on-property-taxes",
    heading: "Understanding Delinquent Property Taxes",
    explanation:
      "Falling behind on property taxes can create increasing pressure. We offer a straightforward as-is sale so you can explore your next step.",
  },
  {
    label: "Code Violations",
    slug: "code-violations",
    heading: "Selling a Home With Code Violations",
    explanation:
      "Code violations can make repairs and a traditional listing more difficult. We buy houses as-is, including properties with unresolved violations.",
  },
] as const satisfies readonly Situation[];

type SituationExplorerProps = {
  descriptionId: string;
  headingId: string;
};

const selectedContentId = "selected-situation-content";

export function SituationExplorer({
  descriptionId,
  headingId,
}: SituationExplorerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const [hasOverflowAfter, setHasOverflowAfter] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    moved: false,
    pointerId: -1,
    scrollLeft: 0,
    startX: 0,
  });
  const suppressClickRef = useRef(false);
  const selected = situations[selectedIndex];

  useEffect(() => {
    const selector = selectorRef.current;
    if (!selector) return;

    const updateOverflow = () => {
      const remaining = selector.scrollWidth - selector.clientWidth - selector.scrollLeft;
      setHasOverflowAfter(remaining > 1);
    };

    updateOverflow();

    const observer = new ResizeObserver(updateOverflow);
    observer.observe(selector);
    selector.addEventListener("scroll", updateOverflow, { passive: true });

    return () => {
      observer.disconnect();
      selector.removeEventListener("scroll", updateOverflow);
    };
  }, []);

  function selectSituation(index: number) {
    if (index === selectedIndex) return;

    setSelectedIndex(index);
    setAnnouncement(`${situations[index].label} details are now available.`);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const selector = selectorRef.current;
    if (!selector) return;

    dragStateRef.current = {
      moved: false,
      pointerId: event.pointerId,
      scrollLeft: selector.scrollLeft,
      startX: event.clientX,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const selector = selectorRef.current;
    const dragState = dragStateRef.current;
    if (!selector || dragState.pointerId !== event.pointerId) return;

    const delta = event.clientX - dragState.startX;
    if (!dragState.moved && Math.abs(delta) < 4) return;

    if (!dragState.moved) {
      selector.setPointerCapture(event.pointerId);
    }

    dragState.moved = true;
    setIsDragging(true);
    selector.scrollLeft = dragState.scrollLeft - delta;
    event.preventDefault();
  }

  function finishPointerDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const selector = selectorRef.current;
    const dragState = dragStateRef.current;
    if (!selector || dragState.pointerId !== event.pointerId) return;

    suppressClickRef.current = dragState.moved;
    dragStateRef.current.pointerId = -1;
    setIsDragging(false);

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);

    if (selector.hasPointerCapture(event.pointerId)) {
      selector.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <>
      <div
        className={`${styles.selectorViewport}${hasOverflowAfter ? ` ${styles.hasOverflowAfter}` : ""}`}
      >
        <div
          ref={selectorRef}
          className={`${styles.selector}${isDragging ? ` ${styles.dragging}` : ""}`}
          role="group"
          aria-describedby={descriptionId}
          aria-labelledby={headingId}
          onClickCapture={(event) => {
            if (!suppressClickRef.current) return;
            suppressClickRef.current = false;
            event.preventDefault();
            event.stopPropagation();
          }}
          onPointerCancel={finishPointerDrag}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishPointerDrag}
        >
          {situations.map((situation, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={situation.slug}
                id={`situation-option-${situation.slug}`}
                className={`${styles.option} text-body${isSelected ? ` ${styles.selectedOption}` : ""}`}
                type="button"
                aria-controls={selectedContentId}
                aria-pressed={isSelected}
                onClick={() => selectSituation(index)}
                onFocus={(event) =>
                  event.currentTarget.scrollIntoView({
                    behavior: "auto",
                    block: "nearest",
                    inline: "nearest",
                  })
                }
              >
                <span className={styles.optionLabel}>{situation.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={selectedContentId}
        className={styles.selectedContent}
        role="region"
        aria-labelledby={`situation-option-${selected.slug}`}
      >
        <div className={styles.situationDetails}>
          <h3 className={`${styles.situationHeading} text-heading-3`}>
            {selected.heading}
          </h3>
          <p className={`${styles.explanation} text-body-large`}>
            {selected.explanation}
          </p>
          <TextLink href={`/situations/${selected.slug}`}>
            Learn More About {selected.label}
          </TextLink>
        </div>
      </div>

      <div className={styles.contactOption}>
        <IconContainer icon={MessageCircle} aria-hidden="true" />
        <p className={`${styles.contactText} text-body-small`}>
          Not sure which situation fits?{" "}
          <TextLink href="/contact">
            Contact us
          </TextLink>{" "}
          and we&apos;ll point you in the right direction.
        </p>
      </div>

      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </>
  );
}
