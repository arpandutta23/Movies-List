import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addMovie } from '../actions/movieActions'

const MovieForm = (props) => {
    const dispatch = useDispatch()


    const[movie, setMovie] = useState('')
    const[ranking, setRanking] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const num = {
            id: Number(new Date()),
            name:movie,
            rank:Number(ranking)
        }
        console.log(num)
        dispatch(addMovie(num))
        setMovie('')
        setRanking('')
    }

    const handleMovieChange = (e) => {
        setMovie(e.target.value)
        
    }

    const handleRankingChange = (e) => {
        setRanking(e.target.value)
        
    }


    return(
        <div className="movieform-container">
            <label>Add Movie </label>
            <form onSubmit={handleSubmit}>
                <input
                    className="movieform-input"
                   type="text"
                   placeholder="Enter movie name"
                   value={movie}
                   onChange={handleMovieChange}
                />
                <br/>
                <input
                    className="movieform-input"
                   type="text" 
                   placeholder="Imdb ranking"
                   value={ranking}
                   onChange={handleRankingChange}
                />   
                <br/>
                <input 
                   type="submit"  
                   value="Add"
                   className="movieform-button"
                />   
            </form>
            
                
            
        </div>
    )
}
export default MovieForm