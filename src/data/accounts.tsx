import type { Account } from "../types";

export const bankingAccounts: Account[] = [
  {
    id: "chequing",
    title: "Chequing",
    subtitle: "01325-5150628",
    amount: "28.55",
    type: "banking",
  },
  {
    id: "savings",
    title: "Savings",
    subtitle: "01325-5150610",
    amount: "1,152.23",
    type: "banking",
  },
];

export const creditAccounts: Account[] = [
  {
    id: "mastercard",
    title: "MasterCard",
    subtitle: "5415 **** **** 5154",
    amount: "159.46",
    type: "credit",
  },
];