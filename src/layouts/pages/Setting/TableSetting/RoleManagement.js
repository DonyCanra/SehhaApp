import React from "react";
import useModal from "../../../../components/hooks/useModal";
import AddRole from "../FormSetting/FormRole";
import EditRole from "../FormSetting/FormRole";
import Icons from "../../../../utils/icons/IconAction";

const DataTable = ({ data }) => {
  const { isOpen: isAddRoleOpen, openModal: openAddRole, closeModal: closeAddRole } = useModal();
  const { isOpen: isEditRoleOpen, openModal: openEditRole, closeModal: closeEditRole } = useModal();

  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">User Management</h3>
          <div className="btn-list">
            {/* Tombol untuk membuka modal Add Role */}
            <button className="btn btn-outline-primary" onClick={openAddRole}>
              <i className="fe fe-plus me-2"></i>
              Role
            </button>
            <button className="btn btn-outline-primary">
              <i className="fe fe-upload me-2"></i>
              Import
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered card-table table-vcenter text-nowrap" id="datatable">
              <thead>
                <tr className="bg-light">
                  <th className="border-bottom-0 w-10">No.</th>
                  <th className="border-bottom-0 w-70">Name</th>
                  <th className="border-bottom-0 w-20">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="font-weight-normal border-bottom">
                    <td>{item.id}</td>
                    <td>{item.nameRole}</td>
                    <td className="d-flex gap-2">
                      <Icons.Edit size={20} onClick={openEditRole} />
                      <Icons.Delete size={20} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal untuk Add Role */}
        <AddRole title="Add Role" show={isAddRoleOpen} onClose={closeAddRole} />

        {/* Modal untuk Edit Role */}
        <EditRole title="Edit Role" show={isEditRoleOpen} onClose={closeEditRole} />
      </div>
    </>
  );
};

export default DataTable;
