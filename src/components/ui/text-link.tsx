import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./text-link.module.css";

type TextLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className"
> & {
  children: ReactNode;
  className?: string;
  href: string;
  inheritTypography?: boolean;
};

export function TextLink({
  children,
  className,
  inheritTypography = false,
  ...props
}: TextLinkProps) {
  const linkClassName = [
    styles.link,
    inheritTypography ? styles.inheritTypography : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a {...props} className={linkClassName}>
      {children}
    </a>
  );
}
