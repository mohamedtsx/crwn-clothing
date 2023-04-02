import { takeLatest, put, all,call } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from './user.types';
import { 
    signInSuccess, 
    signInFailed, 
    signUpSuccess, 
    signUpFailed, 
    signOutFailed, 
    signOutSuccess,
    EmailSignInStart,
    SignUpStart,
    SignUpSuccess
} from './user.actions';

import { 
    createAuthUserFromEmailAndPassword,
    createUserDocumentFromAuth, 
    getCurrentUser, 
    signInAuthWithEmailAndPassword, 
    signInWithGooglePopup,
    signOutUser
} from '../../utils/firebase/firebase.utils';


import { User } from 'firebase/auth';
import { AdditionalInfo } from '../../utils/firebase/firebase.utils';



function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInfo) {
    try {
        const userSnapshot = yield* call(createUserDocumentFromAuth,userAuth, additionalDetails);
        if(userSnapshot) {
            yield* put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

function* signInWithEmail({payload: {email,password}}: EmailSignInStart) {
    try {
        const userCredential = yield* call(signInAuthWithEmailAndPassword,email,password);
        if(userCredential) {
            const { user } = userCredential;
            yield* getSnapshotFromUserAuth(user);
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

function* signOut() {
    try {
        yield* call(signOutUser);
        yield* put(signOutSuccess());
    } catch (error) {
        yield* put(signOutFailed(error as Error));
    }
}

function* onSignOutStart() {
    yield* takeLatest(
        USER_ACTION_TYPES.SIGN_OUT_START,
        signOut
    )
}

function* signUp({payload: {email,password,displayName}}: SignUpStart) {
    try {
        const userCredential = yield* call(createAuthUserFromEmailAndPassword,email,password);
        if(userCredential) {
            const { user } = userCredential;
            yield* put(signUpSuccess(user,{displayName}));
        }
    } catch (error) {
        yield* put(signUpFailed(error as Error));
    }
}

function* signInAfterSignUp({payload: {user, additionalDetails}}: SignUpSuccess) {
    yield* call(getSnapshotFromUserAuth, user, additionalDetails)
}

function* onSignUpSuccess() {
    yield* takeLatest(
        USER_ACTION_TYPES.SIGN_UP_SUCCESS,
        signInAfterSignUp
    )
}

function* onSignUpStart() {
    yield* takeLatest(
        USER_ACTION_TYPES.SIGN_UP_START,
        signUp
    )
}

function* onGoogleSignInStart() {
    yield* takeLatest(
        USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    )
}

function* onEmailSignInStart() {
    yield* takeLatest(
        USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if(!userAuth) return;
        yield* call(getSnapshotFromUserAuth,userAuth)
    } catch(error) {
        yield* put(signInFailed(error as Error));
    }
}

function* onCheckSession() {
    yield* takeLatest(
        USER_ACTION_TYPES.CHECK_USER_SESSION, 
        isUserAuthenticated
    );
}

export function* userSaga() {
    yield* all([
        call(onCheckSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}