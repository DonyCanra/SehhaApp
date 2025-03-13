import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, id, name, placeholder, value, onChange, startIcon, endIcon }) => {
  return (
    <div className="col-12 col-md-12">
      {" "}
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        {startIcon && <span className="input-group-text">{startIcon}</span>}
        <input type="text" className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        {endIcon && <span className="input-group-text">{endIcon}</span>}
      </div>
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

TextField.defaultProps = {
  id: "",
  name: "",
  placeholder: "",
  value: "",
  onChange: () => {},
  startIcon: null,
  endIcon: null,
};

export default TextField;
