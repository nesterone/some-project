import React from "react";

export function Movie({ id, posterPath, title }) {
  return (
    <div
      key={id}
      className="border-cardBorderColor flex w-full flex-col overflow-hidden rounded-lg border shadow-lg"
    >
      <img
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt="poster"
        srcSet={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath} 1x, https://image.tmdb.org/t/p/w440_and_h660_face${posterPath} 2x`}
      />
      <div className="flex pt-[26px] pr-[10px] pb-[12px] pl-[10px]">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
