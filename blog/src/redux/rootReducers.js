import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import blogReducer from './reducers/blogReducer'

const rootReducers = combineReducers({
    auth: authReducer,
    blog: blogReducer
})

export default rootReducers