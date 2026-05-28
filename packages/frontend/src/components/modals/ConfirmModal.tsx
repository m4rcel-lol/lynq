import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import { Modal } from "./Modal";

type ConfirmModalProps = {
  open: boolean;
  title: string;
  body: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function ConfirmModal({ open, title, body, onClose, onConfirm }: ConfirmModalProps) {
  const { t } = useTranslation();
  return (
    <Modal open={open} title={title} onClose={onClose}>
      <p>{body}</p>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Button onClick={onClose}>{t("app.cancel")}</Button>
        <Button onClick={onConfirm} variant="danger">
          {t("app.confirm")}
        </Button>
      </div>
    </Modal>
  );
}
