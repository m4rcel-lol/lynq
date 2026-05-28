import type { ReactNode } from "react";

type ContextMenuProps = {
  children: ReactNode;
};

export function ContextMenu({ children }: ContextMenuProps) {
  return (
    <div role="menu" className="glass">
      {children}
    </div>
  );
}
