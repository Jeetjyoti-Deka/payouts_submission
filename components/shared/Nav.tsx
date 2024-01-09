import NavFooter from "./NavFooter";
import NavHeader from "./NavHeader";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <nav className="bg-secondary h-screen py-[16px] px-[8px] flex flex-col sticky top-0 left-0">
      <NavHeader />
      <NavMenu />
      <NavFooter />
    </nav>
  );
};
export default Nav;
