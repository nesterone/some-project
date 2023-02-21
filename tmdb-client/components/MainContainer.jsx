import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainContainer({ children }) {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-16">{children}</div>
      <Footer />
    </>
  );
}
