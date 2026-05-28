import type { ReactNode } from "react";

export function Popover({ children }: { children: ReactNode }) {
  return (
    <div role="dialog" className="glass" style={{ borderRadius: 8, padding: 12 }}>
      {children}
    </div>
  );
}
