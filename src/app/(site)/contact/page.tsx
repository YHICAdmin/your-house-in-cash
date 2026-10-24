import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactExperience } from "@/components/contact/contact-experience";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Your House in Cash",
  description: "Ask Noah a question or talk through your options for selling a Cleveland-area property.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <main>
        <section className={`${styles.contact} section-spacing system-lines-bg`} aria-labelledby="contact-heading">
          <div className={styles.linePattern} aria-hidden="true" />
          <ContactExperience />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
