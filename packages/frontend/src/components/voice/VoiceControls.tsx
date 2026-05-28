import { Mic, MicOff, PhoneOff, Volume2, VolumeX } from "lucide-react";
import { emitQueued } from "../../lib/socket";
import { useVoiceStore } from "../../store/voice";
import { Button } from "../ui/Button";

export function VoiceControls() {
  const muted = useVoiceStore((state) => state.muted);
  const deafened = useVoiceStore((state) => state.deafened);
  const toggleMuted = useVoiceStore((state) => state.toggleMuted);
  const toggleDeafened = useVoiceStore((state) => state.toggleDeafened);
  const setVoiceChannel = useVoiceStore((state) => state.setVoiceChannel);
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", padding: 12 }}>
      <Button aria-pressed={muted} iconOnly onClick={toggleMuted}>
        {muted ? <MicOff size={18} aria-hidden /> : <Mic size={18} aria-hidden />}
      </Button>
      <Button aria-pressed={deafened} iconOnly onClick={toggleDeafened}>
        {deafened ? <VolumeX size={18} aria-hidden /> : <Volume2 size={18} aria-hidden />}
      </Button>
      <Button
        iconOnly
        onClick={() => {
          emitQueued((socket) => socket.emit("voice:leave"));
          setVoiceChannel(null);
        }}
        variant="danger"
      >
        <PhoneOff size={18} aria-hidden />
      </Button>
    </div>
  );
}
