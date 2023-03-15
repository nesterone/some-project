import React from "react";
import cn from "classnames";
import ReactSlider from "react-slider";

function Slider({ value, handleChange, step, min, max, minDistance, marks }) {
  return (
    <ReactSlider
      value={value}
      onChange={handleChange}
      className="my-4 h-4 w-full"
      orientation="horizontal"
      step={step}
      min={min}
      max={max}
      minDistance={minDistance}
      marks={marks}
      renderThumb={(props) => (
        <div
          {...props}
          className="flex aspect-square h-full cursor-grab items-center justify-center rounded-full bg-lightBlue text-xs text-white"
        />
      )}
      renderTrack={(props, state) => {
        //check if there are multiple values
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index === 1;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn({
              "top-1/2 h-1/4 -translate-y-1/2 rounded-full": true,
              "bg-gray-200": isMulti ? isFirst || isLast : isLast,
              "bg-lightBlue": isMulti ? !isFirst || !isLast : isFirst,
            })}
          ></div>
        );
      }}
      renderMark={(props) => {
        return (
          <div {...props} className="top-3 font-light text-gray-300">
            {props.key}
          </div>
        );
      }}
    />
  );
}

export default Slider;
