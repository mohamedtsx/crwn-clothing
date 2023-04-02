import { all, call, put, takeLatest } from 'typed-redux-saga';
import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess } from "./categories.actions";
import { fetchCategoriesFailed } from "./categories.actions";


export function* fetchCategoriesAsync() {
    try {
        const categoriesMap = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesMap));
    } catch(error) {
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

function* onFetchCategory() {
    yield* takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    )
}

export function* categorySaga() {
    yield* all([call(onFetchCategory)]);
}


