import React from "react";
import classNames from "classnames";

export function CrossIcon({ onClick, visibility }) {
  return (
    <svg
      onClick={onClick}
      className={classNames("h-8 w-8 text-white", { hidden: visibility })}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
