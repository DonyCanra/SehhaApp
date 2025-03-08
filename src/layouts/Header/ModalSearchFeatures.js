import React from "react";
import PropTypes from "prop-types";
import LargeModal from "../../components/Modal/LargeModal";

const ModalSearchFeatures = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <LargeModal show={show} title="Search Features" onClose={onClose}>
      <p>
        Halaman Search Features
      </p>
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
