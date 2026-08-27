import styles from "./line-system.module.css";

type LineSystemProps = {
  variant?: "global" | "local";
};

export function LineSystem({ variant = "global" }: LineSystemProps) {
  return (
    <div
      className={`${styles.system} ${styles.grid} ${variant === "local" ? styles.local : ""}`}
      aria-hidden="true"
    >
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
