import { Check } from "lucide-react";
import { Button } from "./Button";

type ToggleProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export function Toggle({ checked, label, onChange }: ToggleProps) {
  return (
    <Button aria-pressed={checked} onClick={() => onChange(!checked)} variant={checked ? "primary" : "default"}>
      {checked ? <Check size={16} aria-hidden /> : null}
      {label}
    </Button>
  );
}
