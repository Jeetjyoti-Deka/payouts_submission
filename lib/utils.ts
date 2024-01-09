import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const today: Date = new Date();
  const yesterday: Date = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const diffInDays: number = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) {
    // Today's date format: Today, HH:mm AM/PM
    return formatTime(date, "Today,");
  } else if (diffInDays === 1) {
    // Yesterday's date format: Yesterday, HH:mm AM/PM
    return formatTime(date, "Yesterday,");
  } else {
    // Other dates format: DD MMM YYYY, HH:mm AM/PM
    const day: number = date.getDate();
    const monthNames: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month: string = monthNames[date.getMonth()];
    const year: number = date.getFullYear();
    return `${day} ${month} ${year}, ${formatTime(date)}`;
  }
}

function formatTime(date: Date, prefix: string = ""): string {
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes: string =
    minutes < 10 ? "0" + minutes : minutes.toString();
  return `${prefix} ${formattedHours}:${formattedMinutes} ${ampm}`;
}

export function capitalizeString(input: string): string {
  if (!input || input.length === 0) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function formatMoney(
  amount: string | number,
  currencySymbol: string = "₹"
): string {
  // Convert input to a number if it's a string
  const numericAmount: number =
    typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) {
    throw new Error(
      "Invalid input. Please provide a valid number or numeric string."
    );
  }

  const formattedAmount: string = numericAmount
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return `${currencySymbol}${formattedAmount}`;
}
