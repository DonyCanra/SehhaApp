import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FormProfile = ({ title, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: "block" }} id="modaldemo3">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content modal-content-demo">
            <div className="modal-header">
              <h6 className="modal-title">{title}</h6>
              <button aria-label="Close" className="btn-close" onClick={onClose} type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body text-center">
                      <img alt="User Avatar" className="rounded-circle mx-auto d-block mt-3" 
                        src="https://marketplace.canva.com/EAFy_Odspp4/1/0/1600w/canva-hijau-dan-biru-modern-logo-klinik-kesehatan-Ob6CJsae0us.jpg" 
                        width="150" height="150"
                      />
                      <div className="mt-3">
                        <Link to="#" className="btn btn-success">
                          <i className="fa fa-rss me-2"></i>Edit Image
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Name Hospital</label>
                        <input type="text" className="form-control" defaultValue="Klinik Liceria & Co." />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Email Hospital</label>
                            <input type="email" className="form-control" defaultValue="liceria@gmail.com" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" defaultValue="+62-345-678" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" defaultValue="3rd Lane, 4th Phase, Street no-4 Pekanbaru" />
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" defaultValue="Pekanbaru" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">Postal Code</label>
                            <input type="number" className="form-control" defaultValue="1234" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">Country</label>
                            <select className="form-control">
                              <option value="Indonesia" selected>Indonesia</option>
                              <option value="Canada">Canada</option>
                              <option value="USA">USA</option>
                              <option value="India">India</option>
                              <option value="China">China</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Vision</label>
                        <textarea rows="3" className="form-control" defaultValue="To be a leading healthcare clinic that provides comprehensive, innovative, and patient-centered medical services." />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Mission</label>
                        <textarea rows="3" className="form-control" defaultValue="Your Health, Our Priority – Delivering Care with Heart and Excellence." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="button">Submit</button>
              <button className="btn btn-secondary" onClick={onClose} type="button">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FormProfile.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FormProfile;