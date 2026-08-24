import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./button.module.css";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
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

export function Button(props: ButtonProps) {
  const buttonClassName = `${styles.button}${props.className ? ` ${props.className}` : ""}`;

  if (props.href !== undefined) {
    const { children, href, ...linkProps } = props;

    return (
      <a {...linkProps} className={buttonClassName} href={href}>
        {children}
      </a>
    );
  }

  const { children, type = "button", ...buttonProps } = props;

  return (
    <button {...buttonProps} className={buttonClassName} type={type}>
      {children}
    </button>
  );
}
