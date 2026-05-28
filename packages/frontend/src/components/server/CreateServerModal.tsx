import { useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "../../lib/api";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../modals/Modal";

export function CreateServerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    try {
      await api.createServer({ name });
      onClose();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : t("app.error"));
    }
  }

  return (
    <Modal open={open} title={t("server.create")} onClose={onClose}>
      <Input label={t("app.name")} value={name} onChange={(event) => setName(event.currentTarget.value)} />
      {error ? <p role="alert">{error}</p> : null}
      <Button onClick={() => void submit()} variant="primary">
        {t("server.create")}
      </Button>
    </Modal>
  );
}
