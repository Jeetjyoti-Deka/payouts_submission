import { TableRowProps } from "@/components/shared/TableRow";

export const TABLE_ROWS: TableRowProps[] = [
  {
    date: new Date(),
    status: "processing",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
  {
    date: new Date(Date.now() - 4600000),
    status: "successful",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
  {
    date: new Date(Date.now() - 3600000),
    status: "successful",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
  {
    date: new Date(Date.now() - 85400000),
    status: "successful",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
  {
    date: new Date(Date.now() - 86400000),
    status: "successful",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
  {
    date: new Date(2023, 6, 12, 15, 0),
    status: "successful",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
  {
    date: new Date(2023, 6, 12, 11, 0),
    status: "successful",
    transactionId: "131634495747",
    orderAmount: 10125,
    transactionFees: 1125,
    total: 9312,
  },
];

export const NAV_MENU_ITEMS = [
  {
    label: "Home",
    icon: "./icons/Vector-1.svg",
  },
  {
    label: "Orders",
    icon: "./icons/Vector-2.svg",
  },
  {
    label: "Products",
    icon: "./icons/Vector-3.svg",
  },
  {
    label: "Delivery",
    icon: "./icons/Vector-4.svg",
  },
  {
    label: "Marketing",
    icon: "./icons/Vector-5.svg",
  },
  {
    label: "Analytics",
    icon: "./icons/Vector-6.svg",
  },
  {
    label: "Payouts",
    icon: "./icons/Vector-7.svg",
  },
  {
    label: "Discounts",
    icon: "./icons/Vector-8.svg",
  },
  {
    label: "Audience",
    icon: "./icons/Vector-9.svg",
  },
  {
    label: "Appearance",
    icon: "./icons/Vector-10.svg",
  },
  {
    label: "Plugins",
    icon: "./icons/Vector-11.svg",
  },
];
