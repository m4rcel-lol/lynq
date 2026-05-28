import { X } from "lucide-react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { Button } from "../ui/Button";
import styles from "./Modal.module.css";

type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ title, open, onClose, children }: ModalProps) {
  if (!open) {
    return null;
  }
  const target = document.getElementById("modal-root") ?? document.body;
  return createPortal(
    <div className={styles.backdrop}>
      <div aria-modal="true" className={`${styles.dialog} glass`} role="dialog">
        <div className={styles.header}>
          <h2>{title}</h2>
          <Button aria-label="Close" iconOnly onClick={onClose} variant="ghost">
            <X size={18} aria-hidden />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    target
  );
}
