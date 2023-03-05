import { MainLayout } from "../../components/MainLayout";
import { Movie } from "../../components/Movie";
import { useState } from "react";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";

const url =
  "https://api.themoviedb.org/3/movie/top-rated?api_key=da929b028e582d822da2b29c607baadf&language=en-US";

function TopRated({ startPage }) {
  const [movies, setMovies] = useState(startPage);

  function getNextContent(page) {
    fetch(url + "&page=" + page).then((response) =>
      response
        .json()
        .then((newMovies) => setMovies([...movies, ...newMovies.results]))
    );
  }

  const { page, setPage, ref } = useInfinityScroll(getNextContent);

  return (
    <MainLayout
      ref={ref}
      title="Top Rated Movies"
      sidebar="Sidebar"
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

export default TopRated;

export async function getStaticProps(context) {
  const response = await fetch(url + "&page=1");
  const movies = await response.json();

  return {
    props: { startPage: movies.results }, // will be passed to the page component as props
  };
}
