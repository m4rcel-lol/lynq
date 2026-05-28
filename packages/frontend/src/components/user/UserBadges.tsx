import { Shield, Star, Terminal } from "lucide-react";
import { Badge } from "../ui/Badge";

const badgeIcons = {
  staff: Shield,
  partner: Star,
  active_dev: Terminal
} as const;

export function UserBadges({ badges }: { badges: string[] }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {badges.map((badge) => {
        const Icon = badgeIcons[badge as keyof typeof badgeIcons] ?? Star;
        return (
          <Badge key={badge}>
            <Icon size={12} aria-hidden /> {badge}
          </Badge>
        );
      })}
    </div>
  );
}
