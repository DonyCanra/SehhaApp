import React, { useState } from "react";
import PropTypes from "prop-types";

const BasicModal = ({ title, show, onClose, validate }) => {
  const [formData, setFormData] = useState({
    name: "",
    joinDate: "",
    status: "active",
    role: "owner",
  });

  const [errors, setErrors] = useState({
    name: "",
    joinDate: "",
    status: "",
    role: "",
  });

  if (!show) {
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Hapus error jika user mulai mengetik ulang
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};

    if (validate) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.joinDate) {
        newErrors.joinDate = "Join Date is required";
      }
      if (!formData.status) {
        newErrors.status = "Status is required";
      }
      if (!formData.role) {
        newErrors.role = "Role is required";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: "block" }} id="modaldemo1">
        <div className="modal-dialog modal-dialog-centered" role="document">
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
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="joinDate">Join Date</label>
                  <input type="date" className="form-control" id="joinDate" name="joinDate" value={formData.joinDate} onChange={handleChange} />
                  {errors.joinDate && <small className="text-danger">{errors.joinDate}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select className="form-control" id="status" name="status" value={formData.status} onChange={handleChange}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {errors.status && <small className="text-danger">{errors.status}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select className="form-control" id="role" name="role" value={formData.role} onChange={handleChange}>
                    <option value="owner">Owner</option>
                    <option value="doctor">Doctor</option>
                    <option value="nurse">Nurse</option>
                    <option value="admin">Admin</option>
                  </select>
                  {errors.role && <small className="text-danger">{errors.role}</small>}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                Submit
              </button>
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

// PropTypes validation
BasicModal.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  validate: PropTypes.bool,
};

// Default props
BasicModal.defaultProps = {
  validate: true,
};

export default BasicModal;
