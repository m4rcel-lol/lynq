import { DndContext } from "@dnd-kit/core";
import { Compass, Home, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useServerStore } from "../../store/servers";
import { Button } from "../ui/Button";
import { ServerIcon } from "../server/ServerIcon";
import styles from "./Layout.module.css";

export function ServerRail() {
  const { t } = useTranslation();
  const servers = useServerStore((state) => state.servers);
  const activeServerId = useServerStore((state) => state.activeServerId);
  const setActiveServer = useServerStore((state) => state.setActiveServer);

  return (
    <nav aria-label={t("nav.home")} className={styles.rail}>
      <Button aria-label={t("nav.directMessages")} iconOnly variant="primary">
        <Home size={20} aria-hidden />
      </Button>
      <DndContext>
        {servers.map((server) => (
          <ServerIcon active={server.id === activeServerId} key={server.id} onClick={() => setActiveServer(server.id)} server={server} />
        ))}
      </DndContext>
      <Button aria-label={t("nav.addServer")} iconOnly>
        <Plus size={20} aria-hidden />
      </Button>
      <Button aria-label={t("nav.discover")} iconOnly>
        <Compass size={20} aria-hidden />
      </Button>
    </nav>
  );
}
