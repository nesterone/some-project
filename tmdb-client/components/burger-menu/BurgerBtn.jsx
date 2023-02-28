import React from "react";

export function BurgerBtn({ isOpen, setIsOpen }) {
  return (
    <div className="flex w-10 items-center justify-center">
      {!isOpen && (
        <div className="space-y-1.5" onClick={() => setIsOpen(true)}>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </div>
      )}

      {isOpen && (
        <svg
          onClick={() => setIsOpen(false)}
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
      )}
    </div>
  );
}
