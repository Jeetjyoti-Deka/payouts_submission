import { formatMoney } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type InfoCardProps = {
  title: string;
  amount: string | number;
  linkText?: string;
};

const InfoCard = ({ title, amount, linkText }: InfoCardProps) => {
  return (
    <div className="p-[20px] w-[370px] h-[118px] rounded-[8px] flex flex-col gap-y-[16px] bg-white info-card-shadow">
      <div className="flex items-center gap-x-[8px]">
        <h3 className="title-regular text-[#4d4d4d]">{title}</h3>
        <Image
          src="./icons/question-mark.svg"
          alt="question"
          width={16}
          height={16}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="info-amount text-[#1A181E]">{formatMoney(amount)}</p>
        {linkText && (
          <Link
            href="#"
            className="title-medium underline text-primary-50 flex items-center"
          >
            {linkText}
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <Image
                src="./icons/chevrolet-right-blue.svg"
                alt="arrow"
                width={8}
                height={14}
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default InfoCard;
