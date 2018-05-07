import { createStore, applyMiddleware, combineReducers } from 'redux';
import {userReducer, productReducer} from './reducers.js';
//import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    userReducer,
    productReducer
});

export default createStore(reducers, {}, middleware);