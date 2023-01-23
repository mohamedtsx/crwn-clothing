import { all, call, put, takeLatest } from 'redux-saga/effects';
import { categoriesTypes } from './categories.types';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { fetchCategoriesSuccess } from "./categories.actions";
import { fetchCategoriesFailed } from "./categories.actions";


export function* fetchCategoriesAsync(){
    try {
        const categoriesMap = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesMap));
    } catch(error) {
        yield put(fetchCategoriesFailed(error));
    }
}

function* onFetchCategory() {
    yield takeLatest(
        categoriesTypes.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    )
}

export function* categorySaga() {
    yield all([call(onFetchCategory)]);
}


