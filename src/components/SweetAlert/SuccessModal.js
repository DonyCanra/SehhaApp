import React, { useEffect } from "react";
import PropTypes from "prop-types";

const SuccessModal = ({ show, title, message, onClose }) => {
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
      <div className="modal-backdrop fade show"></div>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered text-center " role="document">
          <div className="modal-content tx-size-sm">
            <div className="modal-body text-center p-4">
              <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
              <i className="fe fe-check-circle fs-70 text-success lh-1 mb-5 d-inline-block"></i>
              <h4 className="text-success tx-semibold">{title}</h4>
              <p className="mg-b-20 mg-x-20">{message}</p>
              <button onClick={onClose} className="btn btn-success pd-x-25" data-bs-dismiss="modal" type="button">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SuccessModal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

SuccessModal.defaultProps = {
  show: false,
};

export default SuccessModal;
