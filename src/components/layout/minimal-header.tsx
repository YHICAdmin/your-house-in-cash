import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/ui/text-link";
import styles from "./minimal-shell.module.css";

export function MinimalHeader() {
  return <header className={`${styles.header} system-lines-bg`}>
    <div className={`content-inset ${styles.inner}`}>
      <Link href="/" aria-label="Your House in Cash home">
        <Image className={styles.logo} src="/brand/Logo.svg" width={542} height={353} alt="" priority />
      </Link>
      <div className={styles.contact}>
        <span className="text-body-small">Talk to a real person</span>
        <TextLink href="tel:2161111111">216-111-1111</TextLink>
      </div>
    </div>
  </header>;
}
