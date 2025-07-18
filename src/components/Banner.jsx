import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from './axios';
import requests from './request';
function Banner() {
    const [movie, setMoive] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMoive(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);
    console.log(movie);
    function truncate(string, n){
        return string?.lenght > n ? string.substr(0, n - 1) + "...":string;
    }

  return (
    <header className='banner' style={{
        backgroundSize: "contain",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "right",
    }}>
        <div className="banner_contents">
            <h1 className='banner_title'>{movie?.name || movie?.original_name || movie?.title}</h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
        </div>

        <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner;