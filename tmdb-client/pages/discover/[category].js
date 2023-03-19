import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { Movie } from "../../components/Movie";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { discoverApiUrl } from "../../utils/discoverApiUrl";

function Category({ startPage }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { category, ...searchParams } = router.query;

  function updateContent(page) {
    const url = discoverApiUrl(category, searchParams, page);
    fetch(url).then((response) =>
      response
        .json()
        .then((newMovies) => setMovies([...movies, ...newMovies.results]))
    );
  }

  const { page, setPage, ref } = useInfinityScroll(updateContent);

  useEffect(() => {
    setMovies(startPage);
    setPage(1);
  }, [startPage]);

  return (
    <MainLayout
      ref={ref}
      title="Search Result"
      sidebar={<Sidebar category={category} />}
      paginationHandler={() => setPage(page + 1)}
      content={movies.map((movie) => (
        <Movie
          key={movie.id}
          posterPath={movie.poster_path}
          title={category === "movie" ? movie.title : movie.name}
          date={
            category === "movie" ? movie.release_date : movie.first_air_date
          }
          desc={movie.overview}
        />
      ))}
    />
  );
}

export default Category;

export async function getServerSideProps({ query }) {
  const { category, ...searchParams } = query;
  const url = discoverApiUrl(category, searchParams);
  const response = await fetch(url);
  const movies = await response.json();

  return {
    props: { startPage: movies.results }, // will be passed to the page component as props
  };
}
