import React from "react";
import MovieCard from './MovieCard.js'


function MovieResults(props) {

  
     const renderedMovies = () => { 
          props.movieResults.map((movie, index) => {
               return (<li key={index}> {movie.Title}</li>)})
          }
          

return (
     <>
     <h1>Movies</h1>
     {renderedMovies()}
     </>
     
)


}

export default MovieResults;
