import { createSelector } from "reselect";

export const selectCarItemReducer = (state) => state.cartItems;

export const selectCartItems = createSelector(
    [selectCarItemReducer], 
    (cart) => cart.cartItems
);

export const selectIsCartOpenReducer = (state) => state.cartItems;

export const selectIsCartOpen = createSelector(
    [selectIsCartOpenReducer],
    (cart) => cart.isCartOpen  
)

export const selectTotalPrice = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((acc, current) => {
        const {price, quantity} = current;
        return acc + price*quantity;
    },0)
);