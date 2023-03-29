import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';
import { 
    createAction , 
    ActionWithPayload,
    Action
} from '../../utils/reducer/reducer.utils';



export type FetchCategoryStart = Action<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
>;
export type FetchCategorySuccess = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    Category[]
>;
export type FetchCategoryFailed = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    Error
>;
export type CategoryAction = 
    | FetchCategoryStart
    | FetchCategorySuccess
    | FetchCategoryFailed
; // for category reducer



export const fetchCategoriesStart = (): FetchCategoryStart =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
    );
export const fetchCategoriesSuccess = (categories: Category[]): FetchCategorySuccess => 
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categories
    );
export const fetchCategoriesFailed = (error: Error): FetchCategoryFailed =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, 
        error
    );