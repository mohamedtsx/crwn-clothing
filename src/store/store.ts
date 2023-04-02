import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import rootReducer from './root.reducer';

import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from './middleware/logger.js';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';


export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    process.env.NODE_ENV !== 'production' &&
    logger, sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));


const composeEnhancers = compose(applyMiddleware(...middleware));


type ExtendPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig: ExtendPersistConfig = {
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