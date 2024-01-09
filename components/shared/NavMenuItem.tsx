import Image from "next/image";

type NavMenuItemProps = {
  item: {
    label: string;
    icon: string;
  };
  activeTab: string;
  handleClick: (tab: string) => void;
};

const NavMenuItem = ({ item, activeTab, handleClick }: NavMenuItemProps) => {
  return (
    <div
      className={`flex gap-x-[12px] py-2 px-4 cursor-pointer rounded-[4px] ${
        activeTab === item.label && "active-nav-tab"
      }`}
      onClick={() => handleClick(item.label)}
    >
      <Image
        src={item.icon}
        alt={item.label}
        width={20}
        height={20}
        className="opacity-80"
      />
      <h3 className="text-white/80 body2-medium">{item.label}</h3>
    </div>
  );
};
export default NavMenuItem;
