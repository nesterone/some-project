import React from "react";
import { humanReadableDate } from "../utils/humanReadableDate";

export function Movie({ id, posterPath, title, date, desc }) {
  return (
    <div
      key={id}
      className="flex h-[141px] w-full overflow-hidden rounded-lg border border-cardBorderColor shadow-lg sm:h-auto sm:flex-col"
    >
      <img
        className="min-w-[94px] sm:hidden"
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={title}
        srcSet={`https://image.tmdb.org/t/p/w130_and_h195_face${posterPath} 1x, https://image.tmdb.org/t/p/w260_and_h390_face${posterPath} 2x`}
      />
      <img
        className="hidden sm:block"
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={title}
        srcSet={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath} 1x, https://image.tmdb.org/t/p/w440_and_h660_face${posterPath} 2x`}
      />
      <div className="my-6 mx-2 flex flex-col overflow-hidden">
        <h2 className="font-bold">{title}</h2>
        <p className="pb-2 text-sm opacity-60 sm:hidden">
          {humanReadableDate(date, false)}
        </p>
        <p className="hidden opacity-60 sm:block">{humanReadableDate(date)}</p>
        <p className="text-sm sm:hidden">{desc}</p>
      </div>
    </div>
  );
}
