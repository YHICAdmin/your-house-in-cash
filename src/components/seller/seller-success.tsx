"use client";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarClock, CalendarDays, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import styles from "./seller-form.module.css";

const calBookingUrl = "https://cal.com/yourhouseincash/15min";

function getCalBookingUrl(name: string, email: string) {
  const searchParams = new URLSearchParams({ name, email });
  return `${calBookingUrl}?${searchParams}`;
}

export function SellerSuccess({ name, email }: { name: string; email: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const first = name.trim().split(/\s+/)[0];
  const bookingUrl = getCalBookingUrl(name, email);

  return <div className={styles.success}>
    <div className={styles.successIcon} aria-hidden="true">
      <CircleCheck />
      <span className={styles.successRays}><i /><i /><i /></span>
    </div>
    <div className={styles.successIntro}>
      <h1 ref={ref} tabIndex={-1} className="text-heading-2">{first ? `You’re all set, ${first}.` : "You’re all set."}</h1>
      <p className="text-body-large">We’ve received your property details and will be in touch soon.</p>
    </div>
    <div className={styles.successActions}>
      <div className={styles.scheduleIllustration} aria-hidden="true"><CalendarClock /></div>
      <div className={styles.scheduleCopy}>
        <h2 className="text-heading-4">Can’t wait to chat?</h2>
        <p className="text-body">Pick a time that works for you, and we’ll give you a call.</p>
      </div>
      <Button href={bookingUrl} className={styles.scheduleButton}>
        <CalendarDays aria-hidden="true" />
        <span>Schedule a Call</span>
        <ArrowRight aria-hidden="true" />
      </Button>
    </div>
    <TextLink href="/" className={styles.backHome}><ArrowLeft aria-hidden="true" />Back to home</TextLink>
  </div>;
}
