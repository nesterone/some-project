import React, { useRef, useState } from "react";
import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export function BurgerMenuWrapper({ children }) {
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
      <div className={menuClasses}>{children}</div>
    </div>
  );
}

function BurgerIcon({ onClick }) {
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

function CrossIcon({ onClick }) {
  function handleClick(e) {
    e.stopPropagation();
    onClick();
  }

  return (
    <svg
      onClick={handleClick}
      className="h-8 w-8 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
