import { categoriesTypes } from './categories.types';


const CATEGORIES_INTITULE_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesReducer = (state = CATEGORIES_INTITULE_STATE, action) => {
    switch(action.type) {
        case categoriesTypes.FETCH_CATEGORIES_START:
            return {...state, isLoading: true};
        case categoriesTypes.FETCH_CATEGORIES_SUCCESS: 
            return {...state, categories: action.payload, isLoading: false};
        case categoriesTypes.FETCH_CATEGORIES_FAILED:
            return {...state, error: action.payload,isLoading: false};
        default: 
            return state;
    }
}

export default categoriesReducer;