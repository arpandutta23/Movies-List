import React from 'react'
//import { useSelector } from 'react-redux'
import MovieForm from './MovieForm'
import MovieStats from './MovieStats'
import MovieList from './MovieList'

const MoviesContainer = (props) => {
    // const movies = useSelector((state) => {
    //     return state.movies
    // })
     


    return(
        <div>
            <MovieForm/>
            <MovieStats/>
            <MovieList/>
        
        </div>
    )

}

export default MoviesContainer