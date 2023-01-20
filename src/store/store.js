import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root.reducer';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from './middleware/logger.js';
import thunk from 'redux-thunk';


const middleware = [
    process.env.NODE_ENV !== 'production' &&
    logger, thunk
].filter(Boolean);




const composeEnhancers = compose(applyMiddleware(...middleware));


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cartItems']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);