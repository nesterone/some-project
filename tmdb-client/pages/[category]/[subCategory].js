import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { Movie } from "../../components/Movie";
import { useInfinityScroll } from "../../hooks/useInfinityScroll";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { generalApiUrl } from "../../utils/generalApiUrl";
import { titlesGenerator } from "../../utils/titlesGenerator";

function Category({ startPage }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { category, subCategory } = router.query;

  function updateContent(page) {
    const url = generalApiUrl(category, subCategory, page);
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
      title={titlesGenerator(category, subCategory)}
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

export async function getStaticProps({ params }) {
  const url = generalApiUrl(params.category, params.subCategory);
  const response = await fetch(url);
  const movies = await response.json();

  return {
    props: { startPage: movies.results }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "movie", subCategory: "popular" } },
      { params: { category: "movie", subCategory: "top-rated" } },
      { params: { category: "movie", subCategory: "upcoming" } },
      { params: { category: "movie", subCategory: "now-playing" } },
      { params: { category: "tv", subCategory: "popular" } },
      { params: { category: "tv", subCategory: "airing-today" } },
      { params: { category: "tv", subCategory: "on-the-air" } },
      { params: { category: "tv", subCategory: "top-rated" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
