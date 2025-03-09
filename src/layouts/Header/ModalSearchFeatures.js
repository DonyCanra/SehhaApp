import React, { useState } from "react";
import PropTypes from "prop-types";
import LargeModal from "../../components/Modal/LargeModal";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import Search from "../../utils/icons/IconSearch";
import { listRoutes } from "../../constants";

const ModalSearchFeatures = ({ show, onClose }) => {
  const [selectedValue, setSelectedValue] = useState("");

  if (!show) return null;
  return (
    <LargeModal show={show} title="Search Features" onClose={onClose}>
      <div className="row" style={{ margin: "10px", height: "400px" }}>
        <Autocomplete
          id="routes"
          name="routes"
          placeholder="Type to search..."
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          options={listRoutes}
          startIcon={<Search width={16} height={16} stroke="black" />}
          onClose={onClose}
        />
      </div>
    </LargeModal>
  );
};

ModalSearchFeatures.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

ModalSearchFeatures.defaultProps = {
  show: false,
};

export default ModalSearchFeatures;
