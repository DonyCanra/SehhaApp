import React from "react";
import { Link, useLocation } from "react-router-dom";
import IconSidebar from "../../utils/icons/IconSidebar";
import { useSelector } from "react-redux";

const SidebarItem = ({ name, icon, path }) => {
  const loading = useSelector((state) => state.global.loading);
  const location = useLocation();
  const isActive = location.pathname === path;

  const handleClick = (e) => {
    if (loading) {
      e.preventDefault();
    }
  };

  return (
    <li className={`slide ${isActive ? "active" : ""}`}>
      <Link onClick={handleClick} className={`side-menu__item ${isActive ? "text-primary fw-bold active" : ""} ${loading ? "disabled-link" : ""}`} to={path} aria-disabled={loading}>
        {React.createElement(IconSidebar[icon])}
        <span className="side-menu__label">{name}</span>
        <i className="angle fe fe-chevron-right rotate"></i>
      </Link>
    </li>
  );
};

export default SidebarItem;
