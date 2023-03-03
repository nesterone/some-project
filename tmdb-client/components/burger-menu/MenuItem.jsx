import React from "react";

export function MenuItem({ name, onClick, subMenuVisibility, children }) {
  return (
    <li className="mb-4">
      <h3 className="text-xl font-medium" onClick={onClick}>
        {name}
      </h3>
      <ol className={subMenuVisibility ? "" : "hidden"}>{children}</ol>
    </li>
  );
}
