import React, { createContext, useContext, useState } from "react";
import type { Account } from "../types";

type Theme = "light" | "dark";

type AppContextValue = {
  selectedAccount: Account | null;
  setSelectedAccount: (account: Account | null) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider
      value={{ selectedAccount, setSelectedAccount, theme, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
}