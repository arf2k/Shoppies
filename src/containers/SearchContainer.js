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
          console.log(response.data.Search)
          setMovieResults(response.data.Search);
        });
    };
    getMovies()
  
  }, [searchTerm]);

  
   

  


  


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
      <MovieResults movieResults={movieResults}/>
    </>
  );
}

export default SearchContainer;
