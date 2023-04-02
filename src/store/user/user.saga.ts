import { takeLatest, put, all,call } from 'typed-redux-saga';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutFailed, signOutSuccess} from './user.actions';

import { 
    createAuthUserFromEmailAndPassword,
    createUserDocumentFromAuth, 
    getCurrentUser, 
    signInAuthWithEmailAndPassword, 
    signInWithGooglePopup,
    signOutUser
} from '../../utils/firebase/firebase.utils';



function* getSnapshotFromUserAuth(userAuth,more) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth,userAuth,more);
        yield put(signInSuccess(
            {id: userSnapshot.id, ...userSnapshot.data()}
        ));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

function* signInWithEmail({payload: {email,password}}) {
    try {
        const { user } = yield call(signInAuthWithEmailAndPassword,email,password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

function* signOut() {
    try {
        yield signOutUser();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

function* onSignOutStart() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_OUT_START,
        signOut
    )
}

function* signUp({payload: {email,password,displayName}}) {
    try {
        const {user} = yield call(createAuthUserFromEmailAndPassword,email,password);
        yield put(signUpSuccess(user,{displayName}));
    } catch (error) {
        yield signUpFailed(error);
    }
}

function* signInAfterSignUp({payload: {user,displayName}}) {
    yield call(getSnapshotFromUserAuth,user,displayName)
}

function* onSignUpSuccess() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_UP_SUCCESS,
        signInAfterSignUp
    )
}

function* onSignUpStart() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_UP_START,
        signUp
    )
}

function* onGoogleSignInStart() {
    yield takeLatest(
        USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    )
}

function* onEmailSignInStart() {
    yield takeLatest(
        USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth,userAuth)
    } catch(error) {
        yield put(signInFailed(error));
    }
}

function* onCheckSession() {
    yield takeLatest(
        USER_ACTION_TYPES.CHECK_USER_SESSION, 
        isUserAuthenticated
    );
}

export function* userSaga() {
    yield all([
        call(onCheckSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}