import Image from "next/image";
import Link from "next/link";

const NavHeader = () => {
  return (
    <div className="px-[8px] pb-[24px] flex gap-x-[12px] items-center">
      <div className="w-[39px] h-[39px] rounded-[4px] overflow-hidden">
        <Image
          src="/logo-img.svg"
          width={100}
          height={100}
          alt="logo"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-[4px] flex-1">
        <h2 className="body1-medium">Nishyan</h2>
        <Link href="#" className="nav-link text-white/80">
          Visit Store
        </Link>
      </div>
      <div className="w-[20px] h-[20px] flex items-center justify-center">
        <Image
          src="/icons/chevrolet-down.svg"
          alt="arrow-down"
          width={15}
          height={8}
        />
      </div>
    </div>
  );
};
export default NavHeader;
