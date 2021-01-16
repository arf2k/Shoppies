import React from "react";
import MovieCard from "./MovieCard.js";

const Nominations = (props) => {
  let renderedNominees;
  if (props.nomination) {
    renderedNominees = props.nomination.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} parent={"nomination"} deleteNominee={props.deleteNominee} />;
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
      <h1>Nominations</h1>
      {displayBanner()}
      {renderedNominees}
    </>
  );
}
export default Nominations;
