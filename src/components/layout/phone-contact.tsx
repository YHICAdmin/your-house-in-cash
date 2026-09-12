import { Phone } from "lucide-react";
import styles from "./phone-contact.module.css";

export function PhoneContact({ className, label = "Call Us", mobileLabel }: {
  className?: string;
  label?: string;
  mobileLabel?: string;
}) {
  return (
    <a className={`${styles.contact}${className ? ` ${className}` : ""}`} href="tel:2161111111">
      <Phone className={styles.icon} aria-hidden="true" />
      <span className={`text-body-small${mobileLabel ? ` ${styles.desktopLabel}` : ""}`}>{label}</span>
      {mobileLabel && <span className={`text-body-small ${styles.mobileLabel}`}>{mobileLabel}</span>}
      <span className={styles.divider} aria-hidden="true" />
      <span className="text-body">216-111-1111</span>
    </a>
  );
}
