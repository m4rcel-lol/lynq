import { $getRoot, type EditorState } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { Bold, Code, Italic, Link, Paperclip, Smile, Strikethrough, Underline } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../../lib/api";
import { Button } from "../ui/Button";
import styles from "./Message.module.css";

export function MessageInput({ channelId, channelName }: { channelId: string; channelName: string }) {
  const { t } = useTranslation();
  const [content, setContent] = useState("");

  function onChange(editorState: EditorState) {
    editorState.read(() => {
      setContent($getRoot().getTextContent());
    });
  }

  async function send() {
    const trimmed = content.trim();
    if (!trimmed) {
      return;
    }
    await api.sendMessage(channelId, { content: trimmed });
  }

  return (
    <div className={styles.composer}>
      <div className={styles.toolbar} aria-label="Formatting toolbar">
        {[Bold, Italic, Underline, Strikethrough, Code, Link, Paperclip, Smile].map((Icon) => (
          <Button iconOnly key={Icon.displayName ?? Icon.name} type="button" variant="ghost">
            <Icon size={16} aria-hidden />
          </Button>
        ))}
      </div>
      <LexicalComposer initialConfig={{ namespace: "lynq-message", onError: (error) => console.error(error), theme: {} }}>
        <PlainTextPlugin
          contentEditable={<ContentEditable aria-label={t("chat.placeholder", { channel: channelName })} className={styles.editor} />}
          ErrorBoundary={({ children }) => <>{children}</>}
          placeholder={<span style={{ color: "var(--text-muted)" }}>{t("chat.placeholder", { channel: channelName })}</span>}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
        <Button onClick={() => void send()} variant="primary">
          {t("chat.send")}
        </Button>
      </div>
    </div>
  );
}
