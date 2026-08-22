import styles from "./line-system.module.css";

export function LineSystem() {
  return (
    <div className={`${styles.system} content-grid`} aria-hidden="true">
      <span
        className={`${styles.line} hidden tablet:col-start-4 tablet:block desktop:col-start-3`}
      />
      <span
        className={`${styles.line} hidden desktop:col-start-6 desktop:block`}
      />
      <span
        className={`${styles.line} hidden desktop:col-start-9 desktop:block`}
      />
    </div>
  );
}
