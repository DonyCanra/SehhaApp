import React from "react";
import PropTypes from "prop-types";
import LargeModal from "../../../components/Modal/LargeModal";

const FormRegistration = ({ title, show, onClose }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <LargeModal show title={title} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Name</label>
            <input type="text" className="form-control" id="patientName" placeholder="Enter patient name" required />
          </div>
          <div className="form-group">
            <label htmlFor="polis">Poli</label>
            <select className="form-control" id="polis" required>
              <option value="Poli Umum">Poli Umum</option>
              <option value="Poli Gigi">Poli Gigi</option>
              <option value="Poli Mata">Poli Mata</option>
              <option value="Poli Jantung">Poli Jantung</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select className="form-control" id="paymentMethod" required>
              <option value="Tunai">Tunai</option>
              <option value="BPJS Kesehatan">BPJS Kesehatan</option>
              <option value="Asuransi">Asuransi</option>
              <option value="Gopay">Gopay</option>
            </select>
          </div>
        </form>
      </LargeModal>
    </>
  );
};

FormRegistration.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FormRegistration;
