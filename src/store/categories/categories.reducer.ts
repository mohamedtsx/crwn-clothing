import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';
import { CategoryAction } from './categories.actions';


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
    action = {} as CategoryAction
    
    /* There is a point about the discriminated union pattern that was missed though: A discriminated union has to be complete for it to work. Otherwise, you will hide errors.
    In this specific case, it starts with a lie to the compiler: we’re telling tsc that this reducer function will only ever be called with an action that is a member of the Actions union.
    But is it really? No, this reducer will be called by every action that is ever being dispatched in our application.*/
    
    ): CategoriesState => {
    switch(action.type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS: 
            return {...state, categories: action.payload, isLoading: false};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, error: action.payload,isLoading: false};
        default: 
            return state;
    }
}

export default categoriesReducer;