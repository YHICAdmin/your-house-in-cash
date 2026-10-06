import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, FileCheck2, Handshake, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import styles from "./page.module.css";

const coreValues = [
  {
    value: "Clarity",
    description: "Offers and next steps are explained in plain language, so you understand what you’re considering.",
    Icon: MessageCircle,
  },
  {
    value: "Respect",
    description: "Your priorities guide the conversation, with space to make the decision that feels right for you.",
    Icon: Handshake,
  },
  {
    value: "Honesty",
    description: "The offer, its limitations, and whether a direct sale fits are discussed upfront.",
    Icon: ShieldCheck,
  },
  {
    value: "Accountability",
    description: "Commitments are carried through, and changes are communicated clearly when they arise.",
    Icon: ClipboardCheck,
  },
] as const;

export const metadata: Metadata = {
  title: "About Us | Your House in Cash",
  description: "Meet Noah, the person behind Your House in Cash, and learn about a clearer, more direct way to discuss selling a Cleveland home.",
};

export default function AboutUsPage() {
  return (
    <>
      <main>
        <section className={`${styles.hero} section-spacing system-lines-bg`} aria-labelledby="about-us-heading">
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.content}>
              <h1 id="about-us-heading" className={`${styles.heading} text-display`}>
                Hi, I’m Noah. I make Cleveland home sales clearer.
              </h1>
              <p className={`${styles.supportingCopy} text-body-large`}>
                My Cleveland real estate journey began in 2021. I believe homeowners deserve a straightforward conversation about their options—not pressure, confusing sales language, or a one-size-fits-all answer.
              </p>
              <Button href="/contact" variant="conversion">Talk Through Your Options</Button>
            </div>
            <div className={styles.visual}>
              <Image
                src="/images/about-us/noah-founder-hero.png"
                alt="Noah standing beside a house on a residential street"
                fill
                sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </section>
        <section className={`${styles.coreValues} section-spacing system-lines-bg`} aria-label="Core values">
          <ul className={`${styles.valueGrid} content-grid`}>
            {coreValues.map(({ value, description, Icon }) => (
              <li className={styles.valueCard} key={value}>
                <Icon className={styles.valueIcon} aria-hidden="true" />
                <p className={`${styles.valueDescription} text-body`}>{description}</p>
                <strong className={`${styles.valueName} text-body`}>{value}</strong>
              </li>
            ))}
          </ul>
        </section>
        <section className={`${styles.expectations} section-spacing system-lines-bg`} aria-labelledby="expectations-heading">
          <div className={`${styles.expectationsLayout} content-grid`}>
            <div className={styles.expectationsText}>
              <h2 id="expectations-heading" className={`${styles.expectationsHeading} text-heading-2`}>
                What you can expect from me
              </h2>
              <div className={styles.expectationsParagraphs}>
                <p className="text-body"><strong>Clear follow-through.</strong> You stay updated, and commitments are carried through.</p>
                <p className="text-body"><strong>Upfront communication.</strong> Terms, costs, and timing are discussed early. Changes are explained promptly.</p>
                <p className="text-body"><strong>The full picture.</strong> You understand how the offer works, who is involved, and what you’re agreeing to before deciding.</p>
                <p className="text-body"><strong>Steady progress.</strong> Questions, paperwork, and timing issues are kept moving forward.</p>
              </div>
            </div>
            <div className={styles.expectationsPhoto}>
              <Image
                src="/images/about-us/clear-communication-kitchen-table.png"
                alt="Two people reviewing home-sale paperwork together at a table."
                fill
                sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <ul className={`${styles.expectationsBenefits} content-grid`}>
            <li className={styles.expectationsBenefit}>
              <span className={styles.benefitGraphic} aria-hidden="true"><FileCheck2 /></span>
              <p className="text-body"><strong>Heavy lifting handled.</strong> Paperwork, title coordination, and closing details are managed so you have fewer things to handle.</p>
            </li>
            <li className={styles.expectationsBenefit}>
              <span className={styles.benefitGraphic} aria-hidden="true"><MessageCircle /></span>
              <p className="text-body"><strong>Direct communication.</strong> You can ask questions, raise concerns, and stay informed as the sale moves forward.</p>
            </li>
          </ul>
        </section>
        <section className={`${styles.finalCta} section-spacing system-lines-bg`} aria-labelledby="final-cta-heading">
          <div className={`${styles.finalCtaLayout} content-grid`}>
            <div className={styles.finalCtaComposition}>
              <h2 id="final-cta-heading" className={`${styles.finalCtaHeading} text-heading-2`}>
                Let’s talk about what works for you.
              </h2>
              <p className={`${styles.finalCtaSupportingCopy} text-body-large`}>
                Whether you’re ready to sell or still weighing your options, tell me about your property and what matters to you. We can talk through whether working together makes sense.
              </p>
              <Button href="/contact" variant="conversion">
                Talk Through Your Options
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter background="soft" />
    </>
  );
}
