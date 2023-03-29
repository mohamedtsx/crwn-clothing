import { createSelector } from 'reselect';

import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';


const categoriesReducer = (state): CategoriesState => {
    return state.categories;
};
    
const selectCategories = createSelector([categoriesReducer], (categories) => {
    return categories.categories;
})


export const selectCategoriesMap = createSelector(
    [selectCategories], 
    (categories) => { 
        return categories.reduce((acc, category) => {
            const {title, items} = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap)
    }
)

export const selectCategoriesIsLoading = createSelector(
    [categoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading 
);