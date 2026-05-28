import { MoreHorizontal, Pin, Reply, Smile } from "lucide-react";
import type { Message } from "../../types/api";
import { Button } from "../ui/Button";

export function MessageActions({ message }: { message: Message }) {
  return (
    <div aria-label="Message actions" style={{ display: "flex", gap: 4, marginTop: 6 }}>
      <Button iconOnly title="React" type="button" variant="ghost">
        <Smile size={14} aria-hidden />
      </Button>
      <Button iconOnly title="Reply" type="button" variant="ghost">
        <Reply size={14} aria-hidden />
      </Button>
      <Button aria-pressed={message.pinned} iconOnly title="Pin" type="button" variant="ghost">
        <Pin size={14} aria-hidden />
      </Button>
      <Button iconOnly title="More" type="button" variant="ghost">
        <MoreHorizontal size={14} aria-hidden />
      </Button>
    </div>
  );
}
