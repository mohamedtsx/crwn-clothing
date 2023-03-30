import { Category } from './categories.types';
import { 
    fetchCategoriesStart, 
    fetchCategoriesFailed, 
    fetchCategoriesSuccess 
} from './categories.actions';
import { AnyAction } from 'redux';


export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const CATEGORIES_INTITULE_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}  // this type for the state parameter


const categoriesReducer = (
    state = CATEGORIES_INTITULE_STATE, 
    action = {} as AnyAction
    ): CategoriesState => {
        if(fetchCategoriesStart.match(action)) {
            return {...state, isLoading: true};
        }
        if(fetchCategoriesSuccess.match(action)) {
            return {...state, categories: action.payload, isLoading: false};            
        }
        if(fetchCategoriesFailed.match(action)) {
            return {...state, error: action.payload,isLoading: false};
        }
        return state;
}

export default categoriesReducer;