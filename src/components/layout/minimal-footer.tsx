import { TextLink } from "@/components/ui/text-link";
import shared from "./site-footer.module.css";
import styles from "./minimal-footer.module.css";

export function MinimalFooter() {
  return <footer className={`${shared.footer} ${styles.footer} system-lines-bg`}>
    <div className="content-grid">
      <div className={shared.bottomRow}>
        <p className="text-body-small">© {new Date().getFullYear()} Your House in Cash. All rights reserved.</p>
        <ul className={`${shared.links} ${styles.legal}`}>
          <li><TextLink href="/privacy-policy">Privacy Policy</TextLink></li>
          <li><TextLink href="/terms-of-service">Terms of Service</TextLink></li>
        </ul>
      </div>
    </div>
  </footer>;
}
