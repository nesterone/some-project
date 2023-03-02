import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Movie } from "./Movie";

export function MainContainer({ title, sidebar, content }) {
  return (
    <>
      <Header />
      <div className="mx-auto mt-12 max-w-[var(--maxPrimaryPageWidth)] py-10">
        <div className="px-5 sm:px-10">
          <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="shrink-0 grow-0 basis-[260px]">{sidebar}</div>
            <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 sm:pl-[30px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {content}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
