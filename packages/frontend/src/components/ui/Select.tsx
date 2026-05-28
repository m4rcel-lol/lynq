import type { SelectHTMLAttributes } from "react";
import styles from "./Input.module.css";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Array<{ label: string; value: string }>;
};

export function Select({ label, id, options, ...props }: SelectProps) {
  const inputId = id ?? props.name;
  return (
    <label className={styles.field} htmlFor={inputId}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <select className={styles.input} id={inputId} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
