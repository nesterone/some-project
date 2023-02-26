import { MainContainer } from "../components/MainContainer";
import { Movie } from "../components/Movie";

function Movies({ movies }) {
  return (
    <MainContainer>
      <div className="px-10">
        <h1 className="mb-4 text-2xl font-semibold">Popular Movies</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="shrink-0 grow-0 basis-[260px]">Sidebar</div>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 sm:pl-[30px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default Movies;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=da929b028e582d822da2b29c607baadf&language=en-US&page=1"
  );

  const movies = await response.json();

  return {
    props: { movies: movies.results }, // will be passed to the page component as props
  };
}
