import Image from "next/image";

const NavFooter = () => {
  return (
    <div className="px-[8px]">
      <div className="flex gap-x-[12px] py-[6px] px-[12px] bg-secondary-50 rounded-[4px]">
        <div className="my-[3px] p-[6px] rounded-[4px] bg-white/10  flex items-center justify-center">
          <Image src="./icons/wallet.svg" width={24} height={24} alt="wallet" />
        </div>
        <div className="flex flex-col gap-y-[2px]">
          <p className="body-regular opacity-80 whitespace-nowrap">
            Available credits
          </p>
          <p className="title-medium text-white">222.10</p>
        </div>
      </div>
    </div>
  );
};
export default NavFooter;
