import React, { useState } from "react";
import TextField from "../../../../../components/TextField/TextField";

const NurseNote = () => {
  // State untuk menyimpan data catatan perawat
  const [formData, setFormData] = useState({
    subjective: "",
    objective: "",
    intervention: "",
    evaluation: "",
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
    { label: "Intervention", name: "intervention", placeholder: "Input intervention" },
    { label: "Evaluation", name: "evaluation", placeholder: "Input evaluation" },
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

export default NurseNote;
