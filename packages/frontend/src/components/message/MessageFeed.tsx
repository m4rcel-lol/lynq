import { useEffect, useMemo, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";
import { useSocket } from "../../hooks/useSocket";
import { useVirtualScroll } from "../../hooks/useVirtualScroll";
import { useMessageStore } from "../../store/messages";
import { Message } from "./Message";
import styles from "./Message.module.css";

export function MessageFeed({ channelId }: { channelId: string }) {
  useSocket();
  const parentRef = useRef<HTMLDivElement>(null);
  const setMessages = useMessageStore((state) => state.setMessages);
  const messages = useMessageStore((state) => state.byChannel[channelId] ?? []);
  const query = useQuery({
    queryKey: ["messages", channelId],
    queryFn: () => api.messages(channelId),
    enabled: Boolean(channelId)
  });

  useEffect(() => {
    if (query.data) {
      setMessages(channelId, query.data.items);
    }
  }, [channelId, query.data, setMessages]);

  const virtualizer = useVirtualScroll(messages.length, parentRef);
  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const rows = useMemo(() => virtualItems, [virtualItems]);

  if (query.isLoading) {
    return <div className={styles.feed}>Loading...</div>;
  }

  return (
    <div aria-label="Messages" aria-live="polite" className={styles.feed} ref={parentRef} role="log">
      <div style={{ height: totalSize, position: "relative" }}>
        {rows.map((row) => {
          const message = messages[row.index];
          if (!message) {
            return null;
          }
          return (
            <div
              className={styles.row}
              key={message.id}
              ref={virtualizer.measureElement}
              style={{ transform: `translateY(${row.start}px)` }}
            >
              <Message message={message} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
