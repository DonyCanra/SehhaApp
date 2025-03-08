import React from "react";

const PolisSection = () => {
  const polisList = ["Kacang", "Susu", "Gandum", "Udara"];

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Poli</h3>
      </div>
      <div className="card-body">
        <div className="tags">
          {polisList.map((polis, index) => (
            <span key={index} className="tag">{polis}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolisSection;
