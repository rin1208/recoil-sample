import * as React from "react";

const AppContext = React.createContext<number>(0);

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider!");
  return context;
}
