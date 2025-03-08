import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LargeModal from "../../../../components/Modal/LargeModal";
import Diagnoses from "./Diagnoses";
import VitalSign from "./VitalSign";
import DoctorNote from "./DoctorNote";
import Allergy from "./Allergy";
import NurseNote from "./NurseNote";

const TABS = {
  DIAGNOSES: { key: "diagnoses", label: "Diagnoses", component: <Diagnoses /> },
  VITAL_SIGN: { key: "vitalSign", label: "Vital Sign", component: <VitalSign /> },
  RECIPE: { key: "recipe", label: "Recipe", component: <VitalSign /> },
  PROCEDURE: { key: "procedure", label: "Procedure", component: <VitalSign /> },
  DOCTOR_NOTE: { key: "doctorNote", label: "Doctor Note", component: <DoctorNote /> },
  NURSE_NOTE: { key: "nurseNote", label: "Nurse Note", component: <NurseNote /> },
  FILE: { key: "file", label: "File", component: <DoctorNote /> },
  ALLERGY: { key: "allergy", label: "Allergy", component: <Allergy /> },
};

const AddEMR = ({ show, onClose }) => {
  const [activeTab, setActiveTab] = useState(TABS.DIAGNOSES.key);

  const renderContent = useMemo(() => {
    return TABS[Object.keys(TABS).find((tab) => TABS[tab].key === activeTab)]?.component || <Diagnoses />;
  }, [activeTab]);

  if (!show) return null;

  return (
    <LargeModal show={show} title="Add Electronic Medical Record" onClose={onClose}>
      <form onSubmit={(e) => e.preventDefault()} style={{ margin: 0, padding: 0 }}>
        <div className="tabs-menu1" style={{ borderBottom: "1px solid #e6ebf1" }}>
          <ul className="nav panel-tabs">
            {Object.values(TABS).map(({ key, label }) => (
              <li key={key}>
                <Link
                  href={`#${key}`}
                  className={activeTab === key ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(key);
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ height: "450px", maxHeight: "450px", overflowY: "auto" }}>{renderContent}</div>
      </form>
    </LargeModal>
  );
};

AddEMR.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

AddEMR.defaultProps = {
  show: false,
};

export default AddEMR;
