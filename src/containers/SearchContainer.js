import React, { useState, useEffect } from "react";
import MovieResults from "../components/MovieResults.js";
import { Input, Segment } from "semantic-ui-react";
import axios from "axios";

let key = process.env.REACT_APP_OMDB_KEY;

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${key}`)
        .then((response) => {
          setMovieResults(response.data.Search);
        });
    };
    getMovies()
  
  }, [searchTerm]);

  
      let renderedMovies;
      if (movieResults) {
        renderedMovies = movieResults.map(movie => {
          return <li key={movie.id}>{movie.Title}</li>})
      } else {
        console.log("loading")
      }


  


  


  return (
    <>
      <Segment>
        <Input
          icon="search"
          type="text"
          name="search"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Segment>
      {renderedMovies}
    </>
  );
}

export default SearchContainer;
