export function EmojiDisplay({ emoji, label }: { emoji: string; label: string }) {
  return (
    <span aria-label={label} role="img">
      {emoji}
    </span>
  );
}
