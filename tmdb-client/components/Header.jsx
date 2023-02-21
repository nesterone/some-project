import React from "react";

export function Header(props) {
  return (
    <div className="h-16 bg-tmdbDarkBlue fixed top-0 left-0 w-full">
      <div className="flex sm:justify-between justify-center h-full px-10">
        <img
          className="h-full w-[154px] hidden sm:block"
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
