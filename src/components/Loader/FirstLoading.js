import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FirstLoadingLoading = ({ onFinish, duration }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof duration !== "number" || duration <= 0) {
      console.error("Invalid duration: Must be a positive number");
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  if (!loading) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.loaderContainer}>
        <img src="/assets/images/svgs/loader.svg" alt="loader" style={styles.loaderImage} />
        <p style={styles.text}>Memuat data, harap tunggu...</p>
      </div>
    </div>
  );
};

FirstLoadingLoading.propTypes = {
  onFinish: PropTypes.func,
  duration: PropTypes.number,
};

FirstLoadingLoading.defaultProps = {
  duration: 2000,
  onFinish: () => {},
};

// CSS in JS
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loaderContainer: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 0.5s ease-in-out",
  },
  loaderImage: {
    width: "80px",
    height: "80px",
  },
  text: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default FirstLoadingLoading;

