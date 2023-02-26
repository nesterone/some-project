import React from "react";

export function BurgerMenu(props) {
  return (
    <div className="flex w-1/3 justify-start sm:hidden">
      <div className="space-y-2">
        <div className="h-1 w-8 bg-white" />
        <div className="h-1 w-8 bg-white" />
        <div className="h-1 w-8 bg-white" />
      </div>
    </div>
  );
}
