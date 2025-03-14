import React, { useEffect } from "react";
import PropTypes from "prop-types";

const BaseModal = ({ show, title, onClose, children, width }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
};

BaseModal.defaultProps = {
  show: false,
};

export default BaseModal;
