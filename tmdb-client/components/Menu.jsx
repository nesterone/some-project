import React from "react";
import { MenuItem } from "./MenuItem";
import { MenuSubItem } from "./MenuSubItem";

export function Menu() {
  return (
    <ul className="ml-8 hidden font-semibold text-white sm:flex">
      <MenuItem name="Movies">
        <MenuSubItem name="Popular" url="" />
        <MenuSubItem name="Now Playing" url="" />
        <MenuSubItem name="Upcoming" url="" />
        <MenuSubItem name="Top Rated" url="" />
      </MenuItem>
      <MenuItem name="TV Shows">
        <MenuSubItem name="Popular" url="" />
        <MenuSubItem name="Top Rated" url="" />
        <MenuSubItem name="On TV" url="" />
        <MenuSubItem name="Airing Today" url="" />
      </MenuItem>
      <MenuItem name="People" />
      <MenuItem name="More" />
    </ul>
  );
}
