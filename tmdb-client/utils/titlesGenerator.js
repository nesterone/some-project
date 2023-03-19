export function titlesGenerator(cat, subCat) {
  if (cat === "movie" && subCat === "popular") return "Popular Movies";
  if (cat === "movie" && subCat === "top-rated") return "Top Rated Movies";
  if (cat === "movie" && subCat === "upcoming") return "Upcoming Movies";
  if (cat === "movie" && subCat === "now-playing") return "Now Playing Movies";
  if (cat === "tv" && subCat === "popular") return "Popular TV Shows";
  if (cat === "tv" && subCat === "top-rated") return "Top Rated TV Shows";
  if (cat === "tv" && subCat === "on-the-air")
    return "Currently Airing TV Shows";
  if (cat === "tv" && subCat === "airing-today") return "TV Shows Airing Today";
  return "";
}
