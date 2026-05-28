import { useNotificationStore } from "../../store/notifications";

export function Toast() {
  const items = useNotificationStore((state) => state.items);
  return (
    <div role="status" aria-live="polite" style={{ position: "fixed", right: 16, bottom: 16, zIndex: 400 }}>
      {items.slice(0, 3).map((item) => (
        <div className="glass" key={item.id} style={{ marginTop: 8, padding: 12, borderRadius: 8, maxWidth: 320 }}>
          <strong>{item.title}</strong>
          <p style={{ margin: "4px 0 0", color: "var(--text-secondary)" }}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
