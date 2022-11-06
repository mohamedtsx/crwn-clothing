import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));

const enhancer = applyMiddleware(logger);
const store = createStore(rootReducer, undefined, enhancer);

export default store;


// we can use mosh pipe library for composeEnhancers
// why logger doesn't work


// createStore(rootReducer, initialState, enhancer )