import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/BaseModal";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import Search from "../../utils/icons/IconSearch";

const ModalSearchHospital = ({ show, onClose }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const user = useSelector((state) => state.auth.KConfiqData);

  const hospitalOptions = useMemo(() => {
    const hospitals = user?.hospitals || [];
    return hospitals.map((hospital) => ({
      _id: `hospital-${hospital.id}`,
      code: hospital.name,
      description: hospital.name,
      name: hospital.name,
    }));
  }, [user]);

  if (!show) return null;

  return (
    <Modal show={show} title="Search Hospitals" onClose={onClose}>
      <div className="row" style={{ margin: "10px", height: "400px" }}>
        <Autocomplete
          id="hospitals"
          name="hospitals"
          placeholder="Type to search..."
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          options={hospitalOptions}
          startIcon={<Search width={16} height={16} stroke="black" />}
          onClose={onClose}
        />
      </div>
    </Modal>
  );
};

ModalSearchHospital.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

ModalSearchHospital.defaultProps = {
  show: false,
};

export default ModalSearchHospital;
