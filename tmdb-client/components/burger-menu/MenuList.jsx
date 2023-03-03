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
        <MenuSubItem name="Popular" url="/movie" />
        <MenuSubItem name="Now Playing" url="/movie/now-playing" />
        <MenuSubItem name="Upcoming" url="/movie/upcoming" />
        <MenuSubItem name="Top Rated" url="/movie/top-rated" />
      </MenuItem>
      <MenuItem
        name="TV Shows"
        onClick={() => handleClick(2)}
        subMenuVisibility={subMenuVisibility[2]}
      >
        <MenuSubItem name="Test" url="" />
        <MenuSubItem name="Test" url="" />
        <MenuSubItem name="Test" url="" />
        <MenuSubItem name="Test" url="" />
      </MenuItem>
    </ol>
  );
}
