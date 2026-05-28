import { Video } from "lucide-react";

export function UserVideoTile({ name }: { name: string }) {
  return (
    <div className="glass" style={{ aspectRatio: "16 / 9", borderRadius: 8, display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Video size={24} aria-hidden />
        <div>{name}</div>
      </div>
    </div>
  );
}
