import React from "react";
import PropTypes from "prop-types";
import formatPrice from "../../../../utils/formatPrice";
import Icons from "../../../../utils/icons/IconAction";
// import useModal from "../../../components/hooks/useModal";
// import EditPatient from "./FormRegistration";

const DataTable = ({ data }) => {
  // const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="card-title">Report</h3>
          <div className="btn-list">
            <button className="btn btn-outline-primary">
              <i className="fe fe-download me-2"></i>
              Import
            </button>
          </div>
        </div>
        <div class="card-body">
          <div className="table-responsive">
            <table className="table table-bordered card-table table-vcenter text-nowrap" id="datatable">
              <thead>
                <tr className="bg-light">
                  <th>No. </th>
                  <th>Medicine</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="font-weight-normal border-bottom">
                    <td>{item.id}</td>
                    <td>{item.medicineName}</td>
                    <td>{item.quantity}</td>
                    <td>{formatPrice(item.price, "IDR")}</td>
                    <td>{item.createdAt}</td>
                    <td className="d-flex gap-2">
                      <Icons.Edit size={20} onClick={() => {}} />
                      <Icons.Delete size={20} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <EditPatient title="Edit New Patient" show={isOpen} onClose={closeModal} /> */}
      </div>
    </>
  );
};

DataTable.prototypes = {
  data: PropTypes.object.isRequired,
};

export default DataTable;
