import { useTranslation } from "react-i18next";
import { useVoiceStore } from "../../store/voice";
import { VoiceControls } from "./VoiceControls";
import { VideoGrid } from "./VideoGrid";

export function VoiceChannel() {
  const { t } = useTranslation();
  const channelId = useVoiceStore((state) => state.channelId);
  if (!channelId) {
    return null;
  }
  return (
    <section aria-label={t("chat.voice")} style={{ minHeight: 220 }}>
      <VideoGrid participants={[{ id: "local", name: "You" }]} />
      <VoiceControls />
    </section>
  );
}
