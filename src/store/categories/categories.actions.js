import * as categoriesTypes from './categories.types';

export const setCategoriesMap = (categoriesMapToSet) => ({
    type: categoriesTypes.SET_CATEGORIES_MAP,
    payload: categoriesMapToSet
});