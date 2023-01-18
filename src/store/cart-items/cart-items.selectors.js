export const selectCartItems = (state) => state.cartItems.cartItems;

// the first cartItems come from root reducer key and the second
// comes from the cartItemReducer {...state, cartItems: payload}