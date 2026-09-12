import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { getExternalLinkProps } from "@/lib/link-target";
import styles from "./text-link.module.css";

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className"
> & {
  children: ReactNode;
  className?: string;
  href: string;
};

type TextLinkProps = AnchorProps | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & { children: ReactNode; href?: never });

export function TextLink({ children, className, ...props }: TextLinkProps) {
  const linkClassName = `${styles.link}${className ? ` ${className}` : ""}`;

  if (props.href === undefined) {
    return <button {...props} type={props.type ?? "button"} className={linkClassName}>{children}</button>;
  }

  return (
    <a {...props} {...getExternalLinkProps(props.href)} className={linkClassName}>
      {children}
    </a>
  );
}
