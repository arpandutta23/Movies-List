import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {
      const movie = useSelector((state) => {
         return state.movie
     })

     let obj = {}
     for(let i = 0; i < movie.length; i++){
         if(movie[i].rank > obj.rank){
             obj = {...movie[i]}
         }
         else if(Object.keys(obj).length === 0){
             obj = {...movie[i]}
         }
         
     }




    return(
        <div>
            <h2>Movie Stats</h2>
            <h3> Total Movies - {movie.length} </h3>
            <h3>Top ranked Movie  - {obj.rank} {obj.name}</h3>
        </div>
    )
}

export default MovieStats