import React from "react";
import PropTypes from "prop-types";
import formatPrice from "../../../../utils/formatPrice";
import Icons from "../../../../utils/icons/IconAction";

const DataTable = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Custom Medicine</h3>
          <div className="btn-list">
            <button className="btn btn-outline-primary">
              <i className="fe fe-plus me-2"></i>
              Custom Medicine
            </button>
            <button className="btn btn-outline-primary">
              <i className="fe fe-download me-2"></i>
              Import
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered card-table table-vcenter text-nowrap" id="datatable">
              <thead>
                <tr className="bg-light">
                  <th>No.</th>
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
      </div>
    </>
  );
};

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTable;
