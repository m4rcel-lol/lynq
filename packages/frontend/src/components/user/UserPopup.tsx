import type { PublicUser } from "../../types/api";
import { Avatar } from "./Avatar";
import { UserBadges } from "./UserBadges";

export function UserPopup({ user }: { user: PublicUser }) {
  return (
    <aside className="glass" role="dialog" style={{ borderRadius: 12, padding: 16, width: 320 }}>
      <Avatar name={user.displayName} size={80} src={user.avatarUrl} status={user.status} />
      <h2>{user.displayName}</h2>
      <p style={{ color: "var(--text-secondary)" }}>@{user.username}</p>
      {user.bio ? <p>{user.bio}</p> : null}
      <UserBadges badges={user.isLynqAdmin ? ["staff"] : []} />
    </aside>
  );
}
