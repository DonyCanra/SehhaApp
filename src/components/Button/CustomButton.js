import React from "react";

const CustomButton = ({ loading = false, onClick, children, icon, className = "", disabled = false }) => {
  return (
    <button className={`btn btn-outline-primary ${className}`} onClick={onClick} disabled={loading || disabled}>
      {loading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
          Loading...
        </>
      ) : (
        <>
          {icon && <span className="me-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default CustomButton;
