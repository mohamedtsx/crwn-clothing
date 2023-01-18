import { categoriesTypes } from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';



export const fetchCategoriesStart = () =>
    createAction(categoriesTypes.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categories) => 
    createAction(categoriesTypes.FETCH_CATEGORIES_SUCCESS, categories);
export const fetchCategoriesFailed = (error) =>
    createAction(categoriesTypes.FETCH_CATEGORIES_FAILED,error);
        
export const fetchCategoriesAsync = async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesMap = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesMap));
    } catch(error) {
        dispatch(fetchCategoriesFailed(error));
    }
}
