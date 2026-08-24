import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./primary-button-link.module.css";

type PrimaryButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function PrimaryButtonLink({
  children,
  className,
  ...props
}: PrimaryButtonLinkProps) {
  return (
    <a
      className={`${styles.button}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </a>
  );
}
