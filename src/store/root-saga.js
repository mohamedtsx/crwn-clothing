import { all, call } from 'redux-saga/effects';
import { categorySaga } from './categories/categories.saga';

export function* rootSaga() {
    yield all([call(categorySaga)]);
}