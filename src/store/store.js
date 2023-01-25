import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root.reducer';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from './middleware/logger.js';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';


const sagaMiddleware = createSagaMiddleware();

const middleware = [
    process.env.NODE_ENV !== 'production' &&
    logger, sagaMiddleware
].filter(Boolean);


const composeEnhancers = compose(applyMiddleware(...middleware));

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cartItems']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer, 
    undefined, 
    composeEnhancers
);

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);