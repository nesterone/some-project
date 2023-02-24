import React from "react";

export function Header(props) {
  return (
    <div className="fixed top-0 left-0 h-16 w-full bg-tmdbDarkBlue">
      <div className="mx-auto flex h-full max-w-[1400px] justify-center px-10 sm:justify-between">
        <img
          className="hidden h-full w-[154px] sm:block"
          src="/images/tmdb-logo1.svg"
          alt="tmdb logo"
        />
        <img
          className="h-full w-[55px] sm:hidden"
          src="/images/tmdb-logo2.svg"
          alt="tmdb logo"
        />
      </div>
    </div>
  );
}
