import { createStore, combineReducers} from 'redux'
import movieReducer from '../reducers/movieReducers'

const configureStore = () => {
    const sotre = createStore(combineReducers({
        movie :movieReducer

    }))
    return sotre

}

export default configureStore