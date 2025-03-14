import React from "react";
import PropTypes from "prop-types";
import BaseModal from "../../../../components/Modal/BaseModal";

const AddMedicinePackage = ({ title, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <BaseModal show title={title} onClose={onClose}>
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
      </BaseModal>
    </>
  );
};

AddMedicinePackage.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddMedicinePackage;
