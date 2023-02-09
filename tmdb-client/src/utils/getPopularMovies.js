export async function getPopularMovies(count){
    const apiKey = 'da929b028e582d822da2b29c607baadf';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${count}`;
    const response = await fetch(url);
    return await response.json();
}