import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactForm } from "@/components/contact/contact-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Your House in Cash",
  description: "Ask Noah a question or talk through your options for selling a Cleveland-area property.",
};

const conversationPoints = [
  "Speak directly with Noah.",
  "Get clear answers about your options.",
  "Start a conversation without committing to sell.",
];

export default function ContactPage() {
  return (
    <>
      <main>
        <section className={`${styles.contact} section-spacing system-lines-bg`} aria-labelledby="contact-heading">
          <div className={styles.linePattern} aria-hidden="true" />
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.introduction}>
              <h1 id="contact-heading" className={`${styles.heading} text-display`}>Let’s talk about your property.</h1>
              <p className={`${styles.supportingText} text-body-large`}>
                Have a question or considering selling? Tell me what’s on your mind, and we can discuss what makes sense for you.
              </p>
              <ul className={styles.points}>
                {conversationPoints.map(point => (
                  <li key={point} className="text-body"><Check size={16} aria-hidden="true" />{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.formColumn}>
              {process.env.NODE_ENV === "development" && (
                <p className={`${styles.demoNotice} text-body-small`}>Demo mode — details are not sent or saved. Refresh to reset.</p>
              )}
              <div className={styles.formCard}><ContactForm /></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
