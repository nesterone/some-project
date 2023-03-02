import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuSubItem } from "./MenuSubItem";

export function MenuList(props) {
  const [subMenuVisibility, setSubMenuVisibility] = useState({
    1: false,
    2: false,
  });

  const handleClick = (id) => {
    setSubMenuVisibility({
      ...subMenuVisibility,
      [id]: !subMenuVisibility[id],
    });
  };

  return (
    <ol className="m-4">
      <MenuItem
        name="Movies"
        onClick={() => handleClick(1)}
        subMenuVisibility={subMenuVisibility[1]}
      >
        <MenuSubItem name="Popular" url="" />
        <MenuSubItem name="Top Rated" url="" />
        <MenuSubItem name="Upcoming" url="" />
        <MenuSubItem name="Now Playing" url="" />
      </MenuItem>
      <MenuItem
        name="TV Shows"
        onClick={() => handleClick(2)}
        subMenuVisibility={subMenuVisibility[2]}
      >
        <MenuSubItem name="Popular" url="" />
        <MenuSubItem name="Top Rated" url="" />
        <MenuSubItem name="On TV" url="" />
        <MenuSubItem name="Airing Today" url="" />
      </MenuItem>
    </ol>
  );
}
