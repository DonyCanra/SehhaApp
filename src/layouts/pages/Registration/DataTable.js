import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useModal from "../../../components/hooks/useModal";
import EditPatient from "./FormRegistration";
import Icons from "../../../utils/icons/IconAction";

const DataTable = ({ data }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="table-responsive">
      <table className="table table-bordered card-table table-vcenter text-nowrap" id="datatable">
        <thead>
          <tr className="bg-light">
            <th>No.</th>
            <th>Patient Name</th>
            <th>Polis</th>
            <th>Date</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="font-weight-normal border-bottom">
              <td>{item.id}</td>
              <td>
                <Link to="/emr">{item.patientName}</Link>
              </td>
              <td>{item.polis}</td>
              <td>{item.date}</td>
              <td>{item.paymentMethod}</td>
              <td>
                <span className={`badge ${item.status === "Done" ? "bg-success-light border-success" : item.status === "Failed" ? "bg-danger-light border-danger" : "bg-info-light border-info"} fs-11`}>{item.status}</span>
              </td>
              <td className="d-flex gap-2">
                <Icons.Edit size={20} onClick={openModal} />
                <Icons.Delete size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditPatient title="Edit New Patient" show={isOpen} onClose={closeModal} />
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTable;
