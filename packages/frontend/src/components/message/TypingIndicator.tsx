export function TypingIndicator({ names }: { names: string[] }) {
  if (names.length === 0) {
    return null;
  }
  return (
    <p aria-live="polite" style={{ color: "var(--text-muted)", margin: "0 16px 8px" }}>
      {names.join(", ")} typing...
    </p>
  );
}
