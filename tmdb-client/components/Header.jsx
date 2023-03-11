import React from "react";
import classNames from "classnames";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { BurgerMenuWrapper } from "./burger-menu/BurgerMenuWrapper";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import { useScroll } from "../hooks/useScroll";

export function Header(props) {
  const isShown = useScroll(64);
  const menuItems = [
    {
      id: 1,
      name: "Movies",
      subItems: [
        { id: 1, name: "Popular", url: "/movie/popular" },
        { id: 2, name: "Now Playing", url: "/movie/now-playing" },
        { id: 3, name: "Upcoming", url: "/movie/upcoming" },
        { id: 4, name: "Top Rated", url: "/movie/top-rated" },
      ],
    },
    {
      id: 2,
      name: "TV Shows",
      subItems: [],
    },
    {
      id: 3,
      name: "People",
      subItems: [],
    },
    {
      id: 4,
      name: "More",
      subItems: [],
    },
  ];

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 z-20 h-16 w-full bg-tmdbDarkBlue transition duration-300",
        { "translate-y-0": isShown, "-translate-y-full": !isShown }
      )}
    >
      <div className="mx-auto flex h-full max-w-[var(--maxPrimaryPageWidth)] items-center justify-between px-5 sm:px-10">
        <div className="flex w-1/3 justify-start sm:hidden">
          <BurgerMenuWrapper>
            <BurgerMenu items={menuItems} />
          </BurgerMenuWrapper>
        </div>
        <div className="flex w-1/3 items-center justify-center sm:w-auto sm:justify-between">
          <Logo />
          <Menu items={menuItems} />
        </div>
        <div className="flex w-1/3 justify-end text-white sm:w-auto">
          Some Icons
        </div>
      </div>
    </header>
  );
}
