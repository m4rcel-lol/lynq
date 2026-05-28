import { Select } from "../ui/Select";

const options = [
  { label: "Online", value: "online" },
  { label: "Idle", value: "idle" },
  { label: "Do not disturb", value: "dnd" },
  { label: "Invisible", value: "invisible" }
];

export function StatusPicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <Select label="Status" options={options} value={value} onChange={(event) => onChange(event.currentTarget.value)} />;
}
