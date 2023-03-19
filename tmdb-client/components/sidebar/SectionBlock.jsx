import React from "react";

export function SectionBlock({ name, children }) {
  return (
    <div className="border-t border-cardBorderColor px-4 pt-4 pb-6">
      <h3 className="mb-2.5 font-light">{name}</h3>
      {children}
    </div>
  );
}
