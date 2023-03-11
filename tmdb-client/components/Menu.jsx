import React from "react";
import { MenuItem } from "./MenuItem";
import { MenuSubItem } from "./MenuSubItem";

export function Menu({ items }) {
  return (
    <ul className="ml-8 hidden font-semibold text-white sm:flex">
      {items.map((item) => (
        <MenuItem name={item.name} key={item.id}>
          {item.subItems.map((subItem) => (
            <MenuSubItem
              name={subItem.name}
              key={subItem.id}
              url={subItem.url}
            />
          ))}
        </MenuItem>
      ))}
    </ul>
  );
}
