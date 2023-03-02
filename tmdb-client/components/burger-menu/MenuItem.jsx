import React from "react";

export function MenuItem({ name, onClick, subMenuVisibility, children }) {
  return (
    <li onClick={onClick} className="mb-4">
      <h3 className="text-xl font-medium">{name}</h3>
      <ol className={subMenuVisibility ? "" : "hidden"}>{children}</ol>
    </li>
  );
}
