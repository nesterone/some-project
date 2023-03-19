export function generalApiUrl(category, subCategory, page = 1) {
  const subCategoryFormatted = subCategory.replaceAll("-", "_");
  return `https://api.themoviedb.org/3/${category}/${subCategoryFormatted}?api_key=da929b028e582d822da2b29c607baadf&page=${page}`;
}
