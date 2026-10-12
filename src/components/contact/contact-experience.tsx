"use client";

import { useEffect, useRef, useState } from "react";
import { Check, CircleCheck } from "lucide-react";
import { ContactForm } from "./contact-form";
import styles from "@/app/(site)/contact/page.module.css";

const conversationPoints = [
  "Ask about the process, timing, or your options.",
  "Hear directly from Noah.",
  "Decide if you want to take a next step.",
];

export function ContactExperience() {
  const [complete, setComplete] = useState(false);
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!complete) return;
    window.scrollTo(0, 0);
    successHeading.current?.focus({ preventScroll: true });
  }, [complete]);

  return (
    <div className={`${styles.layout} content-grid`}>
      {!complete && (
        <div className={styles.introduction}>
          <h1 id="contact-heading" className={`${styles.heading} text-display`}>Have a question? Let&apos;s talk.</h1>
          <p className={`${styles.supportingText} text-body-large`}>
            Have a question about your property or how we work? Send me a message. You don&apos;t need to be ready to sell to get in touch.
          </p>
          <ul className={styles.points}>
            {conversationPoints.map(point => (
              <li key={point} className="text-body"><Check size={16} aria-hidden="true" />{point}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={complete ? styles.successColumn : styles.formColumn}>
        <div className={complete ? styles.successCard : styles.formCard}>
          {complete ? (
            <div className={styles.success}>
              <CircleCheck className={styles.successIcon} aria-hidden="true" />
              <div>
                <h1 ref={successHeading} id="contact-heading" tabIndex={-1} className="text-heading-2">Thanks for reaching out.</h1>
                <p className={`${styles.successCopy} text-body`}>I&apos;ve received your message and will be in touch.</p>
              </div>
            </div>
          ) : (
            <ContactForm onSuccess={() => setComplete(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
