import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ show, title, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // Mencegah scrolling pada halaman utama
    } else {
      document.body.style.overflow = ""; // Kembalikan normal saat modal ditutup
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup saat komponen unmount
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content modal-content-demo">
            <div className="modal-header">
              <h6 className="modal-title">{title}</h6>
              <button aria-label="Close" className="btn-close" type="button" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ margin: 0, padding: 0 }}>
              {children}
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
              <button onClick={onClose} className="btn btn-secondary" type="button">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  show: false,
};

export default Modal;
