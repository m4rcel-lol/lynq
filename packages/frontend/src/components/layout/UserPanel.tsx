import { Headphones, Mic, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/auth";
import { Avatar } from "../user/Avatar";
import { Button } from "../ui/Button";
import styles from "./Layout.module.css";

export function UserPanel() {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);
  return (
    <footer className={styles.userPanel}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
        <Avatar name={user?.displayName ?? t("app.name")} size={28} src={user?.avatarUrl} status={user?.status} />
        <div style={{ minWidth: 0 }}>
          <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.displayName ?? t("app.name")}</div>
          <small style={{ color: "var(--text-muted)" }}>#{user?.username ?? "0000"}</small>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <Button aria-label="Mute" iconOnly variant="ghost">
          <Mic size={15} aria-hidden />
        </Button>
        <Button aria-label="Deafen" iconOnly variant="ghost">
          <Headphones size={15} aria-hidden />
        </Button>
        <Button aria-label={t("nav.settings")} iconOnly variant="ghost">
          <Settings size={15} aria-hidden />
        </Button>
      </div>
    </footer>
  );
}
