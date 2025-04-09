import React from "react";
import SidebarItem from "./SidebarItem";
import { bpjsMenu, menuItems } from "../../constants";
import SidebarBrand from "../../components/SidebarBrand";

const Sidebar = () => {
  const isBridgingBPJS = false;
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__logo">
        <SidebarBrand />
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
