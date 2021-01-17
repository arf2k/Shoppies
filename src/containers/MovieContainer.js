import React, { useState, useEffect } from "react";
import MovieResults from "../components/MovieResults.js";
import { Input, Segment } from "semantic-ui-react";
import axios from "axios";
import Nominations from "../components/Nominations.js";
import styled from "styled-components";

let key = process.env.REACT_APP_OMDB_KEY;

function MovieContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [nomination, setNomination] = useState([]);
  const [count, setCount] = useState(0);

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
    if (count >= 5) {
      alert("Nomination total reached. Please remove selections to add more.");
    } else {
      setNomination([...nomination, movie]);
      setCount(count + 1);
    }
  };

  const deleteNominee = (id) => {
    const newList = nomination.filter((movie) => movie !== id);
    setNomination(newList);
    setCount(count - 1);
  };

  return (
    <>
      <SearchBar>
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
      </SearchBar>
      <ResAndNom>
        <Results>
          <MovieResults
            movieResults={movieResults}
            addNominee={addNominee}
            count={count}
          />
        </Results>
        <Noms>
          <Nominations
            nomination={nomination}
            deleteNominee={deleteNominee}
            count={count}
          />
        </Noms>
      </ResAndNom>
    </>
  );
}

export default MovieContainer;

const SearchBar = styled.div`
`

const ResAndNom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Results = styled.div`
border-style: inset;
border-width: thick;
padding: 150px;
padding-top: 75px;
`;

const Noms = styled.div`
border-style: inset;
border-width: thick;
padding: 150px;
padding-top: 75px;
`;