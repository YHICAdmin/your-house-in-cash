import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, House } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
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
              <h1 id="about-us-heading" className={styles.introductionTitle}>
                <SectionLabel icon={House}>About Us</SectionLabel>
              </h1>
              <p className={`${styles.introductionSubtitle} text-body`}>
                Hi, I’m Noah, the person behind Your House in Cash. My Cleveland real estate journey began in 2021, and I work with Cleveland-area homeowners who want a clear, direct option for selling a house.
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

        <section className={`${styles.section} ${styles.beliefs} section-spacing system-lines-bg`} aria-labelledby="belief-heading">
          <div className={`${styles.beliefsLayout} content-grid`}>
            <div className={styles.beliefLeft}>
              <SectionLabel icon={Handshake}>What I Believe</SectionLabel>
              <h2 id="belief-heading" className={`${styles.beliefStatement} text-heading-2`}>
                You deserve a clear, honest option before deciding what to do with your house.
              </h2>
            </div>
            <div className={styles.beliefRight}>
              <h3 className={`${styles.beliefSubheading} text-heading-3`}>There isn’t one right path.</h3>
              <div className={styles.beliefCopy}>
                <p className="text-body">
                  Sometimes listing with an agent is the best path. Other times, the work, time, showings, uncertainty, or condition of the property make an as-is sale more practical.
                </p>
                <p className="text-body">
                  Either way, you should be able to understand the real options before deciding what comes next.
                </p>
                <p className={`${styles.beliefClosing} text-body`}>That’s why I started Your House in Cash.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.directAnswer} section-spacing system-lines-bg`} aria-labelledby="direct-answer-heading">
          <div className={`${styles.directAnswerLayout} content-grid`}>
            <h2 id="direct-answer-heading" className={`${styles.directAnswerHeading} text-heading-2`}>A Direct Answer, Early</h2>
            <div className={styles.directAnswerContent}>
              <p className={`${styles.directContact} text-heading-3`}>
                When you contact Your House in Cash, you speak directly with me.
              </p>
              <p className={`${styles.assessment} text-body`}>
                I take the time to understand the property and your situation before making an offer. My goal is not to force every house into a deal. It is to identify whether there is a realistic path to a completed sale.
              </p>
              <div className={styles.outcomes}>
                <p className="text-body">I’ll explain the offer and the next steps clearly.</p>
                <p className="text-body">I’ll be upfront about that too.</p>
              </div>
              <p className={`${styles.directClosing} text-body-large`}>
                Either way, you get a clear answer without pressure.
              </p>
            </div>
            <figure className={styles.directAnswerPhotograph}>
              <Image
                src="/images/about-us/noah-founder.png"
                alt="Noah standing outside a house"
                fill
                sizes="(min-width: 1200px) 40vw, (min-width: 768px) 50vw, 100vw"
              />
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.expectations} section-spacing system-lines-bg`} aria-labelledby="expectations-heading">
          <div className={`${styles.expectationsLayout} content-grid`}>
            <div className={styles.expectationsHeader}>
              <SectionLabel>What You Can Expect</SectionLabel>
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
              <li className={`${styles.standard} ${styles.openStandard}`}>
                <p className={`${styles.standardNumber} text-label`}>03</p>
                <h3 className={`${styles.standardTitle} text-heading-4`}>No obligation</h3>
                <p className="text-body">An offer is simply one option. If listing, keeping the property, or taking another path makes more sense for you, you should choose what works best.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className={`${styles.section} ${styles.finalCta} section-spacing system-lines-bg`} aria-labelledby="final-cta-heading">
          <div className={`${styles.finalCtaLayout} content-grid`}>
            <div className={styles.finalCtaContent}>
              <h2 id="final-cta-heading" className={`${styles.finalCtaHeading} text-heading-2`}>Let’s Start With a Clear Number</h2>
              <div className={`${styles.finalCtaCopy} text-body-large`}>
                <p>If you are considering selling a Cleveland-area house, tell me a little about the property and your situation.</p>
                <p>I will review it and provide a no-obligation as-is cash offer, so you can decide whether it is the right fit.</p>
              </div>
              <Button href="/get-cash-offer">Get My Cash Offer</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
