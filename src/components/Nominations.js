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



  return (
    <>
      <Title>Nominations</Title>
      {renderedNominees}
    </>
  );
}
export default Nominations;

const Title = styled.h1`
text-align: center
`