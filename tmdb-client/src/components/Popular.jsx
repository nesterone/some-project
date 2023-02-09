import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../utils/getPopularMovies';

export function Popular() {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        (async function(){ const popularMovies = await getPopularMovies(5)
        setMovies(popularMovies.results)})()
    },[])

    return <div className="container mx-auto">
        <div className="flex flex-row flex-wrap gap-4">
            {movies.length && movies.map(movie => <div key={movie.id} >
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" className="w-40"/>
            <h3 className="w-40">{movie.title}</h3>
            <p>{movie.release_date}</p>
            </div>)}
        </div>
    </div>
}