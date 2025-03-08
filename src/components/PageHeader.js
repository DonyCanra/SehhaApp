import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <div className="page-leftheader">
        <h4 className="page-title mb-0 text-primary">{title}</h4>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
