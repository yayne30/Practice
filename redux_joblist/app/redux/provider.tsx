"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
