import { memo } from "react";
import { renderMarkdown } from "../../lib/markdown";
import { formatRelativeTime } from "../../lib/utils";
import type { Message as MessageType } from "../../types/api";
import { Avatar } from "../user/Avatar";
import { Attachment } from "./Attachment";
import { Embed } from "./Embed";
import { MessageActions } from "./MessageActions";
import styles from "./Message.module.css";

type MessageProps = {
  message: MessageType;
  grouped?: boolean;
};

export const Message = memo(function Message({ message, grouped = false }: MessageProps) {
  return (
    <article className={styles.message}>
      <div>{grouped ? null : <Avatar name={message.authorId} size={36} />}</div>
      <div>
        {grouped ? null : (
          <div className={styles.author}>
            <span>{message.authorId.slice(0, 8)}</span>
            <time className={styles.time} dateTime={message.createdAt}>
              {formatRelativeTime(message.createdAt, navigator.language)}
            </time>
          </div>
        )}
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }} />
        {message.embeds.map((embed) => (
          <Embed embed={embed} key={embed.url} />
        ))}
        {message.attachments.map((attachment) => (
          <Attachment attachment={attachment} key={attachment.id} />
        ))}
        <MessageActions message={message} />
      </div>
    </article>
  );
});
