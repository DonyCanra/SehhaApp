import React from "react";
import FilterDate from "../../../components/FilterDate";

const DashboardHeader = () => (
  <div className="page-header">
    <div className="page-leftheader">
      <h4 className="page-title mb-0 text-primary">Dashboard</h4>
    </div>
    <div className="page-rightheader">
      <div className="btn-list">
        <button className="btn btn-outline-primary">
          <i className="fe fe-download me-2"></i>
          Download
        </button>
        <FilterDate />
      </div>
    </div>
  </div>
);

export default DashboardHeader;
