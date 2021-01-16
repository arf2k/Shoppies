import React, { useState, useEffect } from "react";
import MovieResults from "../components/MovieResults.js";
import { Input, Segment } from "semantic-ui-react";
import axios from "axios";
import Nominations from "../components/Nominations.js";

let key = process.env.REACT_APP_OMDB_KEY;

function MovieContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [nomination, setNomination] = useState([])
  const [count, setCount] = useState(0)


  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${key}`)
        .then((response) => {
          console.log(response.data.Search);
          setMovieResults(response.data.Search);
        });
    };
    getMovies();
  }, [searchTerm]);

  const addNominee = (movie) => {
    setNomination([...nomination, movie])
    setCount(count + 1)

  }

  const deleteNominee = (id) => {
    const newList = nomination.filter((movie) => movie !== id)
    setNomination(newList)
    setCount(count - 1)   
}


console.log(count)
  return (
    <>
    <div className="searchBar">
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
 </div>
 <div className="resAndNom" style={{display: "flex", flexDirection: "row"}}>
    <div className="results">
  <MovieResults movieResults={movieResults} addNominee={addNominee} count={count}  />
  </div>
  <div className="noms">
      <Nominations nomination={nomination} deleteNominee={deleteNominee} count={count}/>
  </div>
  </div>


    </>
  );
}

export default MovieContainer;


