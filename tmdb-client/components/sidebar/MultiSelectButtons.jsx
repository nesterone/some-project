import React from "react";
import classNames from "classnames";

export function MultiSelectButtons({ options, handleChange, title }) {
  return (
    <div className="mb-4">
      <h3 className="mb-2 font-light">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            className={classNames(
              "box-content inline-block rounded-full px-2 py-1 text-gray-400 outline outline-1 outline-gray-400" +
                " hover:bg-lightBlue hover:text-white hover:outline-0 ",
              {
                "bg-lightBlue text-white outline-0": option.selected,
                "bg-white": !option.selected,
              }
            )}
            value={option.value}
            id={option.value}
            onClick={handleChange}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
