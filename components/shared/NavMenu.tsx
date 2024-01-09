"use client";

import { useState } from "react";
import NavMenuItem from "./NavMenuItem";
import { NAV_MENU_ITEMS } from "@/lib/constants";

const NavMenu = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-y-[2px] flex-1">
      {NAV_MENU_ITEMS.map((item) => (
        <NavMenuItem
          key={item.icon}
          activeTab={activeTab}
          handleClick={handleClick}
          item={item}
        />
      ))}
    </div>
  );
};
export default NavMenu;
