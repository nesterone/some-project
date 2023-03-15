import React from "react";
import { FilterLayout } from "./FilterLayout";

export function Sidebar(props) {
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

        <div>
          <label
            htmlFor="customRange3"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Example range
          </label>
          <input
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />
        </div>
      </FilterLayout>
    </div>
  );
}
