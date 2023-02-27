import React from "react";

export function BurgerIcon({ isShown, callback }) {
  return (
    <>
      {isShown && (
        <div className="space-y-1.5" onClick={callback}>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </div>
      )}
    </>
  );
}
