import PropTypes from "prop-types";
import "./Modal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ message, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!message) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <IoIosCloseCircleOutline className="modal-close-button-i" />
        </button>
        <div
          className="modal-message"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    </div>
  );
};
Modal.propTypes = {
  message: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
