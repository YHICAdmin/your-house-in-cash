import Image from "next/image";
import Link from "next/link";
import { PhoneContact } from "./phone-contact";
import styles from "./minimal-shell.module.css";

export function MinimalHeader() {
  return <header className={`${styles.header} system-lines-bg`}>
    <div className={`content-inset ${styles.inner}`}>
      <Link href="/" aria-label="Your House in Cash home">
        <Image className={styles.logo} src="/brand/Logo.svg" width={542} height={353} alt="" priority />
      </Link>
      <PhoneContact label="Still have questions?" mobileLabel="Questions?" />
    </div>
  </header>;
}
