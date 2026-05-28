import { Modal } from "../modals/Modal";

export function Lightbox({ src, open, onClose }: { src: string; open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} title="Preview" onClose={onClose}>
      <img alt="" src={src} style={{ maxHeight: "80vh", maxWidth: "100%" }} />
    </Modal>
  );
}
