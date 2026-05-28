import { cx } from "../../lib/utils";
import styles from "./Avatar.module.css";

type AvatarProps = {
  src?: string | null | undefined;
  name: string;
  status?: string | undefined;
  size?: number;
};

export function Avatar({ src, name, status = "offline", size = 36 }: AvatarProps) {
  const initials = name.slice(0, 2).toUpperCase();
  return (
    <span
      className={cx(styles.avatar, status === "online" && styles.online, status === "idle" && styles.idle, status === "dnd" && styles.dnd)}
      style={{ width: size, height: size }}
    >
      {src ? <img alt={name} className={styles.image} src={src} /> : initials}
    </span>
  );
}
