import React from "react";

export function CrossIcon({ onClick }) {
  function handleClick(e) {
    e.stopPropagation();
    onClick();
  }

  return (
    <svg
      onClick={handleClick}
      className="h-8 w-8 text-white"
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
