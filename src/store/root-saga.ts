import { all, call } from 'typed-redux-saga/macro';
import { categorySaga } from './categories/categories.saga';
import { userSaga } from './user/user.saga';


export function* rootSaga() {
    yield* all([
        call(categorySaga),
        call(userSaga)
    ]);
}