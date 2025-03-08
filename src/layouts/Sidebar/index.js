import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { bpjsMenu, menuItems } from "../../constants";

const Sidebar = () => {
  const isBridgingBPJS = false;
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__logo">
        <div className="header-brand">
          <Link to="/">
            <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-lgo" alt="logo" />
          </Link>
          <Link to="/">
            <img src="/assets/images/brand/logo1.png" className="header-brand-img dark-logo" alt="logo" />
          </Link>
          <Link to="/">
            <img src="/assets/images/brand/favicon.png" className="header-brand-img mobile-logo" alt="logo" />
          </Link>
          <Link to="/">
            <img src="/assets/images/brand/favicon1.png" className="header-brand-img darkmobile-logo" alt="logo" />
          </Link>
        </div>
      </div>
      <ul className="side-menu app-sidebar3">
        {menuItems.map(({ category, items }) => (
          <React.Fragment key={category}>
            <li className="side-item side-item-category">{category}</li>
            {items.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </React.Fragment>
        ))}
        {isBridgingBPJS && (
          <React.Fragment>
            <li className="side-item side-item-category">{bpjsMenu.category}</li>
            {bpjsMenu.items.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </React.Fragment>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
