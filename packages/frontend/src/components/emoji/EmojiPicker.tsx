import { Button } from "../ui/Button";

const commonEmoji = ["😀", "😂", "🔥", "✨", "👍", "❤️", "🎉", "👀", "✅", "🚀"];

export function EmojiPicker({ onSelect }: { onSelect: (native: string) => void }) {
  return (
    <div aria-label="Emoji picker" role="listbox" style={{ display: "grid", gap: 6, gridTemplateColumns: "repeat(5, 36px)" }}>
      {commonEmoji.map((emoji) => (
        <Button iconOnly key={emoji} onClick={() => onSelect(emoji)} role="option" type="button" variant="ghost">
          <span aria-hidden>{emoji}</span>
        </Button>
      ))}
    </div>
  );
}
