import type { Metadata } from "next";
import Image from "next/image";
import { CircleCheck, House, ListChecks } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { FinalCta } from "@/components/ui/final-cta";
import { SectionLabel } from "@/components/ui/section-label";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Your House in Cash",
  description: "Meet Noah and learn what to expect when you explore selling your house with Your House in Cash.",
};

export default function AboutUsPage() {
  return (
    <>
      <main>
        <section className={`${styles.section} ${styles.introduction} section-spacing system-lines-bg`} aria-labelledby="about-us-heading">
          <div className={`${styles.introductionLayout} content-grid`}>
            <div className={styles.introductionCopy}>
              <div className={styles.introductionLabel}>
                <SectionLabel icon={House}>About Us</SectionLabel>
              </div>
              <h1 id="about-us-heading" className={`${styles.introductionTitle} text-heading-2`}>
                Hi, I’m Noah, the person behind Your House in Cash.
              </h1>
              <p className={`${styles.introductionSubtitle} text-body`}>
                My Cleveland real estate journey began in 2021, and I work with Cleveland-area homeowners who want a clear, direct option for selling a house.
              </p>
            </div>
            <figure className={styles.founderPhotograph}>
              <Image
                src="/images/about-us/noah-founder-introduction.png"
                alt="Noah standing outside a house"
                fill
                sizes="(min-width: 1200px) 40vw, (min-width: 768px) 60vw, 100vw"
                priority
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.beliefProcess} section-spacing system-lines-bg`} aria-labelledby="belief-process-heading">
          <div className={`${styles.beliefProcessLayout} content-grid`}>
            <h2 id="belief-process-heading" className={`${styles.beliefProcessTitle} text-heading-2`}>
              You deserve a clear, honest option.
            </h2>
            <div className={styles.beliefCards}>
              <article className={styles.beliefCard}>
                <h3 className={`${styles.beliefCardTitle} text-heading-3`}>There isn’t one right path.</h3>
                <p className={`${styles.beliefCardCopy} text-body`}>
                  Sometimes listing with an agent is the best path. Other times, the work, time, showings, uncertainty, or condition of the property make an as-is sale more practical. Either way, you should be able to understand the real options before deciding what comes next. That’s why I started Your House in Cash.
                </p>
                <figure className={styles.beliefCardImage}>
                  <Image src="/images/about-us/noah-founder.png" alt="Noah standing outside a house" fill sizes="(min-width: 768px) 40vw, 100vw" />
                </figure>
              </article>
              <article className={styles.beliefCard}>
                <h3 className={`${styles.beliefCardTitle} text-heading-3`}>A Direct Answer, Early</h3>
                <p className={`${styles.beliefCardCopy} text-body`}>
                  When you contact Your House in Cash, you speak directly with me. I take the time to understand the property and your situation before making an offer. My goal is not to force every house into a deal. It is to identify whether there is a realistic path to a completed sale. If there is a realistic path, I’ll explain the offer and the next steps clearly. If there is not, I’ll be upfront about that too. Either way, you get a clear answer without pressure.
                </p>
                <figure className={styles.beliefCardImage}>
                  <Image src="/images/about-us/noah-founder.png" alt="Noah standing outside a house" fill sizes="(min-width: 768px) 40vw, 100vw" />
                </figure>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.expectations} section-spacing system-lines-bg`} aria-labelledby="expectations-heading">
          <div className={`${styles.expectationsLayout} content-grid`}>
            <div className={styles.expectationsHeader}>
              <SectionLabel icon={ListChecks}>How I Work</SectionLabel>
              <h2 id="expectations-heading" className={`${styles.expectationsHeading} text-heading-2`}>What you can expect.</h2>
            </div>
            <ol className={styles.standards}>
              <li className={styles.standard}>
                <p className={`${styles.standardNumber} text-label`}>01</p>
                <h3 className={`${styles.standardTitle} text-heading-4`}>Clear communication</h3>
                <p className="text-body">You will know what the offer is, what it is based on, and what the next steps would look like before you decide anything.</p>
              </li>
              <li className={styles.standard}>
                <p className={`${styles.standardNumber} text-label`}>02</p>
                <h3 className={`${styles.standardTitle} text-heading-4`}>A practical as-is option</h3>
                <p className="text-body">You do not need to repair the house, prepare it for showings, or make it look perfect just to explore a direct sale.</p>
              </li>
            </ol>
          </div>
        </section>

        <FinalCta content={{
          label: "Ready When You Are",
          headline: "Let’s Start With a Clear Number",
          supportingCopy: "If you are considering selling a Cleveland-area house, tell me a little about the property and your situation. I will review it and provide a no-obligation as-is cash offer, so you can decide whether it is the right fit.",
          cta: { label: "Get My Cash Offer", href: "/get-cash-offer" },
          reassurance: "100% free. No obligation.",
          benefits: [
            { icon: House, heading: "A practical as-is option", supportingCopy: "You do not need to repair the house, prepare it for showings, or make it look perfect just to explore a direct sale." },
            { icon: CircleCheck, heading: "No obligation", supportingCopy: "An offer is simply one option. You should choose the path that works best for you." },
          ],
        }} />
      </main>
      <SiteFooter background="neutral" />
    </>
  );
}
