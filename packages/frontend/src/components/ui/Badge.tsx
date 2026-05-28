import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-pill)",
        padding: "2px 8px",
        color: "var(--text-secondary)",
        fontSize: "var(--font-size-xs)"
      }}
    >
      {children}
    </span>
  );
}
