import React, { useState } from "react";
import classNames from "classnames";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import { useScroll } from "../hooks/useScroll";
import { BurgerBtn } from "./burger-menu/BurgerBtn";

export function Header(props) {
  const isHeaderShown = useScroll(64);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 z-20 w-full bg-tmdbDarkBlue transition-all duration-300",
        { "h-16": isHeaderShown, "h-0": !isHeaderShown }
      )}
    >
      <BurgerMenu isOpen={isBurgerMenuOpen} />
      {isHeaderShown && (
        <div className="mx-auto flex h-full max-w-[var(--maxPrimaryPageWidth)] items-center justify-between px-5 sm:px-10">
          <div className="flex w-1/3 justify-start sm:hidden">
            <BurgerBtn
              isOpen={isBurgerMenuOpen}
              setIsOpen={setIsBurgerMenuOpen}
            />
          </div>
          <div className="flex w-1/3 items-center justify-center sm:w-auto sm:justify-between">
            <Logo />
            <Menu />
          </div>
          <div className="flex w-1/3 justify-end text-white sm:w-auto">
            Some Icons
          </div>
        </div>
      )}
    </header>
  );
}
