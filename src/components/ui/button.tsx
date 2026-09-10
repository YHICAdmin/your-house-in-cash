import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./button.module.css";
import { getExternalLinkProps } from "@/lib/link-target";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "conversion" | "default";
};

type LinkButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const buttonClassName = `${styles.button}${variant === "conversion" ? ` ${styles.conversion}` : ""}${className ? ` ${className}` : ""}`;

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;

    return (
      <a {...linkProps} {...getExternalLinkProps(href)} className={buttonClassName} href={href}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button {...buttonProps} className={buttonClassName} type={type}>
      {children}
    </button>
  );
}
