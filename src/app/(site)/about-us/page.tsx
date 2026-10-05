import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, FileCheck2, Handshake, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import styles from "./page.module.css";

const coreValues = [
  {
    value: "Clarity",
    description: "I explain the offer and the next steps in plain language, so you understand what you’re considering.",
    Icon: MessageCircle,
  },
  {
    value: "Respect",
    description: "I listen to your priorities and give you space to make the decision that feels right for you.",
    Icon: Handshake,
  },
  {
    value: "Honesty",
    description: "I’m upfront about what I can offer, any limitations, and whether we’re a good fit.",
    Icon: ShieldCheck,
  },
  {
    value: "Accountability",
    description: "I take responsibility for my part of the process and communicate when something changes.",
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
        <section className={`${styles.coreValues} section-spacing`} aria-label="Core values">
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
                <p className="text-body"><strong>I follow through.</strong> I stay involved, keep you updated, and take responsibility for the commitments I make.</p>
                <p className="text-body"><strong>You know what to expect.</strong> We discuss the terms, costs, and timeline upfront. If something changes, I explain it promptly.</p>
                <p className="text-body"><strong>You get the full picture.</strong> I explain how the offer works, who is involved, and what you’re agreeing to before you decide.</p>
                <p className="text-body"><strong>I keep things moving.</strong> When questions, paperwork, or timing issues come up, I stay on top of the details and help keep the sale moving forward.</p>
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
              <p className="text-body"><strong>I handle the heavy lifting.</strong> I help coordinate the paperwork, title company, and closing details, so you have fewer things to manage.</p>
            </li>
            <li className={styles.expectationsBenefit}>
              <span className={styles.benefitGraphic} aria-hidden="true"><MessageCircle /></span>
              <p className="text-body"><strong>We stay in touch.</strong> You can ask questions, raise concerns, and reach me directly. I keep you informed as the sale moves forward.</p>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
