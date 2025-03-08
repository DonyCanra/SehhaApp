import React, { useState } from "react";
import TextField from "../../../../../components/TextField/TextField";

const DoctorNote = () => {
  // State untuk menyimpan data SOAP
  const [formData, setFormData] = useState({
    subjective: "",
    objective: "",
    assessment: "",
    plan: "",
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
    { label: "Subjective", name: "subjective", placeholder: "Input subjective" },
    { label: "Objective", name: "objective", placeholder: "Input objective" },
    { label: "Assessment", name: "assessment", placeholder: "Input assessment" },
    { label: "Plan", name: "plan", placeholder: "Input plan" },
  ];

  return (
    <div className="row g-3 p-3">
      {fields.map((field, index) => (
        <div key={index} className="col-12">
          <TextField {...field} value={formData[field.name]} onChange={handleChange} />
        </div>
      ))}
    </div>
  );
};

export default DoctorNote;
