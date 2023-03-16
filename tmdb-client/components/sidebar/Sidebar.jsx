import React, { useState } from "react";
import { Section } from "./Section";
import Select from "react-tailwindcss-select";
import Slider from "./Slider";

export function Sidebar(props) {
  const [rating, setRating] = useState([20, 80]);
  const [runtime, setRuntime] = useState(60);

  const [sortBy, setSortBy] = useState({
    value: "popularity.asc",
    label: "Popularity Ascending",
  });

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const options = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "title.asc", label: "Title (A-Z)" },
    { value: "title.desc", label: "Title (Z-A)" },
  ];

  return (
    <div>
      <Section name="Sort">
        <h3 className="mb-2 font-light">Sort Results By</h3>
        <Select
          isSearchable={true}
          primaryColor="cyan"
          value={sortBy}
          onChange={handleSortByChange}
          options={options}
        />
      </Section>
      <Section name="Filters">
        <Slider
          min={0}
          max={100}
          step={20}
          marks={20}
          minDistance={20}
          handleChange={(value) => setRuntime(value)}
          value={runtime}
        />
        <Slider
          min={0}
          max={100}
          step={20}
          marks={20}
          minDistance={20}
          handleChange={(value) => setRating(value)}
          value={rating}
        />
      </Section>

      <Section name="Where To Search"></Section>

      <button className="w-full rounded-full bg-lightBlue py-3 font-semibold text-white hover:bg-tmdbDarkBlue">
        Search
      </button>
    </div>
  );
}
