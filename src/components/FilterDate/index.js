import React from "react";
import { Link } from "react-router-dom";

const FilterDate = () => {
  return (
    <>
      <Link to="#" className="btn btn-primary btn-pill" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-calendar me-2 fs-14"></i> Search By Date
      </Link>
      <div className="dropdown-menu border-0">
        <Link className="dropdown-item" to="#">
          Today
        </Link>
        <Link className="dropdown-item" to="#">
          Yesterday
        </Link>
        <Link className="dropdown-item active" to="#">
          Last 7 days
        </Link>
        <Link className="dropdown-item" to="#">
          Last 30 days
        </Link>
        <Link className="dropdown-item" to="#">
          Last Month
        </Link>
        <Link className="dropdown-item" to="#">
          Last 6 months
        </Link>
        <Link className="dropdown-item" to="#">
          Last year
        </Link>
      </div>
    </>
  );
};

export default FilterDate;
