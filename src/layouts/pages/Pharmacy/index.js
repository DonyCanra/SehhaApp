import React, { useEffect, useState } from "react";
import DataTableMedicine from "./TablePharmacy/Medicine";
import DataTableCustomMedicine from "./TablePharmacy/CustomMedicine";
import DataTableMedicinePackage from "./TablePharmacy/MedicinePackage";
import PageHeader from "../../../components/PageHeader";
import { useLocation } from "react-router-dom";

const Pharmacy = () => {
  const [tabs, setTabs] = React.useState("medicine");
  const [isAddMedicineOpen, setIsAddMedicineOpen] = useState(false);
  const [isAddCustomMedicineOpen, setIsAddCustomMedicineOpen] = useState(false);
  const [isAddMedicinePackageOpen, setIsAddMedicinePackageOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");
    const addMedicineParam = queryParams.get("addMedicine");

    if (tabParam) {
      setTabs(tabParam);
    }

    if (addMedicineParam === "true") {
      setIsAddMedicineOpen(true);
    }
  }, [location]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");
    const addCustomMedicineParam = queryParams.get("addCustomMedicine");

    if (tabParam) {
      setTabs(tabParam);
    }

    if (addCustomMedicineParam === "true") {
      setIsAddCustomMedicineOpen(true);
    }
  }, [location]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");
    const addMedicinePackageParam = queryParams.get("addMedicinePackage");

    if (tabParam) {
      setTabs(tabParam);
    }

    if (addMedicinePackageParam === "true") {
      setIsAddMedicinePackageOpen(true);
    }
  }, [location]);

  return (
    <div>
      {/* Page header */}
      <PageHeader title="Pharmacy" />
      {/* Breadcrumb dan Tabel */}
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div className="card" id="breadcrumb4">
            {/* <div className="card-header">
              <h3 className="card-title">Pharmacy</h3>
            </div> */}
            <div className="card-body">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb1 bg-primary mb-0">
                  <li className={`breadcrumb-item1 ${tabs === "medicine" ? "text-black" : "text-white"}`} onClick={() => setTabs("medicine")} style={{ cursor: "pointer" }}>
                    Medicine
                  </li>
                  <li className={`breadcrumb-item1 ${tabs === "custom-medicine" ? "text-black" : "text-white"}`} onClick={() => setTabs("custom-medicine")} style={{ cursor: "pointer" }}>
                    Custom Medicine
                  </li>
                  <li className={`breadcrumb-item1 ${tabs === "medicine-package" ? "text-black" : "text-white"}`} onClick={() => setTabs("medicine-package")} style={{ cursor: "pointer" }}>
                    Medicine Package
                  </li>
                </ol>
              </nav>

              {/* Tabel Data */}
              {tabs === "medicine" ? (
                <DataTableMedicine data={dataDummy} isAddMedicineOpen={isAddMedicineOpen} onAddMedicineClose={() => setIsAddMedicineOpen(false)} />
              ) : tabs === "custom-medicine" ? (
                <DataTableCustomMedicine data={dataDummy2} isAddCustomMedicineOpen={isAddCustomMedicineOpen} onAddCustomMedicineClose={() => setIsAddCustomMedicineOpen(false)} />
              ) : tabs === "medicine-package" ? (
                <DataTableMedicinePackage data={dataDummy3} isAddMedicinePackageOpen={isAddMedicinePackageOpen} onAddMedicinePackageClose={() => setIsAddMedicinePackageOpen(false)} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data dummy untuk tabel
const dataDummy = [
  { id: "1", medicineName: "Medicine 1", quantity: 1, price: 10000, createdAt: "04/3/2025" },
  { id: "2", medicineName: "Medicine 2", quantity: 3, price: 34000, createdAt: "04/3/2025" },
  { id: "3", medicineName: "Medicine 3", quantity: 3, price: 12000, createdAt: "04/3/2025" },
  { id: "4", medicineName: "Medicine 4", quantity: 3, price: 5000, createdAt: "04/3/2025" },
];

const dataDummy2 = [
  { id: "1", medicineName: "Obat Racik 1", quantity: 1, price: 10000, createdAt: "04/3/2025" },
  { id: "2", medicineName: "Obat Racik 2", quantity: 3, price: 34000, createdAt: "04/3/2025" },
  { id: "3", medicineName: "Obat Racik 3", quantity: 3, price: 12000, createdAt: "04/3/2025" },
  { id: "4", medicineName: "Obat Racik 4", quantity: 3, price: 5000, createdAt: "04/3/2025" },
];

const dataDummy3 = [
  { id: "1", medicineName: "Paket Obat 1", quantity: 1, price: 10000, createdAt: "04/3/2025" },
  { id: "2", medicineName: "Paket Obat 2", quantity: 3, price: 34000, createdAt: "04/3/2025" },
  { id: "3", medicineName: "Paket Obat 3", quantity: 3, price: 12000, createdAt: "04/3/2025" },
  { id: "4", medicineName: "Paket Obat 4", quantity: 3, price: 5000, createdAt: "04/3/2025" },
];

export default Pharmacy;
