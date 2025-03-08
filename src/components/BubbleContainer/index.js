import React from "react";
import "./bubbleContainer.css";

const bubbleContainer = () => {
  return (
    <div className="bubble-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bubble"></div>
      ))}
    </div>
  );
};

export default bubbleContainer;
