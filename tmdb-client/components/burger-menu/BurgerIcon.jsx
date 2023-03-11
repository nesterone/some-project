import React from "react";

export function BurgerIcon({ onClick }) {
  function handleClick(e) {
    e.stopPropagation();
    onClick();
  }

  return (
    <div className="space-y-1.5" onClick={handleClick}>
      <span className="block h-0.5 w-6 bg-white"></span>
      <span className="block h-0.5 w-6 bg-white"></span>
      <span className="block h-0.5 w-6 bg-white"></span>
    </div>
  );
}
