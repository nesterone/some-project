import React from "react";
import { MenuItem } from "./MenuItem";
import { MenuSubItem } from "./MenuSubItem";

export function Menu() {
  return (
    <ul className="ml-8 hidden font-semibold text-white sm:flex">
      <MenuItem name="Movies">
        <MenuSubItem name="Popular" url="/movie" />
        <MenuSubItem name="Now Playing" url="/movie/now-playing" />
        <MenuSubItem name="Upcoming" url="/movie/upcoming" />
        <MenuSubItem name="Top Rated" url="/movie/top-rated" />
      </MenuItem>
      <MenuItem name="TV Shows" />
      <MenuItem name="People" />
      <MenuItem name="More" />
    </ul>
  );
}
