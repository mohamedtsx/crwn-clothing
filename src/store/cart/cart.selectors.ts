import { createSelector } from "reselect";
import { CartItem } from "./cart.types";
import { CartState } from "./cart.reducer"

export const selectCarItemReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCarItemReducer], 
    (cart) => cart.cartItems
);


export const selectIsCartOpen = createSelector(
    [selectCarItemReducer],
    (cart) => cart.isCartOpen  
);

export const selectTotalPrice = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((acc, current) => {
        const {price, quantity} = current;
        return acc + price*quantity;
    },0)
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, current) => {
        return acc + current.quantity
    }, 0)
)