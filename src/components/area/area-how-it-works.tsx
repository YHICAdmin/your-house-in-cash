import { BadgeDollarSign, CalendarCheck, Cog, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./area-how-it-works.module.css";

const headingId = "how-it-works-heading";

const processCards = [
  {
    icon: House,
    eyebrow: "A FEW MINUTES",
    title: "Tell Us About Your House",
    body: "We take the time to understand your situation, learn about your property, and discuss your needs. You do not need to prepare the house, make repairs, or have every answer ready. We just want to understand what is going on and what would make a sale work for you.",
  },
  {
    icon: BadgeDollarSign,
    eyebrow: "NO OBLIGATION",
    title: "Get Your Cash Offer",
    body: "We review the information you shared, take a closer look at the property, and put together a fair, no-obligation cash offer. We explain the offer clearly so you can decide whether it works for your situation. There are no fees and no pressure to move forward.",
  },
  {
    icon: CalendarCheck,
    eyebrow: "YOUR TIMELINE",
    title: "Choose Your Closing Date",
    body: "If the offer works for you, you choose when you want to close. Whether you need to move quickly or need additional time, we work around your schedule and handle the details needed to complete the sale. Once closing is complete, you can move forward on your timeline.",
  },
] as const;

export function AreaHowItWorks() {
  return (
    <section
      className="section-spacing system-lines-bg"
      aria-labelledby={headingId}
    >
      <div className="content-grid">
        <div className={styles.intro}>
          <SectionLabel icon={Cog}>How It Works</SectionLabel>
          <h2 id={headingId} className={`${styles.heading} text-heading-2`}>
            Selling your house can be simple.
          </h2>
          <p className={`${styles.supportingCopy} text-body-large`}>
            See how easy it is to sell your house for cash in just three simple
            steps.
          </p>
        </div>

        <ol className={styles.processCards}>
          {processCards.map((card) => (
            <li key={card.title} className={styles.processCard}>
              <div className={styles.cardMeta}>
                <IconContainer
                  icon={card.icon}
                  size="large"
                  aria-hidden="true"
                />
                <span className={`${styles.cardEyebrow} text-label`}>
                  {card.eyebrow}
                </span>
              </div>
              <h3 className={`${styles.cardTitle} text-heading-3`}>
                {card.title}
              </h3>
              <p className={`${styles.cardBody} text-body-small`}>
                {card.body}
              </p>
            </li>
          ))}
        </ol>

        <div className={styles.cta}>
          <Button href="/get-cash-offer">Get My Cash Offer</Button>
        </div>
      </div>
    </section>
  );
}
