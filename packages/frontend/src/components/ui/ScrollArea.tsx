import type { ReactNode } from "react";

export function ScrollArea({ children }: { children: ReactNode }) {
  return <div style={{ overflow: "auto", minHeight: 0 }}>{children}</div>;
}
