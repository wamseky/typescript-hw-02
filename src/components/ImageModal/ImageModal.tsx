import React from "react";
import Modal from "react-modal";

import { ImageModalProps } from "./ImageModal.types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button onClick={onClose} className="close-btn">
        &times;
      </button>
      <img src={imageUrl} alt="Large" />
    </Modal>
  );
};

export default ImageModal;