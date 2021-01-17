import React from "react";
import MovieCard from "./MovieCard.js";
import styled from 'styled-components'

const Nominations = (props) => {
  let renderedNominees;
  if (props.nomination) {
    renderedNominees = props.nomination.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} parent={"nomination"} deleteNominee={props.deleteNominee} count={props.count} />;
    });
  } else {
    console.log("no noms yet");
  }

  const displayBanner = () => {
    return props.nomination.length === 5 ? (
      <h1>You've reached 5 Nominees</h1>
    ) : null;
  };

  return (
    <>
      <Title>Nominations</Title>
      {displayBanner()}
      {renderedNominees}
    </>
  );
}
export default Nominations;

const Title = styled.h1`
text-align: center
`