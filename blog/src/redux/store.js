import { createStore, applyMiddleware, compose } from "redux"
import reactThunk from 'redux-thunk'
import rootReducers from './rootReducers'

const composeEnhancers = (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore (
    rootReducers,
    composeEnhancers(
        applyMiddleware(reactThunk)
    )
) 