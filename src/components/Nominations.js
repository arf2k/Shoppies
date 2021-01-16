import React, {useState} from 'react'
import MovieCard from './MovieCard.js'

function Nominations(props){

const [nominees, setNominees] = useState([]) 

     let renderedNominees;
     if (props.nomination) {
         renderedNominees = props.nomination.map(movie => {
              return <MovieCard key={movie.id} movie={movie} />
         })
     } else {
          console.log("no noms yet")
     }

     // const moreNoms = () => {
     //      setNominees[...renderedNominees, nominees]
     // }


     return(
          <>
          <h1>Nominations</h1>
{renderedNominees}

         </>
     )

}
export default Nominations