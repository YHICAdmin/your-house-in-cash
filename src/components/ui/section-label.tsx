import type { LucideIcon } from "lucide-react";
import styles from "./section-label.module.css";

type SectionLabelProps = {
  children: string;
  icon?: LucideIcon;
};

export function SectionLabel({ children, icon: Icon }: SectionLabelProps) {
  return (
    <span className={`${styles.label} text-label`}>
      {Icon ? <Icon aria-hidden="true" size={16} /> : null}
      {children}
    </span>
  );
}
