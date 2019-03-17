// This file creates the Redux store and returns it

import { createStore, applyMiddleware } from 'redux';
/*
    Thunk is a Redux middleware for managing complex synchronous logic
    and asynchronous calls, useful for communicating with the future API
*/
import ReduxThunk from 'redux-thunk';

// Root reducer that combines all the smaller reducers
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);

export default store;