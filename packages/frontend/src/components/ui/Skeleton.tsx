export function Skeleton({ height = 20 }: { height?: number }) {
  return <div aria-hidden style={{ height, borderRadius: 6, background: "var(--bg-surface-2)" }} />;
}
