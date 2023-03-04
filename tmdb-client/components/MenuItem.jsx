import React from "react";

export function MenuItem({ name, children }) {
  return (
    <li className="group relative mr-2 p-2">
      <h3 className="cursor-pointer">{name}</h3>
      <ol
        className="border-1 text-md absolute top-10 -left-0.5 flex hidden w-44
         flex-col rounded-md border border-solid border-cardBorderColor bg-white py-2
         font-medium text-black group-hover:block"
      >
        {children}
      </ol>
    </li>
  );
}
