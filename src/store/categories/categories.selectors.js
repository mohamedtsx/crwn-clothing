import { createSelector } from 'reselect';


const categoriesReducer = state => {
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
        }, {})
    }
)

export const selectCategoriesIsLoading = createSelector(
    [categoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading 
);

// export const selectCategoriesMap = (state) => (
//     state.categories.categories.reduce((acc, category) => {
//         const {title, items} = category;
//         acc[title.toLowerCase()] = items;
//         console.log('hello from reduce')
//         return acc;
//     }, {})
// )
