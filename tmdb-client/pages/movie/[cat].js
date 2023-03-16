import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { Movie } from "../../components/Movie";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import { getFullURL } from "../../utils/getFullURL";
import { Sidebar } from "../../components/sidebar/Sidebar";

function Category({ startPage }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { cat } = router.query;

  function getNextContent(page) {
    const url = getFullURL("movie", cat, page);
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
    popular: "Popular Movies",
    "top-rated": "Top Rated Movies",
    upcoming: "Upcoming Movies",
    "now-playing": "Now Playing Movies",
  };

  return (
    <MainLayout
      ref={ref}
      title={title[cat]}
      sidebar={<Sidebar />}
      paginationHandler={() => setPage(page + 1)}
      content={movies.map((movie) => (
        <Movie
          key={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          date={movie.release_date}
          desc={movie.overview}
        />
      ))}
    />
  );
}

export default Category;

export async function getStaticProps({ params }) {
  const url = getFullURL("movie", params.cat, 1);
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
      { params: { cat: "top-rated" } },
      { params: { cat: "upcoming" } },
      { params: { cat: "now-playing" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
