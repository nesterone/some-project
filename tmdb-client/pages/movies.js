import { MainContainer } from "../components/MainContainer";

function Movies({ movies }) {
  return (
    <MainContainer>
      <div className="pt-10">
        <h1 className="text-2xl mb-4">Popular movies</h1>
        <div className="flex flex-wrap">
          {movies.map((movie) => (
            <div className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-4">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster"
              />
              <div className="pt-[26px] pr-[10px] pb-[12px] pl-[10px] flex">
                <h2>{movie.title}</h2>
              </div>
            </div>
          ))}
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
