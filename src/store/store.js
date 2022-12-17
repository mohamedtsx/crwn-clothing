import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const logger = store => next => action => {
    if (!action.type) {
        return next(action)
    }

    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;

    console.group('%c action: %c %s %c @ %s', 'color: gray', '', action.type, 'color: gray', time);
    console.log('%c prev state: %o', 'color: gray', store.getState());
    console.log('%c action: %o', 'color: blue', action);
    next(action);
    console.log('%c Next State: %o', 'color: green', store.getState());
    console.groupEnd();
}

const enhancer = applyMiddleware(logger);

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, enhancer);
export const persistor = persistStore(store);