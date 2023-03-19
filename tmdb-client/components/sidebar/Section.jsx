import React from "react";

export function Section({ name, children }) {
  return (
    <details className="group mb-4 cursor-pointer rounded-lg border border-cardBorderColor shadow-md">
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
      {children}
    </details>
  );
}
