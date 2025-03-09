import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useModal from "../../../components/hooks/useModal";
import EditPatient from "./FormRegistration";
import Icons from "../../../utils/icons/IconAction";

const DataTable = ({ data }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleStatusChange = (id, newStatus) => {
    console.log(`Mengubah status item ${id} menjadi ${newStatus}`);
  };

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
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="font-weight-normal border-bottom">
              <td>{item.id}</td>
              <td>
                <Link
                  to={{
                    pathname: "/emr",
                    state: { patientData: item },
                  }}
                >
                  {item.patientName}
                </Link>
              </td>
              <td>{item.polis}</td>
              <td>{item.date}</td>
              <td>{item.paymentMethod}</td>
              <td className="d-flex gap-2">
                <Icons.Edit size={20} onClick={openModal} />
                <Icons.Delete size={20} />
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className={`btn btn-sm dropdown-toggle ${item.status === "Done" ? "bg-success-light border-success" : item.status === "Failed" ? "bg-danger-light border-danger" : "bg-info-light border-info"} fs-11`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.status} <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={() => handleStatusChange(item.id, "Done")} style={{ color: "green" }}>
                        Done
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleStatusChange(item.id, "Failed")} style={{ color: "red" }}>
                        Failed
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => handleStatusChange(item.id, "Pending")} style={{ color: "blue" }}>
                        Pending
                      </button>
                    </li>
                  </ul>
                </div>
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
