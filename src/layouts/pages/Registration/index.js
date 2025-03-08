import React from "react";
import useModal from "../../../components/hooks/useModal";
import FilterDate from "../../../components/FilterDate";
import DataTable from "./DataTable";
import AddPatient from "./FormRegistration";

const Registration = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const dataDummy = [
    {
      id: "1",
      patientName: "Patient 1",
      polis: "POLI UMUM",
      date: "04/3/2025",
      paymentMethod: "Tunai",
      status: "Done",
    },
    {
      id: "2",
      patientName: "Patient 2",
      polis: "POLI UMUM",
      date: "04/3/2025",
      paymentMethod: "BPJS Kesehatan",
      status: "Engaged",
    },
    {
      id: "3",
      patientName: "Patient 3",
      polis: "POLI UMUM",
      date: "04/3/2025",
      paymentMethod: "Asuransi",
      status: "Confirmed",
    },
    {
      id: "4",
      patientName: "Patient 4",
      polis: "POLI UMUM",
      date: "04/3/2025",
      paymentMethod: "Gopay",
      status: "Failed",
    },
  ];

  return (
    <div>
      {/* Page header */}
      <div className="page-header">
        <div className="page-leftheader">
          <h4 className="page-title mb-0 text-primary">Registration</h4>
        </div>
        <div className="page-rightheader">
          <div className="btn-list">
            <button className="btn btn-outline-primary" onClick={openModal}>
              <i className="fe fe-plus me-2"></i>
              Add New Patient
            </button>
            <button className="btn btn-outline-primary">
              <i className="fe fe-download me-2"></i>
              Import
            </button>
            <FilterDate />
          </div>
        </div>
      </div>
      {/* End Page header */}

      {/* DataTable Component */}
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Registration</h3>
            </div>
            <div className="card-body">
              <DataTable data={dataDummy} />
            </div>
          </div>
        </div>
      </div>

      {/* AddPatient Component */}
      <AddPatient title="Add New Patient" show={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Registration;
