import React from "react";
import PropTypes from "prop-types";
import formatPrice from "../../../../utils/formatPrice";
import Icons from "../../../../utils/icons/IconAction";
import AddMedicinePackage from "../FormPharmacy/MedicinePackage";
import EditMedicinePackage from "../FormPharmacy/MedicinePackage";
import useModal from "../../../../components/hooks/useModal";

const DataTable = ({ data, isAddMedicinePackageOpen, onAddMedicinePackageClose }) => {
  const { isOpen: isLocalAddMedicinePackageOpen, openModal: openAddMedicinePackage, closeModal: closeAddMedicinePackage } = useModal();
  const { isOpen: isEditMedicinePackageOpen, openModal: openEditMedicinePackage, closeModal: closeEditMedicinePackage } = useModal();

  const isFormOpen = isAddMedicinePackageOpen || isLocalAddMedicinePackageOpen;
  const handleCloseForm = () => {
    closeAddMedicinePackage();
    onAddMedicinePackageClose();
  };
  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Medicine Package</h3>
          <div className="btn-list">
            <button className="btn btn-outline-primary" onClick={openAddMedicinePackage}>
              <i className="fe fe-plus me-2"></i>
              Medicine Package
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
                      <Icons.Edit size={20} onClick={openEditMedicinePackage} />
                      <Icons.Delete size={20} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <AddMedicinePackage title="Add Medicine Package" show={isFormOpen} onClose={handleCloseForm} />
        <EditMedicinePackage title="Edit Medicine Package" show={isEditMedicinePackageOpen} onClose={closeEditMedicinePackage} />
      </div>
    </>
  );
};

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DataTable;
