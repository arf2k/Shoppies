import React from "react";
import MovieCard from "./MovieCard.js";
import styled from "styled-components";

const MovieResults = (props) => {
  let renderedMovies;
  if (props.movieResults) {
    renderedMovies = props.movieResults.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          addNominee={props.addNominee}
          parent={"results"}
          count={props.count}
        />
      );
    });
  } else {
    console.log("loading");
  }

  return (
    <>
      <Title>Movie Selections</Title>
      {renderedMovies}
    </>
  );
};

export default MovieResults;

const Title = styled.h1`
  text-align: center;
`;
