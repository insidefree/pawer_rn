import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import AppReducer from './reducers'

/* const initState = {
    users: []
} */
// here we use midlewares !!!!


/* export default createStore((state = initState, action) => {
    if (action.type === 'ADD_NEW_USER') {
        state.users = state.users.concat('@new_user_' + Date.now())
        // console.log(state)
        // state.users = [2,3,4]
        return { ...state }
    }
    return state
}) */

export default createStore(AppReducer)

// export default compose(applyMiddleware(thunk))(createStore)(AppReducer)