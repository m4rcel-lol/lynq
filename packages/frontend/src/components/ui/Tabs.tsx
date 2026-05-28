import type { ReactNode } from "react";

type Tab = { id: string; label: string; content: ReactNode };

export function Tabs({ tabs, activeId, onChange }: { tabs: Tab[]; activeId: string; onChange: (id: string) => void }) {
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  return (
    <div>
      <div role="tablist" style={{ display: "flex", gap: 8 }}>
        {tabs.map((tab) => (
          <button key={tab.id} role="tab" aria-selected={tab.id === active?.id} onClick={() => onChange(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{active?.content}</div>
    </div>
  );
}
