import React, { useState } from "react";
import MovieResults from "../components/MovieResults.js";
import { Input, Segment } from "semantic-ui-react";



function MovieContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log(searchTerm)
  return (
    <>
      <Segment>
        <Input
          icon="search"
          type="text"
          name="search"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={searchChangeHandler}
        />
      </Segment>
      <MovieResults searchTerm={searchTerm}/>
    </>
  );
}

export default MovieContainer;
