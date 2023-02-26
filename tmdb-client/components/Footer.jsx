import React from "react";
import { NavBlock } from "./NavBlock";

export function Footer(props) {
  return (
    <footer className="bg-tmdbDarkBlue">
      <div className="m-auto flex max-w-[var(--maxPrimaryPageWidth)] flex-wrap items-start justify-start gap-10 py-20 pl-10 text-lg text-white  ">
        <div className="relative flex min-w-[120px] flex-col items-end justify-end gap-4">
          <img
            src="/images/tmdb-logo2.svg"
            alt="logo"
            className="relative bottom-8 hidden w-[130px] sm:block"
          />
          <button className="whitespace-nowrap rounded-md bg-white py-2 px-4 font-bold text-lightBlue">
            Hi, Dear Guest!
          </button>
        </div>
        <NavBlock />
        <NavBlock />
        <NavBlock />
        <NavBlock />
      </div>
    </footer>
  );
}
