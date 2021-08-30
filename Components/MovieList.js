import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieDisplay from './MovieDisplay'
import { removeMovie } from '../actions/movieActions'

const MovieList = (props) => {
    const dispatch = useDispatch()

    const [ searchMovie, setSearchMovie ] = useState('')
    const [ data, setData ] = useState([])
    const [ list, setList ] = useState([])
    const [ select, setSelect ] = useState('')

    const movie = useSelector((state)=>{
        return state.movie

    })

    localStorage.setItem('data', JSON.stringify(movie))

    useEffect(() => {
        const result = movie.map((ele) => {
            return {...ele}
        })
        setData(result)
    }, [movie])

    const handleSearch = (e) => {
        const result = e.target.value
        setSearchMovie(result)

        const data = movie.filter((ele) => {
            return ele.name.toLowerCase() === result.toLowerCase()
        })
        setList(data)
        setSelect('')
    }

    const handleOption = (e) => {
        const option = e.target.value
        //console.log(option)
        setSelect(option)
        

        if(option === 'ascending'){
            const result = data.sort((a, b) => {
                return a.ranking-b.ranking
            })
            setData(result)
        }
        else if(option === 'descending'){
            const result = data.sort((a, b) => {
                return b.ranking-a.ranking
            })
            setData(result)
        }
        else if(option === ''){
            setData([...movie])
        }

    }

    const handleDispatch = (id) => {
        dispatch(removeMovie(id))
        setList([])
        setSearchMovie('')
        setSelect('')
    }

  


    return(
        <div>
            <div>
            <input
                type='text'
                value={searchMovie} 
                onChange={handleSearch}
                placeholder="search by movie name"
            />
             <select  onChange={handleOption} value={select}>
                    <option value=''>sort by</option>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>

            </div>    
            {list.length > 0 ?
                <MovieDisplay arr={list} handleDispatch={handleDispatch} /> :
                <MovieDisplay arr={data}  handleDispatch={handleDispatch}/>
            }
            


        </div>
        
    )
}

export default MovieList