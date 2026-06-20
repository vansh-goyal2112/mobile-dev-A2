import type { MenuItem } from "../types";

export const moveMoneyCanadaItems: MenuItem[] = [
  { id: "transfer", title: "Transfer Between My Accounts", icon: "swap-horizontal-outline" },
  { id: "bill", title: "Pay a Bill", icon: "document-text-outline" },
  { id: "etransfer", title: "Interac e-Transfer", icon: "paper-plane-outline" },
  { id: "client", title: "Send to an RBC Client", icon: "people-outline" },
  { id: "cheque", title: "Deposit a Cheque", icon: "camera-outline" },
  { id: "split", title: "Split with Friends", icon: "git-compare-outline" },
];

export const moveMoneyInternationalItems: MenuItem[] = [
  { id: "us", title: "Transfer funds to RBC Bank U.S.", icon: "swap-vertical-outline" },
  { id: "international", title: "International Money Transfer", icon: "earth-outline" },
  { id: "cash", title: "Purchase Foreign Cash", icon: "cash-outline", isNew: true },
];

export const moreItems: { section: string; items: MenuItem[] }[] = [
  {
    section: "Security",
    items: [
      { id: "security-centre", title: "Security Centre", icon: "shield-outline", isNew: true },
      { id: "security-education", title: "Security Education", icon: "lock-closed-outline" },
    ],
  },
  {
    section: "NOMI",
    items: [
      { id: "nomi-insights", title: "NOMI Insights", icon: "analytics-outline" },
      { id: "nomi-save", title: "NOMI Find & Save", icon: "cash-outline" },
      { id: "ask-nomi", title: "Ask NOMI", icon: "person-circle-outline" },
    ],
  },
  {
    section: "Products",
    items: [
      { id: "open-account", title: "Open an Account", icon: "card-outline" },
      { id: "explore-products", title: "Explore Products", icon: "cart-outline" },
      { id: "mortgage", title: "Home & Mortgage", icon: "home-outline", isNew: true },
    ],
  },
  {
    section: "Offers",
    items: [
      { id: "financial-offers", title: "Your Financial Offers", icon: "cash-outline" },
      { id: "explore-offers", title: "Explore Offers", icon: "pricetag-outline" },
      { id: "refer", title: "Refer a Friend and Earn", icon: "gift-outline" },
      { id: "partner", title: "RBC Partner Perks", icon: "wallet-outline" },
    ],
  },
  {
    section: "Services",
    items: [
      { id: "alerts", title: "Alert Centre", icon: "notifications-outline" },
      { id: "statements", title: "Statements", icon: "document-text-outline" },
      { id: "credit-score", title: "Credit Score", icon: "speedometer-outline", isNew: true },
      { id: "vantage", title: "Vantage Snapshot", icon: "star-outline" },
      { id: "calculators", title: "Tools & Calculators", icon: "calculator-outline" },
    ],
  },
  {
    section: "Learn",
    items: [
      { id: "features", title: "Discover Features", icon: "flag-outline" },
    ],
  },
  {
    section: "RBC Apps & Links",
    items: [
      { id: "launch", title: "RBC Launch", icon: "rocket-outline" },
      { id: "avion", title: "Avion Rewards", icon: "diamond-outline" },
      { id: "usbank", title: "RBC Bank U.S.", icon: "globe-outline" },
      { id: "direct", title: "RBC Direct Investing", icon: "trending-up-outline" },
      { id: "investease", title: "RBC InvestEase", icon: "leaf-outline" },
      { id: "dominion", title: "RBC Dominion Securities", icon: "briefcase-outline" },
      { id: "counsel", title: "RBC PH&N Investment Counsel", icon: "business-outline" },
      { id: "trust", title: "RBC Royal Trust", icon: "key-outline" },
    ],
  },
];