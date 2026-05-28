import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label className={styles.field} htmlFor={inputId}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <input className={styles.input} id={inputId} {...props} />
    </label>
  );
}
