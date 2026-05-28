import { Modal } from "../modals/Modal";

export function InviteModal({ open, onClose, code }: { open: boolean; onClose: () => void; code: string }) {
  return (
    <Modal open={open} title="Invite" onClose={onClose}>
      <code>{`${window.location.origin}/invite/${code}`}</code>
    </Modal>
  );
}
