import React from "react";
import { useSelector } from "react-redux";

const GlobalLoading = () => {
  const loading = useSelector((state) => state.global.loading); // Ambil state dari Redux

  if (!loading) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.loaderContainer}>
        <img src="/assets/images/svgs/loader.svg" alt="Loading..." />
      </div>
    </div>
  );
};

export default GlobalLoading;

// Styling CSS in JS
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparan
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
