  import React from "react";
  import * as S from "./Movie.style";

  const Base_URL = "https://image.tmdb.org/t/p/w1280/";

  const Movie = ({ title, poster_path, vote_average, overview }) => {
    return (
      <S.MovieContainer>
        <img src={Base_URL + poster_path} alt="poster" />
        <S.MovieInfo>
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </S.MovieInfo>
        <S.Overview>
          <h4>{title}</h4>
          <span>{overview}</span>
        </S.Overview>
      </S.MovieContainer>
    );
  };

  export default Movie;
