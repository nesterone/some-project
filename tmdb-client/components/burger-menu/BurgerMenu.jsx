import React, { useState } from "react";
import { CrossIcon } from "./CrossIcon";
import { BurgerIcon } from "./BurgerIcon";

export function BurgerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-1/3 justify-start sm:hidden">
      <div className="flex w-10 items-center justify-center">
        <BurgerIcon isShown={!isOpen} callback={() => setIsOpen(!isOpen)} />
        <CrossIcon isShown={isOpen} callback={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 h-screen w-4/5 bg-tmdbDarkBlue p-4 text-white opacity-95">
          <ol>
            <li>Some item</li>
            <li>Some item</li>
            <li>Some item</li>
            <li>Some item</li>
            <li>Some item</li>
          </ol>
        </div>
      )}
    </div>
  );
}
