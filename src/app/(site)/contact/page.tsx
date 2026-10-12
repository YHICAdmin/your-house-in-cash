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
  "Ask about the process, timing, or your options.",
  "Hear directly from Noah.",
  "Decide if you want to take a next step.",
];

export default function ContactPage() {
  return (
    <>
      <main>
        <section className={`${styles.contact} section-spacing system-lines-bg`} aria-labelledby="contact-heading">
          <div className={styles.linePattern} aria-hidden="true" />
          <div className={`${styles.layout} content-grid`}>
            <div className={styles.introduction}>
              <h1 id="contact-heading" className={`${styles.heading} text-display`}>Have a question? Let’s talk.</h1>
              <p className={`${styles.supportingText} text-body-large`}>
                Have a question about your property or how we work? Send me a message. You don’t need to be ready to sell to get in touch.
              </p>
              <ul className={styles.points}>
                {conversationPoints.map(point => (
                  <li key={point} className="text-body"><Check size={16} aria-hidden="true" />{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.formColumn}>
              <div className={styles.formCard}><ContactForm /></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
