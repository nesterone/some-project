import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { BurgerMenu } from "./BurgerMenu";

export function Header(props) {
  return (
    <header className="fixed top-0 left-0 h-16 w-full bg-tmdbDarkBlue">
      <div className="mx-auto flex h-full max-w-[var(--maxPrimaryPageWidth)] items-center justify-between px-10">
        <BurgerMenu />
        <div className="flex w-1/3 items-center justify-center sm:w-auto sm:justify-between">
          <Logo />
          <Menu />
        </div>
        <div className="flex w-1/3 justify-end text-white sm:w-auto">
          Some Icons
        </div>
      </div>
    </header>
  );
}
