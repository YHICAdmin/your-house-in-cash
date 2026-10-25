import { Bell, CircleDollarSign, Search, SlidersHorizontal } from "lucide-react";
import styles from "./buyers-list-benefits.module.css";

const benefits = [
  {
    icon: Search,
    heading: "Off-Market Opportunities",
    description: "Discover investment properties beyond traditional listings.",
  },
  {
    icon: SlidersHorizontal,
    heading: "Deals That Fit Your Criteria",
    description:
      "Receive opportunities based on your preferred locations, budget, and investment strategy.",
  },
  {
    icon: Bell,
    heading: "Direct Property Alerts",
    description: "Stay informed when new investment opportunities become available.",
  },
  {
    icon: CircleDollarSign,
    heading: "Free to Join",
    description: "Join our buyers list at no cost, with no obligation to purchase.",
  },
] as const;

export function BuyersListBenefits() {
  return (
    <section
      className={`${styles.section} section-spacing system-lines-bg`}
      aria-label="Benefits of joining our buyers list"
    >
      <div className="content-grid">
        <ul className={styles.list}>
          {benefits.map(({ icon: Icon, heading, description }) => (
            <li key={heading} className={styles.item}>
              <Icon className={styles.icon} aria-hidden="true" />
              <h2 className={`${styles.heading} text-heading-4`}>{heading}</h2>
              <p className={`${styles.description} text-body`}>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
