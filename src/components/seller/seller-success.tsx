"use client";
import { useEffect, useRef } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <CircleCheck className={styles.successIcon} aria-hidden="true" />
    <div className={styles.successIntro}>
      <h1 ref={ref} tabIndex={-1} className="text-heading-2">{first ? `You’re all set, ${first}.` : "You’re all set."}</h1>
      <p className="text-body">Thanks — we’ve received your property details and will be in touch.</p>
    </div>
    <div className={styles.successActions}>
      <h2 className="text-heading-3">Want to talk sooner?</h2>
      <p className="text-body">Choose a time that works for you, and we’ll call you then.</p>
      <Button href={bookingUrl} variant="conversion">Schedule a Free 15-Minute Call</Button>
      <Button href="/">Back to home</Button>
    </div>
  </div>;
}
