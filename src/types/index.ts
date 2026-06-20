export type Account = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  type: "banking" | "credit" | "investment";
};

export type MenuItem = {
  id: string;
  title: string;
  icon: any;
  isNew?: boolean;
};