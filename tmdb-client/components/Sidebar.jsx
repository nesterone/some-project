import React, { useState } from "react";
import { FilterLayout } from "./FilterLayout";
import Slider from "./Slider";

export function Sidebar(props) {
  const [rating, setRating] = useState([20, 80]);

  return (
    <div>
      <FilterLayout name="Sort">
        <label htmlFor="sort-select">Sort Results By</label>
        <select
          data-te-select-init
          name="sortBy"
          id="sort-select"
          defaultValue="popularity.desc"
        >
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="primary_release_date.desc">
            Release Date Descending
          </option>
          <option value="primary_release_date.asc">
            Release Date Ascending
          </option>
          <option value="title.asc">Title (A-Z)</option>
          <option value="title.desc">Title (Z-A)</option>
        </select>

        <div className="hidden">
          <label
            htmlFor="customRange3"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Example range
          </label>
          <input
            type="range"
            className="transparent h-1.5 w-full cursor-pointer rounded-lg border-transparent bg-neutral-200"
            min="1"
            max="5"
            step="1"
            id="customRange3"
          />
        </div>
        <Slider
          min={0}
          max={100}
          step={20}
          marks={20}
          minDistance={20}
          handleChange={(value) => setRating(value)}
          value={rating}
        />
      </FilterLayout>
    </div>
  );
}
