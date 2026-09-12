import { TextLink } from "@/components/ui/text-link";
import styles from "./minimal-shell.module.css";

export function MinimalFooter() {
  return <footer className={styles.footer}>
    <div className={`content-inset ${styles.legal}`}>
      <TextLink href="/privacy-policy">Privacy Policy</TextLink>
      <TextLink href="/terms-of-service">Terms of Service</TextLink>
    </div>
  </footer>;
}
