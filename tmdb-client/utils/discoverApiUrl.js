export function discoverApiUrl(category, searchParams = {}, page = 1) {
  const searchParamsStr = new URLSearchParams(searchParams).toString();
  return `https://api.themoviedb.org/3/discover/${category}?api_key=da929b028e582d822da2b29c607baadf&page=${page}&${searchParamsStr}`;
}
