import React, { useEffect } from "react";

let apiKey = process.env.REACT_APP_OMDB_KEY;

function MovieResults(props) {
     let results = props.searchTerm 

      const componentDidMount = () => {
          fetch(`http://www.omdbapi.com/?t=${results}&apikey=${apiKey}`)
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data);
          //     setApi(data);
            });
        }
  
  componentDidMount()
     return (
     <h1>list</h1>
     // <li>renderResults()</li>
     )
}

export default MovieResults;
