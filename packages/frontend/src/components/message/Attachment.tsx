import Hls from "hls.js";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { formatBytes } from "../../lib/utils";
import type { MessageAttachment } from "../../types/api";

export function Attachment({ attachment }: { attachment: MessageAttachment }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!attachment.url.endsWith(".m3u8") || !videoRef.current || !Hls.isSupported()) {
      return undefined;
    }
    const hls = new Hls();
    hls.loadSource(attachment.url);
    hls.attachMedia(videoRef.current);
    return () => hls.destroy();
  }, [attachment.url]);

  if (attachment.contentType.startsWith("image/")) {
    return <img alt={attachment.filename} src={attachment.url} style={{ maxHeight: 300, maxWidth: 400, borderRadius: 8 }} />;
  }
  if (attachment.contentType.startsWith("video/") || attachment.url.endsWith(".m3u8")) {
    return <video controls ref={videoRef} src={attachment.url.endsWith(".m3u8") ? undefined : attachment.url} style={{ maxWidth: 480 }} />;
  }
  if (attachment.contentType.startsWith("audio/")) {
    return <audio controls src={attachment.url} />;
  }
  return (
    <a className="glass" download href={attachment.url} style={{ display: "inline-flex", gap: 8, padding: 10, borderRadius: 8 }}>
      <Download size={16} aria-hidden />
      {attachment.filename} ({formatBytes(attachment.size)})
    </a>
  );
}
