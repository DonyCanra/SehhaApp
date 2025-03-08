import React from "react";
import { Link, useLocation } from "react-router-dom";
import IconSidebar from "../../utils/icons/IconSidebar";

const SidebarItem = ({ name, icon, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li className={`slide ${isActive ? "active" : ""}`}>
      <Link className={`side-menu__item ${isActive ? "text-primary fw-bold active" : ""}`} to={path}>
        {React.createElement(IconSidebar[icon])}
        <span className="side-menu__label">{name}</span>
        <i className="angle fe fe-chevron-right rotate"></i>
      </Link>
    </li>
  );
};

export default SidebarItem;