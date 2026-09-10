import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/ui/text-link";
import { navigationItems } from "@/data/navigation";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} section-spacing system-lines-bg`}>
      <div className={`${styles.layout} content-grid`}>
        <div className={styles.company}>
          <Link className={styles.logoLink} href="/" aria-label="Your House in Cash home">
            <Image
              className={styles.logo}
              src="/brand/Logo.svg"
              alt="Your House in Cash"
              width={5423}
              height={3534}
            />
          </Link>
          <p className={`${styles.description} text-body`}>
            We buy houses as-is throughout Northeast Ohio and provide
            straightforward cash offers without repairs, showings, or agent fees.
          </p>
        </div>

        <nav className={styles.navigation} aria-labelledby="footer-explore-heading">
          <h2 id="footer-explore-heading" className={`${styles.heading} text-heading-4`}>
            Explore
          </h2>
          <ul className={styles.links}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <TextLink href={item.href}>{item.label}</TextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.legal}>
          <h2 className={`${styles.heading} text-heading-4`}>Legal</h2>
          <ul className={styles.links}>
            <li><TextLink href="/privacy-policy">Privacy Policy</TextLink></li>
            <li><TextLink href="/terms-of-service">Terms of Service</TextLink></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2 className={`${styles.heading} text-heading-4`}>Contact</h2>
          <p className={`${styles.callLabel} text-label`}>Call Us</p>
          <TextLink href="tel:2161111111">216-111-1111</TextLink>
          <p className={`${styles.serviceArea} text-body-small`}>
            Serving Northeast Ohio
          </p>
        </div>

        <div className={styles.bottomRow}>
          <p className="text-body-small">
            © {new Date().getFullYear()} Your House in Cash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
