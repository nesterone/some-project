export function getFullURL(category, page = 1) {
  return `https://api.themoviedb.org/3/movie/${category.replace(
    "-",
    "_"
  )}?api_key=da929b028e582d822da2b29c607baadf&language=en-US&page=${page}`;
}
