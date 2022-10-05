import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));


const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;


// we can use mosh pipe library for conposeEnhancers
// why logger doesn't work