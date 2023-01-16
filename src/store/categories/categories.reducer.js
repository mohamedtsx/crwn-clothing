import * as categoriesTypes from './categories.types';


const CATEGORIES_INTITULE_STATE = {
    categories: []
}

const categoriesReducer = (state = CATEGORIES_INTITULE_STATE, action) => {
    switch(action.type) {
        case categoriesTypes.SET_CATEGORIES_MAP: 
            return {...state, categories: action.payload};
        default: 
            return state;
    }
}

// should be an array 

export default categoriesReducer;

// try to delete ...statesho