import * as categoriesTypes from './categories.types';


const CATEGORIES_INTIALE_STATE = {
    categoriesMap: {}
}

const categoriesReducer = (state = CATEGORIES_INTIALE_STATE, action) => {
    switch(action.type) {
        case categoriesTypes.SET_CATEGORIES_MAP: 
            return {...state, categoriesMap: action.payload};
        default: 
            return state;
    }
}

export default categoriesReducer;

// try to delete ...state