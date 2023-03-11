import React, { useRef, useState } from "react";
import classNames from "classnames";
import { BurgerIcon } from "./BurgerIcon";
import { CrossIcon } from "./CrossIcon";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { MenuList } from "./MenuList";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsOpen(false));

  const menuClasses = classNames(
    "absolute top-16 w-4/5 left-0 h-screen bg-tmdbDarkBlue text-white opacity-90 transition-all duration-300 overflow-hidden",
    { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
  );

  return (
    <div ref={ref}>
      <div className="flex w-10 items-center justify-center">
        {isOpen ? (
          <CrossIcon onClick={() => setIsOpen(false)} />
        ) : (
          <BurgerIcon onClick={() => setIsOpen(true)} />
        )}
      </div>
      <div className={menuClasses}>
        <MenuList />
      </div>
    </div>
  );
}
