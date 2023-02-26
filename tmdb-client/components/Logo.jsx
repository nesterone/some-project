import React from "react";

export function Logo(props) {
  return (
    <>
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
    </>
  );
}
