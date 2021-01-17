import React, { useState, useEffect } from "react";
import MovieResults from "../components/MovieResults.js";
import { Input, Segment } from "semantic-ui-react";
import axios from "axios";
import Nominations from "../components/Nominations.js";
import styled from "styled-components";

let key = process.env.REACT_APP_KEY;

const MovieContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [nomination, setNomination] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${key}`)
        .then((response) => {
          setMovieResults(response.data.Search);
        });
    };
    getMovies();
  }, [searchTerm]);

  const addNominee = (movie) => {
    if (count >= 5) {
      alert("Nomination total reached. Please remove nominations to add more.");
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

  const displayBanner = () => {
    return nomination.length === 5 ? (
      <h1 style={{marginTop: "400px"}}>You've Picked 5 Nominees!</h1>
    ) : null;
  };

  return (
    <>
      <SearchBar>
        <Segment style={{backgroundColor: "#63A25D"}}>
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
    {displayBanner()}
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
  height: 300vh
`;

const Results = styled.div`
padding: 150px;
padding-top: 75px;
`;

const Noms = styled.div`
padding: 150px;
padding-top: 75px;

`;
