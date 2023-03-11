import React, { useState } from "react";
import { BurgerMenuItem } from "./BurgerMenuItem";
import { BurgerMenuSubItem } from "./BurgerMenuSubItem";

export function BurgerMenu({ items }) {
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
      {items.map((item) => (
        <BurgerMenuItem
          name={item.name}
          key={item.id}
          onClick={() => handleClick(item.id)}
          subMenuVisibility={subMenuVisibility[item.id]}
        >
          {item.subItems.map((subItem) => (
            <BurgerMenuSubItem
              name={subItem.name}
              key={subItem.id}
              url={subItem.url}
            />
          ))}
        </BurgerMenuItem>
      ))}
    </ol>
  );
}
