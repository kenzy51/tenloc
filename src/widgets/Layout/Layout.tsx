import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface IChildren {
  children: ReactNode;
}
export const Layout = ({ children }: IChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
