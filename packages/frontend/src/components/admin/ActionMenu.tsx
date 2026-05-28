import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/Button";

export function ActionMenu() {
  return (
    <Button aria-label="Actions" iconOnly variant="ghost">
      <MoreHorizontal size={16} aria-hidden />
    </Button>
  );
}
