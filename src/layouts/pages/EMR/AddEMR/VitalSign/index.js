import React, { useState } from "react";
import TextField from "../../../../../components/TextField/TextField";

const VitalSign = () => {
  // State untuk menyimpan semua input fields
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    systolic_bp: "",
    diastolic_bp: "",
    temperature: "",
    oxygen_saturation: "",
    heart_rate: "",
    respiratory_rate: "",
    blood_sugar: "",
    abdominal_circumference: "",
  });

  // Handle perubahan nilai input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update nilai berdasarkan name input
    }));
  };

  // Data untuk semua input field
  const fields = [
    { label: "Height", name: "height", placeholder: "Input height", endIcon: "cm" },
    { label: "Weight", name: "weight", placeholder: "Input weight", endIcon: "kg" },
    { label: "Systolic Blood Pressure", name: "systolic_bp", placeholder: "Input systolic BP", endIcon: "mmHg" },
    { label: "Diastolic Blood Pressure", name: "diastolic_bp", placeholder: "Input diastolic BP", endIcon: "mmHg" },
    { label: "Temperature", name: "temperature", placeholder: "Input temperature", endIcon: "°C" },
    { label: "Saturation Oxygen", name: "oxygen_saturation", placeholder: "Input SpO₂", endIcon: "SpO₂" },
    { label: "Heart Rate", name: "heart_rate", placeholder: "Input heart rate", endIcon: "bpm" },
    { label: "Respiratory Rate", name: "respiratory_rate", placeholder: "Input respiratory rate", endIcon: "bpm" },
    { label: "Blood Sugar", name: "blood_sugar", placeholder: "Input blood sugar", endIcon: "mg/dL" },
    { label: "Abdominal Circumference", name: "abdominal_circumference", placeholder: "Input abdominal circumference", endIcon: "cm" },
  ];

  return (
    <div className="row g-3 p-2">
      {fields.map((field, index) => (
        <div key={index} className="col-12 col-md-6">
          <TextField {...field} value={formData[field.name]} onChange={handleChange} />
        </div>
      ))}
    </div>
  );
};

export default VitalSign;
