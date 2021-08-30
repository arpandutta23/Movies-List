import React from 'react'
import { useSelector } from 'react-redux'


const MovieDispay = (props) => {
     const {arr, handleDispatch} = props 

    const movie = useSelector((state)=>{
        return state.movie
    })

    const handleRemove = (id) => {
        handleDispatch(id)
    }

   

    return(
        <div>
            <h2>Movie List </h2>
                <ul> 
                    {arr.map((ele)=>{
                        return(
                            <li key={ele.id}><p>{ele.name}</p> <p>{ele.rank}
                            <button onClick={() => handleRemove(ele.id)}>Delete</button></p></li>
                            
                            
                        )
                    })}
                </ul>
         
        </div>   
    )
}

export default MovieDispay