import { Middleware } from 'redux';
import { RootState } from '../store';

const logger: Middleware<{}, RootState> = store => next => action => {
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

export default logger;