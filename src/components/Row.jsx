import React, { useEffect } from 'react'
import "./Row.css"
import axios from './axios';
import { useState } from 'react';
function Row({title,fetchURL,isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]);
    console.log(title);
    console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map((movie) => {
                return <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseURL}${isLargeRow ? movie?.poster_path: movie?.backdrop_path}`} alt={movie?.name} />
            })}
        </div>
    </div>
  )
}

export default Row