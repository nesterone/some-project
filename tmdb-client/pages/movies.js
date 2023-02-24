import { MainContainer } from "../components/MainContainer";

function Movies({ movies }) {
  return (
    <MainContainer>
      <div className="px-10">
        <h1 className="mb-4 text-2xl">Popular movies</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="shrink-0 grow-0 basis-[260px]">Sidebar</div>
          <div className="grid grid-cols-1 gap-[30px] pl-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="flex w-full flex-col overflow-hidden rounded-lg border border-cardBgColor shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="poster"
                  srcSet={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path} 2x`}
                />
                <div className="flex pt-[26px] pr-[10px] pb-[12px] pl-[10px]">
                  <h2>{movie.title}</h2>
                </div>
              </div>
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
