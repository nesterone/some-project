import React, { useState } from "react";
import classNames from "classnames";

export function BurgerMenu({ isOpen }) {
  const menuClasses = classNames(
    "absolute top-16 left-0 h-screen bg-tmdbDarkBlue text-white opacity-90 transition-all duration-300 overflow-hidden",
    { "w-4/5": isOpen, "w-0": !isOpen }
  );

  return (
    <div className={menuClasses}>
      <ol className="m-4">
        <li>Some item</li>
        <li>Some item</li>
        <li>Some item</li>
        <li>Some item</li>
        <li>Some item</li>
      </ol>
    </div>
  );
}
