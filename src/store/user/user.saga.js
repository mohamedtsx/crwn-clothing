import { takeLatest, put, all,call } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed} from './user.actions';

import { createUserDocumentFromAuth, getCurrentUser } from '../../utils/firebase/firebase.utils'

function* getSnapshotFromUserAuth(userAuth,more) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth,userAuth,more);
        yield put(signInSuccess(
            USER_ACTION_TYPES.SIGN_IN_SUCCESS,
            {id: userSnapshot.id, ...userSnapshot.data()}
        ));
    } catch (error) {
        yield put(signInFailed(error));
    }
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
    yield all([call(onCheckSession)]);
}