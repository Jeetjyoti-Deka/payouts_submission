import { capitalizeString, formatDate, formatMoney } from "@/lib/utils";

export type TableRowProps = {
  date: Date;
  status: "successful" | "processing";
  transactionId: string;
  orderAmount: number | string;
  transactionFees: number | string;
  total: string | number;
};

const TableRow = ({
  date,
  status,
  transactionId,
  orderAmount,
  transactionFees,
  total,
}: TableRowProps) => {
  return (
    <div className="h-[48px] w-full grid grid-cols-6 gap-x-[40px] items-center py-[10px] px-[12px] rounded-[4px]">
      <p className="text-primary-50 body2-medium">{formatDate(date)}</p>
      <div className="flex items-center gap-x-[5px]">
        <div
          className={`w-[10px] h-[10px] rounded-full ${
            status === "successful" ? "bg-green-500" : "bg-[#999999]"
          }`}
        />
        <p className="body2-regular text-[#1A181E]">
          {capitalizeString(status)}
        </p>
      </div>
      <p className="body2-regular text-[#4d4d4d]">{transactionId}</p>
      <p className="text-right body2-regular text-[#1A181E]">
        {formatMoney(orderAmount)}
      </p>
      <p className="text-right body2-regular text-[#1A181E]">
        {formatMoney(transactionFees)}
      </p>
      <p className="text-right body2-regular text-[#4d4d4d]">
        {formatMoney(total)}
      </p>
    </div>
  );
};
export default TableRow;
