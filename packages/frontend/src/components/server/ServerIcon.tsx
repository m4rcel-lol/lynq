import type { Server } from "../../types/api";
import { cx } from "../../lib/utils";
import styles from "./ServerIcon.module.css";

export function ServerIcon({ server, active, onClick }: { server: Server; active: boolean; onClick: () => void }) {
  return (
    <button aria-label={server.name} className={cx(styles.button, active && styles.active)} onClick={onClick} title={server.name}>
      {server.iconUrl ? <img alt={server.name} className={styles.image} src={server.iconUrl} /> : server.name.slice(0, 2).toUpperCase()}
    </button>
  );
}
