import React, { useEffect } from "react";
import useModal from "../../../../components/hooks/useModal";
import AddRole from "../FormSetting/FormRole";
import EditRole from "../FormSetting/FormRole";
import Icons from "../../../../utils/icons/IconAction";
import { getRoleByHospitalID } from "../../../../services/settings";
import { useSelector } from "react-redux";

const DataTable = ({ isAddRoleOpen, onAddRoleClose }) => {
  const hospitalId = useSelector((state) => state.auth.facility.id);
  const [roles, setRoles] = React.useState([]);
  const { isOpen: isLocalAddRoleOpen, openModal: openAddRole, closeModal: closeAddRole } = useModal();
  const { isOpen: isEditRoleOpen, openModal: openEditRole, closeModal: closeEditRole } = useModal();

  const isFormOpen = isAddRoleOpen || isLocalAddRoleOpen;
  const handleCloseForm = () => {
    closeAddRole();
    onAddRoleClose();
  };

  useEffect(() => {
    const fetchRoles = async () => {
      const result = await getRoleByHospitalID(hospitalId);
      console.log(result, "<<<");
      setRoles(result.roles);
    };
    fetchRoles();
  }, [hospitalId]);

  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Role Management</h3>
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
                {roles.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center text-muted py-4">
                      No roles found.
                    </td>
                  </tr>
                ) : (
                  roles.map((item, index) => (
                    <tr key={index} className="font-weight-normal border-bottom">
                      <td>{item.id}</td>
                      <td style={{ textTransform: "capitalize" }}>{item.name}</td>
                      <td className="d-flex gap-2">
                        <Icons.Edit size={20} onClick={openEditRole} />
                        <Icons.Delete size={20} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal untuk Add Role */}
        <AddRole title="Add Role" show={isFormOpen} onClose={handleCloseForm} />

        {/* Modal untuk Edit Role */}
        <EditRole title="Edit Role" show={isEditRoleOpen} onClose={closeEditRole} />
      </div>
    </>
  );
};

export default DataTable;
