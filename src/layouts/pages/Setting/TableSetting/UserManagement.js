import React, { useEffect } from "react";
import { exportToExcel } from "../../../../utils/exportExcel";
import useModal from "../../../../components/hooks/useModal";
import AddUser from "../FormSetting/FormUser";
import EditUser from "../FormSetting/FormUser";
import Icons from "../../../../utils/icons/IconAction";
import { getUserByHospitalID } from "../../../../services/settings";
import { useSelector } from "react-redux";

const DataTable = ({ data }) => {
  const hospitalId = useSelector((state) => state.auth.hospitalId);
  const [users, setUsers] = React.useState([]);
  const { isOpen: isAddUserOpen, openModal: openAddUser, closeModal: closeAddUser } = useModal();
  const { isOpen: isEditUserOpen, openModal: openEditUser, closeModal: closeEditUser } = useModal();

  useEffect(() => {
    const fetchRoles = async () => {
      const result = await getUserByHospitalID(hospitalId);
      console.log(result, "<<<");
      setUsers(result.data.users);
    };
    fetchRoles();
  }, [hospitalId]);

  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">User Management</h3>
          <div className="btn-list">
            <button className="btn btn-outline-primary" onClick={openAddUser}>
              <i className="fe fe-plus me-2"></i>
              User
            </button>

            <button className="btn btn-outline-primary" onClick={() => exportToExcel(data, "user-management.xlsx", "Users")}>
              <i className="fe fe-download me-2"></i>
              Download
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered card-table table-vcenter text-nowrap">
              <thead>
                <tr className="bg-light">
                  <th>No.</th>
                  <th className="border-bottom-0 w-20">User</th>
                  <th className="border-bottom-0 w-20">Email</th>
                  <th className="border-bottom-0 w-20">Status</th>
                  <th className="border-bottom-0 w-20">Role</th>
                  <th className="border-bottom-0 w-20">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index} className="font-weight-normal border-bottom">
                    <td>{index + 1}</td>
                    <td>{item.username || item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <span className={`badge ${item.status === "Active" ? "bg-success-light border-success" : item.status === "Inactive" ? "bg-danger-light border-danger" : ""} fs-11`}>{item.status}</span>
                    </td>
                    <td>{item.role_name}</td>
                    <td className="d-flex gap-2">
                      <Icons.Edit size={20} onClick={openEditUser} />
                      <Icons.Delete size={20} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AddUser title="Add User" show={isAddUserOpen} onClose={closeAddUser} />
        <EditUser title="Edit User" show={isEditUserOpen} onClose={closeEditUser} />
      </div>
    </>
  );
};

export default DataTable;
