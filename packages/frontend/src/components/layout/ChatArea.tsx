import { Inbox, Pin, Search, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useChannelStore } from "../../store/channels";
import { useUiStore } from "../../store/ui";
import { MessageFeed } from "../message/MessageFeed";
import { MessageInput } from "../message/MessageInput";
import { Button } from "../ui/Button";
import styles from "./Layout.module.css";

export function ChatArea() {
  const { t } = useTranslation();
  const channels = useChannelStore((state) => state.channels);
  const activeChannelId = useChannelStore((state) => state.activeChannelId);
  const membersOpen = useUiStore((state) => state.membersOpen);
  const setMembersOpen = useUiStore((state) => state.setMembersOpen);
  const channel = channels.find((candidate) => candidate.id === activeChannelId);

  if (!channel) {
    return (
      <main className={styles.chat} id="main">
        <div style={{ display: "grid", placeItems: "center" }}>{t("app.empty")}</div>
      </main>
    );
  }

  return (
    <main className={styles.chat} id="main">
      <header className={styles.chatHeader}>
        <div>
          <strong>#{channel.name}</strong>
          {channel.topic ? <span style={{ color: "var(--text-muted)", marginLeft: 10 }}>{channel.topic}</span> : null}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <Button aria-label={t("chat.search")} iconOnly variant="ghost">
            <Search size={17} aria-hidden />
          </Button>
          <Button aria-label={t("chat.inbox")} iconOnly variant="ghost">
            <Inbox size={17} aria-hidden />
          </Button>
          <Button aria-label={t("chat.pinned")} iconOnly variant="ghost">
            <Pin size={17} aria-hidden />
          </Button>
          <Button aria-label={t("chat.members")} iconOnly onClick={() => setMembersOpen(!membersOpen)} variant="ghost">
            <Users size={17} aria-hidden />
          </Button>
        </div>
      </header>
      <div className={styles.chatBody}>
        <MessageFeed channelId={channel.id} />
        {membersOpen ? (
          <aside className={styles.members}>
            <h3>{t("chat.members")}</h3>
            <p style={{ color: "var(--text-muted)" }}>{t("app.empty")}</p>
          </aside>
        ) : null}
      </div>
      <MessageInput channelId={channel.id} channelName={channel.name} />
    </main>
  );
}
