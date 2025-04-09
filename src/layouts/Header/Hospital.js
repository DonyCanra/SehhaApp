import { useState, useEffect } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Hospital = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev); // Cukup toggle state
  };

  useEffect(() => {
    const body = document.body;

    if (collapsed) {
      if (!body.classList.contains("sidenav-toggled")) {
        body.classList.add("sidenav-toggled");
      }
    } else {
      if (body.classList.contains("sidenav-toggled")) {
        body.classList.remove("sidenav-toggled");
      }
    }
  }, [collapsed]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: "10px",
      }}
    >
      <button
        onClick={toggleSidebar}
        data-bs-toggle="sidebar"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
        }}
        title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {collapsed ? <FiChevronsRight size={18} /> : <FiChevronsLeft size={18} />}
      </button>
      <img src="https://marketplace.canva.com/EAFy_Odspp4/1/0/1600w/canva-hijau-dan-biru-modern-logo-klinik-kesehatan-Ob6CJsae0us.jpg" alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
      <span className="page-title mb-0 text-primary">Klinik Harapan Bunda</span>
    </div>
  );
};

export default Hospital;
