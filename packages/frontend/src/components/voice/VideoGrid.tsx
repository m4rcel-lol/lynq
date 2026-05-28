import { UserVideoTile } from "./UserVideoTile";

export function VideoGrid({ participants }: { participants: Array<{ id: string; name: string }> }) {
  return (
    <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
      {participants.map((participant) => (
        <UserVideoTile key={participant.id} name={participant.name} />
      ))}
    </div>
  );
}
