import type { ReactNode } from "react";
import styles from "./area-intro-transition.module.css";

type AreaIntroTransitionProps = {
  hero: ReactNode;
  children?: ReactNode;
};

export function AreaIntroTransition({ hero, children }: AreaIntroTransitionProps) {
  return (
    <div className={`${styles.transition} system-lines-bg`}>
      <div className={styles.heroStage}>
        <div className={styles.background} aria-hidden="true" />
        {hero}
      </div>
      <div className={styles.followingSection}>{children}</div>
    </div>
  );
}
