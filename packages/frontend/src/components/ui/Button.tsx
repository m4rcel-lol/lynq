import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/utils";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "ghost" | "danger";
  iconOnly?: boolean;
  children: ReactNode;
};

export function Button({ variant = "default", iconOnly = false, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cx(
        styles.button,
        variant === "primary" && styles.primary,
        variant === "ghost" && styles.ghost,
        variant === "danger" && styles.danger,
        iconOnly && styles.icon,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
