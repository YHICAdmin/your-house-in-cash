"use client";

import { useEffect, useRef } from "react";
import { TextLink } from "@/components/ui/text-link";
import styles from "./seller-form.module.css";

// Render only after confirmed completion, never as a local submission fallback.
export function SellerSuccess({ name }: { name: string }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus(); }, []);
  const firstName = name.trim().split(/\s+/)[0];
  return <div>
    <div className={styles.intro}>
      <h1 ref={heading} tabIndex={-1} className="text-heading-2">{firstName ? `You're all set, ${firstName}.` : "You're all set."}</h1>
      <p className="text-body">We’ve received your details. Our team will review them and get in touch to discuss your property.</p>
    </div>
    <div className={styles.successPhone}>
      <span>Prefer to talk now?</span>
      <TextLink href="tel:2161111111">216-111-1111</TextLink>
    </div>
  </div>;
}

