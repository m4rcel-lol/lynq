export function ReplyPreview({ author, content }: { author: string; content: string }) {
  return (
    <div style={{ borderLeft: "2px solid var(--accent-primary)", color: "var(--text-secondary)", paddingLeft: 8 }}>
      <strong>{author}</strong> {content}
    </div>
  );
}
