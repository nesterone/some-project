import React, { useState } from "react";
import Link from "next/link";

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

function BurgerMenuItem({ name, onClick, subMenuVisibility, children }) {
  return (
    <li className="mb-4">
      <h3 className="text-xl font-medium" onClick={onClick}>
        {name}
      </h3>
      <ol className={subMenuVisibility ? "" : "hidden"}>{children}</ol>
    </li>
  );
}

function BurgerMenuSubItem({ name, url }) {
  return (
    <li className="text-md mt-1 font-light">
      <Link href={url}>{name}</Link>
    </li>
  );
}
