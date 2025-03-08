import React from "react";
import PropTypes from "prop-types";

const BasicModal = ({ title, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: "block" }} id="modaldemo1">
        <div className="modal-dialog" role="document">
          <div className="modal-content modal-content-demo">
            <div className="modal-header">
              <h6 className="modal-title">{title}</h6>
              <button aria-label="Close" className="btn-close" onClick={onClose} type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="patientName">Name</label>
                  <input type="text" className="form-control" id="patientName" placeholder="Enter medicine name" />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="text" className="form-control" id="quantity" placeholder="Enter medicine quantity" />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input type="text" className="form-control" id="price" placeholder="Enter medicine price" />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" className="form-control" id="date" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="button">
                Submit
              </button>{" "}
              <button className="btn btn-secondary" onClick={onClose} type="button">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BasicModal.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BasicModal;
