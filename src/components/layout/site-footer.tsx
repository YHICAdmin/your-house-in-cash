import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/ui/text-link";
import { footerNavigationItems } from "@/data/navigation";
import { getExternalLinkProps } from "@/lib/link-target";
import styles from "./site-footer.module.css";

const socialPlatforms = [
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/yourhouseincash",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/yourhouseincash/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/your-house-in-cash",
  },
  {
    name: "YouTube",
    icon: "youtube",
    href: "https://youtube.com/@yourhouseincash",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@yourhouseincash",
  },
  {
    name: "X",
    icon: "x",
    href: "https://x.com/yourhouseincash/",
  },
] as const;

export function SiteFooter({ background = "default" }: {
  background?: "default" | "soft" | "neutral";
}) {
  return (
    <footer className={`${styles.footer} section-spacing system-lines-bg`} data-background={background}>
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
            {footerNavigationItems.map((item) => (
              <li key={item.href}>
                <TextLink href={item.href}>{item.label}</TextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.legal}>
          <h2 className={`${styles.heading} text-heading-4`}>Legal &amp; Resources</h2>
          <ul className={styles.links}>
            <li><TextLink href="/privacy-policy">Privacy Policy</TextLink></li>
            <li><TextLink href="/terms-of-service">Terms of Service</TextLink></li>
            <li><TextLink href="/sitemap.xml">Sitemap</TextLink></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2 className={`${styles.heading} text-heading-4`}>Contact</h2>
          <p className={`${styles.callLabel} text-label`}>Call Us</p>
          <TextLink href="tel:2165109014">(216) 510-9014</TextLink>
          <TextLink className={styles.email} href="mailto:noah@yourhouseincash.com">
            noah@yourhouseincash.com
          </TextLink>
          <p className={`${styles.serviceArea} text-body-small`}>
            Serving Northeast Ohio
          </p>
        </div>

        <div className={styles.bottomRow}>
          <p className="text-body-small">
            © {new Date().getFullYear()} Your House in Cash. All rights reserved.
          </p>
          <ul className={styles.socialPlatforms} aria-label="Social media">
            {socialPlatforms.map((platform) => (
              <li key={platform.icon}>
                <a
                  className={styles.socialLink}
                  href={platform.href}
                  {...getExternalLinkProps(platform.href)}
                >
                  <Image
                    src={`/images/social-platforms/${platform.icon}.svg`}
                    alt={platform.name}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
