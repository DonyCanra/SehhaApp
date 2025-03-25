import React from "react";
import "./BubbleContainer.module.css";

const BubbleContainer = () => {
  return (
    <div className="bubble-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bubble"></div>
      ))}
    </div>
  );
};

export default BubbleContainer;
