export function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <article className="glass" style={{ borderRadius: 8, padding: 16 }}>
      <div style={{ color: "var(--text-muted)", fontSize: "var(--font-size-sm)" }}>{label}</div>
      <strong style={{ fontSize: "var(--font-size-xl)" }}>{value}</strong>
    </article>
  );
}
