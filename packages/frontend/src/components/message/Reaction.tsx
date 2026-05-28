import { Button } from "../ui/Button";

export function Reaction({ emoji, count, onClick }: { emoji: string; count: number; onClick: () => void }) {
  return (
    <Button onClick={onClick} type="button" variant="ghost">
      <span aria-hidden>{emoji}</span>
      <span>{count}</span>
    </Button>
  );
}
