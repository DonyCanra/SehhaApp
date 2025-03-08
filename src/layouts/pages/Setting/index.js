import React from "react";
import DataTableMedicine from "./TableSetting/UserManagement";
import DataTableCustomMedicine from "./TableSetting/RoleManagement";
import PageHeader from "../../../components/PageHeader";

const GeneralSetting = () => {
  const [tabs, setTabs] = React.useState(1);

  // Data dummy untuk tabel
  const dataDummy = [
    { id: "1", nameUser: "User 1", joinDate: "09 Dec 2017", status: "Active", role: "Owner" },
    { id: "2", nameUser: "User 2", joinDate: "09 Dec 2017", status: "Inactive", role: "Owner" },
    { id: "3", nameUser: "User 3", joinDate: "09 Dec 2017", status: "Active", role: "Owner" },
    { id: "4", nameUser: "User 4", joinDate: "09 Dec 2017", status: "Inactive", role: "Owner" },
  ];

  const dataDummy2 = [
    { id: "1", nameRole: "Owner" },
    { id: "2", nameRole: "Doctor" },
    { id: "3", nameRole: "Nurse" },
    { id: "4", nameRole: "Admin" },
  ];

  return (
    <div>
      {/* Page header */}
      <PageHeader title="General Setting" />
      {/* Breadcrumb dan Tabel */}
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div className="card" id="breadcrumb4">
            {/* <div className="card-header">
              <h3 className="card-title">GeneralSetting</h3>
            </div> */}
            <div className="card-body">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb1 bg-primary mb-0">
                  <li className={`breadcrumb-item1 ${tabs === 1 ? "text-black" : "text-white"}`} onClick={() => setTabs(1)} style={{ cursor: "pointer" }}>
                    User Management
                  </li>
                  <li className={`breadcrumb-item1 ${tabs === 2 ? "text-black" : "text-white"}`} onClick={() => setTabs(2)} style={{ cursor: "pointer" }}>
                    Role Management
                  </li>
                </ol>
              </nav>

              {/* Tabel Data */}
              {tabs === 1 ? <DataTableMedicine data={dataDummy} /> : tabs === 2 ? <DataTableCustomMedicine data={dataDummy2} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSetting;
