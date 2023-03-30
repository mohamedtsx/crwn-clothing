import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';
import { 
    createAction , 
    ActionWithPayload,
    Action, 
    withMatcher
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


export const fetchCategoriesStart = withMatcher(
    (): FetchCategoryStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
    (categories: Category[]): FetchCategorySuccess => 
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categories
    )
);

export const fetchCategoriesFailed = withMatcher(
    (error: Error): FetchCategoryFailed =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, 
        error
    )
);