import { Modal } from "./Modal";

export function ImageCropModal({ open, onClose, imageUrl }: { open: boolean; onClose: () => void; imageUrl: string }) {
  return (
    <Modal open={open} title="Image" onClose={onClose}>
      <img alt="" src={imageUrl} style={{ width: "100%", borderRadius: 8 }} />
    </Modal>
  );
}
