import React, { useState } from "react";
import classNames from "classnames";
import { CrossIcon } from "./CrossIcon";
import { BurgerIcon } from "./BurgerIcon";

export function BurgerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuClasses = classNames(
    "absolute top-16 left-0  z-20 h-screen bg-tmdbDarkBlue text-white opacity-90 transition-all overflow-hidden",
    { "w-4/5": isOpen, "w-0": !isOpen }
  );

  return (
    <div className="flex w-1/3 justify-start sm:hidden">
      <div className="flex w-10 items-center justify-center">
        <BurgerIcon isShown={!isOpen} callback={() => setIsOpen(!isOpen)} />
        <CrossIcon isShown={isOpen} callback={() => setIsOpen(!isOpen)} />
      </div>
      <div className={menuClasses}>
        <ol className="m-4">
          <li>Some item</li>
          <li>Some item</li>
          <li>Some item</li>
          <li>Some item</li>
          <li>Some item</li>
        </ol>
      </div>
    </div>
  );
}
