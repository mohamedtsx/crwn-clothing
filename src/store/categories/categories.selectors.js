import { createSelector } from 'reselect';

const categoriesReducer = state => {
    console.log('%c 1 fired', 'color: red');
    
    return state.categories;
};
    
const selectCategories = createSelector([categoriesReducer], (categories) => {
    console.log('%c 2 fired', 'color: red');
    
    return categories.categories;
})


export const selectCategoriesMap = createSelector(
    [selectCategories], 
    (categories) => { 
        console.log('%c 3 fired', 'color: red');

        return categories.reduce((acc, category) => {
            const {title, items} = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
    }
)

// export const selectCategoriesMap = (state) => (
//     state.categories.categories.reduce((acc, category) => {
//         const {title, items} = category;
//         acc[title.toLowerCase()] = items;
//         console.log('hello from reduce')
//         return acc;
//     }, {})
// )
