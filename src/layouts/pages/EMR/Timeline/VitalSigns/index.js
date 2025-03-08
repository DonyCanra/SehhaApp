import React from "react";

const vitalSignsData = [
  { label: "Height", value: "190 cm" },
  { label: "Weight", value: "90 kg" },
  { label: "Systolic Blood Pressure", value: "190 mmHg" },
  { label: "Diastolic Blood Pressure", value: "90 mmHg" },
  { label: "Temperature", value: "36 °C" },
  { label: "Oxygen Saturation", value: "90% SpO₂" },
  { label: "Heart Rate", value: "70 bpm" },
  { label: "Respiratory Rate", value: "90 bpm" },
  { label: "Blood Sugar", value: "70 mg/dL" },
  { label: "Abdominal Circumference", value: "70 cm" },
];

const VitalSigns = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Vital Signs</h3>
      </div>
      <div className="card-body">
        <div className="main-profile-contact-list d-lg-flex flex-wrap">
          {vitalSignsData.map((sign, index) => (
            <div className="media me-5 mb-5" key={index} style={{ flex: "0 0 45%", maxWidth: "45%" }}>
              <div className="media-body">
                <h6 className="font-weight-bold mb-1">{sign.label}</h6>
                <span>{sign.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;