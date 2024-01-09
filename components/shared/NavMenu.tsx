"use client";

import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

const NAV_MENU_ITEMS = [
  {
    label: "Home",
    icon: "./icons/vector-1.svg",
  },
  {
    label: "Orders",
    icon: "./icons/vector-2.svg",
  },
  {
    label: "Products",
    icon: "./icons/vector-3.svg",
  },
  {
    label: "Delivery",
    icon: "./icons/vector-4.svg",
  },
  {
    label: "Marketing",
    icon: "./icons/vector-5.svg",
  },
  {
    label: "Analytics",
    icon: "./icons/vector-6.svg",
  },
  {
    label: "Payouts",
    icon: "./icons/vector-7.svg",
  },
  {
    label: "Discounts",
    icon: "./icons/vector-8.svg",
  },
  {
    label: "Audience",
    icon: "./icons/vector-9.svg",
  },
  {
    label: "Appearance",
    icon: "./icons/vector-10.svg",
  },
  {
    label: "Plugins",
    icon: "./icons/vector-11.svg",
  },
];

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
