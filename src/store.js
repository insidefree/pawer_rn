import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

// here we use midlewares !!!!

export default createStore((state = {}, action) => {
    return state
}, {})
