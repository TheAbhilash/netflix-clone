import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        //This is like a constructor
        async function fetchData() {
            //This has to done for async requests inside useEffect
            const request = await axios.get(fetchUrl); //await - Waits until data are loaded
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [] this is load only once , any variable we use inside useeffect must be inside the square bracket
    }, [fetchUrl]); //fetchUrl is outside the code and its like ko.observable

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
