import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainContainer({ children }) {
  return (
    <>
      <Header />
      <div className="mx-auto mt-16 max-w-[var(--maxPrimaryPageWidth)] py-10">
        {children}
      </div>
      <Footer />
    </>
  );
}
