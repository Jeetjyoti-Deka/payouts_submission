import { formatDate, formatMoney } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type PrimaryInfoCardProps = {
  title: string;
  amount: string | number;
  linkText?: string;
};

const PrimaryInfoCard = ({ title, amount, linkText }: PrimaryInfoCardProps) => {
  return (
    <div className="p-[20px] w-[370px] h-[154px] rounded-[8px] flex flex-col gap-y-[16px] bg-primary-50 info-card-shadow relative">
      <div className="flex items-center gap-x-[8px]">
        <h3 className="title-regular text-white">{title}</h3>
        <Image
          src="./icons/question-mark-white.svg"
          alt="question"
          width={16}
          height={16}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="info-amount text-white">{formatMoney(amount)}</p>
        {linkText && (
          <Link
            href="#"
            className="title-medium underline decoration-1 text-white flex items-center"
          >
            {linkText}
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <Image
                src="./icons/chevrolet-right.svg"
                alt="arrow"
                width={8}
                height={14}
              />
            </div>
          </Link>
        )}
      </div>
      <div className="h-[36px] rounded-[8px] bg-primary-100 flex items-center justify-between absolute bottom-0 left-0 w-full py-[8px] px-[24px]">
        <p className="text-[#F2F2F2] body2-regular">Next Payout Date:</p>
        <p className="text-[#f2f2f2] body2-medium">{formatDate(new Date())}</p>
      </div>
    </div>
  );
};
export default PrimaryInfoCard;
