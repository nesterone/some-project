import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainContainer({ title, sidebar, content }) {
  return (
    <>
      <Header />
      <div className="mx-auto mt-12 max-w-[var(--maxPrimaryPageWidth)] py-10">
        <div className="px-5 sm:px-10">
          <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="shrink-0 grow-0 basis-[260px]">{sidebar}</div>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-[30px] sm:ml-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {content}
              </div>
              <button className="mt-7 cursor-pointer rounded-lg bg-lightBlue py-2.5 text-2xl font-bold text-white hover:text-tmdbDarkBlue sm:ml-[30px]">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
