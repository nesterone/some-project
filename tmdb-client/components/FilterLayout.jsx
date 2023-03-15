import React from "react";

export function FilterLayout({ name, children }) {
  return (
    <details className="group cursor-pointer rounded-lg border border-cardBorderColor shadow-lg">
      <summary className="my-3 mx-4 list-none  text-lg font-medium ">
        <div className="flex items-center justify-between">
          <span>{name}</span>
          <img
            className="w-4 transition-transform group-open:rotate-90"
            src="/images/display-icon.svg"
            alt="Display icon"
          />
        </div>
      </summary>
      <div className="border-t border-cardBorderColor px-4 py-3">
        {children}
      </div>
    </details>
  );
}
