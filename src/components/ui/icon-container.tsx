import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import styles from "./icon-container.module.css";

type IconContainerProps = HTMLAttributes<HTMLSpanElement> & {
  icon: LucideIcon;
  size?: "default" | "large";
};

export function IconContainer({
  icon: Icon,
  size = "default",
  className,
  ...props
}: IconContainerProps) {
  const containerClassName = `${styles.container} ${styles[size]}${className ? ` ${className}` : ""}`;
  const iconSize = size === "large" ? 24 : 20;

  return (
    <span {...props} className={containerClassName}>
      <Icon size={iconSize} focusable="false" />
    </span>
  );
}
