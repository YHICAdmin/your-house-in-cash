import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import styles from "./icon-container.module.css";

type IconContainerProps = HTMLAttributes<HTMLSpanElement> & {
  icon: LucideIcon;
};

export function IconContainer({
  icon: Icon,
  className,
  ...props
}: IconContainerProps) {
  const containerClassName = `${styles.container}${className ? ` ${className}` : ""}`;

  return (
    <span {...props} className={containerClassName}>
      <Icon size={20} focusable="false" />
    </span>
  );
}
