import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/slices/globalSlice";
import FilterDate from "../../../components/FilterDate";

const DashboardHeader = () => {
  const dispatch = useDispatch();

  const handleDownload = () => {
    dispatch(setLoading(true)); // Aktifkan Global Loading

    setTimeout(() => {
      dispatch(setLoading(false)); // Matikan setelah 3 detik
    }, 3000);
  };

  return (
    <div className="page-header">
      <div className="page-leftheader">
        <h4 className="page-title mb-0 text-primary">Dashboard</h4>
      </div>
      <div className="page-rightheader">
        <div className="btn-list">
          <button className="btn btn-outline-primary" onClick={handleDownload}>
            <i className="fe fe-check me-2"></i>
            Check Loading
          </button>
          <FilterDate />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
