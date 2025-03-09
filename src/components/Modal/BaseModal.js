import React, { useEffect } from "react";
import PropTypes from "prop-types";

const BaseModal = ({ show, title, onClose, children, width }) => {
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

  // Menentukan class modal berdasarkan ukuran yang diberikan
  const modalSizeClass =
    {
      sm: "modal-sm",
      md: "",
      lg: "modal-lg",
      xl: "modal-xl",
    }[width] || "";

  // Jika width dalam format angka (px, %) gunakan inline style
  const modalStyle = typeof width === "string" && (width.includes("px") || width.includes("%")) ? { maxWidth: width } : {};

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div className="modal" style={{ display: "block" }}>
        <div className={`modal-dialog modal-dialog-centered ${modalSizeClass}`} style={modalStyle} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">{title}</h6>
              <button aria-label="Close" className="btn-close" type="button" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
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

BaseModal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(["sm", "md", "lg", "xl"])]),
};

BaseModal.defaultProps = {
  show: false,
  width: "lg",
};

export default BaseModal;
