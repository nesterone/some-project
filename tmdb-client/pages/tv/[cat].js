import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { Movie } from "../../components/Movie";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import { getFullURL } from "../../utils/getFullURL";

function Category({ startPage }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { cat } = router.query;

  function getNextContent(page) {
    const url = getFullURL("tv", cat, page);
    fetch(url).then((response) =>
      response
        .json()
        .then((newMovies) => setMovies([...movies, ...newMovies.results]))
    );
  }

  const { page, setPage, ref } = useInfinityScroll(getNextContent);

  useEffect(() => {
    setMovies(startPage);
    setPage(1);
  }, [startPage]);

  const title = {
    popular: "Popular TV Shows",
    "airing-today": "TV Shows Airing Today",
    "on-the-air": "Currently Airing TV Shows",
    "top-rated": "Top Rated TV Shows",
  };

  return (
    <MainLayout
      ref={ref}
      title={title[cat]}
      sidebar="Sidebar"
      paginationHandler={() => setPage(page + 1)}
      content={movies.map((movie) => (
        <Movie
          key={movie.id}
          posterPath={movie.poster_path}
          title={movie.name}
          date={movie.first_air_date}
          desc={movie.overview}
        />
      ))}
    />
  );
}

export default Category;

export async function getStaticProps({ params }) {
  const url = getFullURL("tv", params.cat, 1);
  const response = await fetch(url);
  const movies = await response.json();

  return {
    props: { startPage: movies.results }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { cat: "popular" } },
      { params: { cat: "airing-today" } },
      { params: { cat: "on-the-air" } },
      { params: { cat: "top-rated" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
