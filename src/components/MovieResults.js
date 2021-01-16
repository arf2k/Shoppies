import React from "react";
import MovieCard from './MovieCard.js'


function MovieResults(props) {


     let renderedMovies;
     if (props.movieResults) {
       renderedMovies = props.movieResults.map(movie => {
         return <MovieCard key={movie.id} movie={movie} addNominee={props.addNominee}  />})
     } else {
       console.log("loading")
     }


return (
     <>
     <h1>Movie Selections</h1>
     {renderedMovies}
     </>
     
)


}

export default MovieResults;
