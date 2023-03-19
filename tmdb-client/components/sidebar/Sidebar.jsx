import React, { useState } from "react";
import { Section } from "./Section";
import Select from "react-tailwindcss-select";
import Slider from "./Slider";
import { MultiSelectButtons } from "./MultiSelectButtons";
import { SectionBlock } from "./SectionBlock";
import Router from "next/router";

export function Sidebar({ category }) {
  const [queryParams, setQueryParams] = useState({});

  const [rating, setRating] = useState([20, 80]);
  const [runtime, setRuntime] = useState(60);
  const [sortBy, setSortBy] = useState({
    value: "popularity.desc",
    label: "Popularity Descending",
  });

  const [genres, setGenres] = useState([
    { value: "val1", label: "Drama", selected: false },
    { value: "val2", label: "Comedy", selected: false },
    { value: "val3", label: "Movie", selected: false },
    { value: "val4", label: "Cinema", selected: false },
    { value: "val5", label: "Horror", selected: false },
    { value: "val6", label: "Fiction", selected: false },
    { value: "val7", label: "Documental", selected: false },
    { value: "val8", label: "Fantasy", selected: false },
  ]);

  const handleSortByChange = (option) => {
    setSortBy(option);
    setQueryParams({ ...queryParams, sort_by: option.value });
  };

  const handleGenresChange = (event) => {
    const newGenres = genres.map((genre) => {
      if (event.target.value === genre.value) genre.selected = !genre.selected;
      return genre;
    });
    setGenres(newGenres);
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
        <SectionBlock name="Sort Results By">
          <Select
            isSearchable={true}
            value={sortBy}
            primaryColor="cyan"
            onChange={handleSortByChange}
            options={options}
          />
        </SectionBlock>
      </Section>

      <Section name="Filters">
        <SectionBlock name="Show Me"></SectionBlock>

        <SectionBlock name="Genres">
          <MultiSelectButtons
            options={genres}
            handleChange={handleGenresChange}
          />
        </SectionBlock>

        <SectionBlock name="Sliders">
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
        </SectionBlock>
      </Section>

      <Section name="Where To Search"></Section>

      <button
        onClick={() => {
          Router.push({
            pathname: `/discover/${category}`,
            query: queryParams,
          });
        }}
        className="mb-4 w-full rounded-full bg-lightBlue py-3 font-semibold text-white hover:bg-tmdbDarkBlue"
      >
        Search
      </button>
    </div>
  );
}
