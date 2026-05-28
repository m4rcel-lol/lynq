import { ChevronDown, Hash, Megaphone, Mic, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useChannelStore } from "../../store/channels";
import { useServerStore } from "../../store/servers";
import { UserPanel } from "./UserPanel";
import styles from "./Layout.module.css";

function ChannelIcon({ type }: { type: string }) {
  if (type === "voice" || type === "stage") {
    return <Mic size={16} aria-hidden />;
  }
  if (type === "announcement") {
    return <Megaphone size={16} aria-hidden />;
  }
  return <Hash size={16} aria-hidden />;
}

export function ChannelSidebar() {
  const { t } = useTranslation();
  const servers = useServerStore((state) => state.servers);
  const activeServerId = useServerStore((state) => state.activeServerId);
  const channels = useChannelStore((state) => state.channels);
  const activeChannelId = useChannelStore((state) => state.activeChannelId);
  const setActiveChannel = useChannelStore((state) => state.setActiveChannel);
  const server = servers.find((candidate) => candidate.id === activeServerId);

  return (
    <aside className={styles.sidebar}>
      <header className={styles.serverHeader}>
        <strong>{server?.name ?? t("app.name")}</strong>
        <ChevronDown size={16} aria-hidden />
      </header>
      <div className={styles.channelList}>
        <div style={{ color: "var(--text-muted)", fontSize: 11, margin: "8px" }}>{t("server.channels").toUpperCase()}</div>
        {channels.map((channel) => (
          <button
            className={`${styles.channelButton} ${channel.id === activeChannelId ? styles.channelActive : ""}`}
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
          >
            <ChannelIcon type={channel.type} />
            <span>{channel.name}</span>
          </button>
        ))}
      </div>
      <UserPanel />
    </aside>
  );
}
