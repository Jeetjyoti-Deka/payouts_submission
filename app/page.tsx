import InfoCard from "@/components/shared/InfoCard";
import PrimaryInfoCard from "@/components/shared/PrimaryInfoCard";
import TableRow from "@/components/shared/TableRow";
import { TABLE_ROWS } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="px-[32px] py-[12px] flex gap-x-[16px] items-center border-b-[1px] border-[#D9D9D9]">
        <div className="flex-1 flex items-center justify-start">
          <h5 className="heading-h5 mr-[16px] w-[109px]">Payouts</h5>
          <Image
            src="/icons/question-mark.svg"
            width={14}
            height={14}
            alt="question-icon"
            className="mr-[6px]"
          />
          <p className="caption-regular">How it works</p>
        </div>
        <div className="flex-1 rounded-[6px] py-[9px] px-[16px] bg-[#F2F2F2] flex items-center justify-start gap-x-[8px]">
          <Image
            src="/icons/glass.svg"
            width={16}
            height={16}
            alt="search-icon"
            className="py-[3px]"
          />
          <p className="body1-regular text-[#808080]">
            Search features, tutorials, etc.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-[12px]">
          <div
            className="w-[40px] h-[40px] rounded-full bg-[#E6E6E6]
          flex items-center justify-center"
          >
            <Image
              src="/icons/chat.svg"
              alt="chat-icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-[40px] h-[40px] rounded-full bg-[#E6E6E6]
          flex items-center justify-center"
          >
            <Image
              src="/icons/diamond.svg"
              alt="chat-icon"
              width={20}
              height={20}
              className="mt-[5px]"
            />
          </div>
        </div>
      </div>
      <div className="p-[32px] flex flex-col gap-y-[32px]">
        <div className="flex flex-col gap-y-[24px]">
          <div className="flex items-center justify-between h-[36px]">
            <h3 className="heading-h5 text-[#1A181E]">Overview</h3>
            <div className="border-[1px] border-[#d9d9d9] rounded-[4px] flex items-center justify-center py-[6px] px-[12px] gap-x-[6px]">
              <p className="title-regular text-[#4D4D4D]">This Month</p>
              <Image
                src="/icons/chevrolet-down-black.svg"
                alt="sort-icon"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="flex items-start justify-between w-full">
            <PrimaryInfoCard
              title="Next Payout"
              amount={2312.23}
              linkText="23 orders"
            />
            <InfoCard
              title="Amount Pending"
              amount={92312.2}
              linkText="13 orders"
            />
            <InfoCard title="Amount Processed" amount={2392312.19} />
          </div>
        </div>
        <div>
          <div className="h-[100px] w-full pb-[20px] bg-transparent flex flex-col gap-y-[20px]">
            <h3 className="text-[20px] font-[500] leading-[28px] text-[#1A181E]">
              Transactions | This Month
            </h3>
            <div className="flex gap-[12px]">
              <button className="bg-primary-50 body2-medium text-white px-[16px] py-[6px] rounded-[40px]">
                Payouts (22)
              </button>
              <button className="bg-[#E6E6E6] body2-medium text-[#808080] px-[16px] py-[6px] rounded-[40px]">
                Refunds (2)
              </button>
            </div>
          </div>
          <div className="rounded-[8px] px-[12px] pt-[12px] pb-[8px] bg-white w-full h-[448px]">
            <div className="flex items-center justify-between">
              <div className="w-[248px] h-full flex items-center justify-start gap-x-[8px] border-[1px] border-[#d9d9d9] rounded-[4px] py-[10px] px-[16px]">
                <Image
                  src="/icons/glass.svg"
                  alt="search-icon"
                  width={14}
                  height={14}
                />
                <p className="body2-regular text-[#999]">
                  Order ID or Transaction Id
                </p>
              </div>
              <div className="flex items-center gap-x-[16px]">
                <div className="border-[1px] border-[#d9d9d9] rounded-[4px] flex items-center justify-center py-[6px] px-[12px] gap-x-[6px]">
                  <p className="title-regular text-[#4D4D4D]">Sort</p>
                  <Image
                    src="/icons/sort.svg"
                    alt="sort-icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="border-[1px] border-[#d9d9d9] rounded-[4px] w-[36px] h-[36px] flex items-center justify-center">
                  <Image
                    src="/icons/download.svg"
                    alt="download-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>

            <div className="mt-[12px]">
              <div className="bg-[#F2F2F2] w-full h-[40px] grid grid-cols-6 gap-x-[40px] items-center py-[10px] px-[12px] rounded-[4px]">
                <div className="flex items-center gap-x-[4px]">
                  <p className="body2-medium text-[#4D4D4D]">Date</p>
                  <Image
                    src="/icons/diamond.svg"
                    alt="dropdown-icon"
                    width={8}
                    height={8}
                  />
                </div>
                <p className="body2-medium text-[#4D4D4D]">Status</p>
                <p className="body2-medium text-[#4D4D4D]">Transaction ID</p>
                <p className="body2-medium text-[#4D4D4D] text-right">
                  Order Amount
                </p>
                <p className="body2-medium text-[#4D4D4D] text-right">
                  Transaction Fees
                </p>
                <p className="body2-medium text-[#4D4D4D] text-right">Total</p>
              </div>
              {TABLE_ROWS.map((row, index) => (
                <TableRow
                  key={index}
                  date={row.date}
                  status={row.status}
                  transactionId={row.transactionId}
                  orderAmount={row.orderAmount}
                  transactionFees={row.transactionFees}
                  total={row.total}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
