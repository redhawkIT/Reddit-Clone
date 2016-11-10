import {combineReducers} from 'redux'
import {REQUEST_POSTS, RECEIVE_POSTS, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT} from '../constants/ActionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().


const rootReducer = combineReducers(a => a)

export default rootReducer
