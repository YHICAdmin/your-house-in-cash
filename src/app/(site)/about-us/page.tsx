import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import styles from "./page.module.css";

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
            <div className={styles.visual} aria-hidden="true" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
