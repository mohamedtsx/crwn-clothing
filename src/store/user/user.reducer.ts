import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from 'redux';

import { 
    signInSuccess,
    signOutSuccess,
    signInFailed,
    signUpFailed,
    signOutFailed,
    clearAuthError
} from './user.actions';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

const userReducer = (
    state= USER_INITIAL_STATE, 
    action: AnyAction
): UserState => {

    if(signInSuccess.match(action)) {
        return {...state, currentUser: action.payload};
    }
    if(signOutSuccess.match(action)) {
        return {...state, currentUser: null}
    }
    if(
        signInFailed.match(action) ||
        signOutFailed.match(action) ||
        signUpFailed.match(action)
    ) {
        return {...state, error: action.payload}
    }
    if(clearAuthError.match(action)) {
        return {...state, error: null}
    }
    return state;
}

export default userReducer;
