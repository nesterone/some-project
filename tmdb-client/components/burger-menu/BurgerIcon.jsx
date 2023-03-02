import React from "react";
import classNames from "classnames";

export function BurgerIcon({ onClick, visibility }) {
  return (
    <div
      className={classNames("space-y-1.5", { hidden: visibility })}
      onClick={onClick}
    >
      <span className="block h-0.5 w-6 bg-white"></span>
      <span className="block h-0.5 w-6 bg-white"></span>
      <span className="block h-0.5 w-6 bg-white"></span>
    </div>
  );
}
