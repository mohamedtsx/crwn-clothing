
export type Action<T> = {
    type: T
}

export type ActionWithPayload<T,P> = {
    type: T;
    payload: P;
}


export function createAction <T extends string, P>(type: T, payload: P):ActionWithPayload<T,P>;
export function createAction <T extends string>(type: T, payload: void):Action<T>;


export function createAction <T extends string, P>(type: T, payload: P) {
    return {type, payload}
}

// Note: <T extends string> and not a (type: string) because we use a specifics strings