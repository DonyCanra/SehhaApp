import React, { useState } from "react";
import PropTypes from "prop-types";

const Autocomplete = ({ label, id, name, placeholder, value, onChange, options, startIcon, className, isLoading }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(e);

    if (inputValue.length >= 1) {
      const filtered = options
        .filter((option) => {
          const code = option.code || "";
          const description = option.description || "";
          return code.toLowerCase().includes(inputValue.toLowerCase()) || description.toLowerCase().includes(inputValue.toLowerCase());
        })
        .slice(0, 10);

      setFilteredOptions(filtered);
      setShowOptions(true);
    } else {
      setFilteredOptions([]);
      setShowOptions(false);
    }
  };

  const handleSelectOption = (option) => {
    const selectedValue = `${option.code} - ${option.description}`;
    onChange({ target: { name, value: selectedValue } });
    setShowOptions(false);
  };

  return (
    <div className={`col-12 col-md-12 position-relative ${className}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        {startIcon && <span className="input-group-text">{startIcon}</span>}
        <input type="text" className="form-control" id={id} name={name} placeholder={placeholder} value={value} onChange={handleInputChange} onFocus={() => setShowOptions(true)} onBlur={() => setTimeout(() => setShowOptions(false), 200)} />
      </div>

      {showOptions && (
        <ul className="list-group" style={{ zIndex: 10 }}>
          {isLoading ? (
            <li className="list-group-item text-center text-muted">Loading...</li>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option._id || option.code} // Use a unique key
                className="list-group-item list-group-item-action"
                onMouseDown={() => handleSelectOption(option)}
                style={{ cursor: "pointer" }}
              >
                {option.code} - {option.description}
              </li>
            ))
          ) : (
            <li className="list-group-item text-center text-muted">No data found</li>
          )}
        </ul>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      code: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  startIcon: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

Autocomplete.defaultProps = {
  id: "",
  name: "",
  placeholder: "",
  value: "",
  onChange: () => {},
  options: [],
  startIcon: null,
  className: "",
  isLoading: false,
};

export default Autocomplete;
