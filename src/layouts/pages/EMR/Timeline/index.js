import React from "react";
import Diagnoses from "./Diagnoses";
import DoctorNotes from "./DoctorNotes";
import VitalSigns from "./VitalSigns";
import Allergy from "./Allergy";

const Timeline = () => {
  return (
    <>
      <div className="tab-pane active" id="tab-7">
        <div className="card">
          {/* List Timeline */}
          <Diagnoses />
          <DoctorNotes />
          <VitalSigns />
          <Allergy />
          {/* End List Timeline */}
        </div>
      </div>
    </>
  );
};

export default Timeline;
