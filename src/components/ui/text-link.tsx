import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./text-link.module.css";

type TextLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className"
> & {
  children: ReactNode;
  className?: string;
  href: string;
};

export function TextLink({ children, className, ...props }: TextLinkProps) {
  const linkClassName = `${styles.link}${className ? ` ${className}` : ""}`;

  return (
    <a {...props} className={linkClassName}>
      {children}
    </a>
  );
}
