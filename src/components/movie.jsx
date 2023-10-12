    import React from "react"
    const Base_URL = "https://image.tmdb.org/t/p/w1280/"


    export default function Movie({title, poster_path, vote_average, overview}) {
        
        return (
            <div className="movie-container">
                <img src={Base_URL + poster_path} alt = "poster"/>
                <div className="movie-info">        
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </div>
                <div className="overview">
                    <h4>{title}</h4>
                    <span>{overview}</span>
                </div>
            </div>
        )
    }

