import React, { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "../../../../../components/Autocomplete/Autocomplete";
import Search from "../../../../../utils/icons/IconSearch";

const Diagnoses = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [diagnoses, setDiagnoses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    const fetchDiagnoses = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/assets/data/ICD10.json");
        setTimeout(() => { // Force loading for 5 seconds
          setDiagnoses(response.data);
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching diagnoses:", error);
        setIsLoading(false);
      }
    };

    fetchDiagnoses();
  }, []);

  return (
    <div className="row g-3 p-3">
      <Autocomplete
        id="diagnoses"
        name="diagnoses"
        placeholder="Type to search..."
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        options={diagnoses}
        isLoading={isLoading} // Pass loading state
        startIcon={<Search width={16} height={16} stroke="black" />}
      />
    </div>
  );
};

export default Diagnoses;
