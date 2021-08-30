import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { addMovies } from './actions/movieActions'
import { Provider } from 'react-redux'

const store = configureStore()
//console.log(store)

console.log('movie', store.getState())

store.subscribe(()=>{
    console.log('state updated', store.getState())
})



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))