import { CART_ACTION_TYPES } from './cart.types';


const setCartItems = (newCartItems) => ({
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems
});


const addToCartItems = (cartItems, itemToAdd) => {
    const found = cartItems.find(el => el.id === itemToAdd.id);
    
    return !found ? [...cartItems, {...itemToAdd, quantity: 1}] : cartItems.map(
        el => el.id === itemToAdd.id ? {...el, quantity: ++el.quantity} : el
    );
}
const clearCartItem = (cartItems, itemToRemove) => {
    return cartItems.filter(el => el.id !== itemToRemove.id);;
}
const removeFromCart = (cartItems, itemToDecrement, ) => {
    return cartItems.map(el => {
        if(el.id !== itemToDecrement.id) {
            return el;
        }
        return {...el, quantity: el.quantity === 1 ? el.quantity : --el.quantity}
    });
}


export const addItemToCart = (cartItems, itemToAdd) => {
    const newCartItems = addToCartItems(cartItems, itemToAdd);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = clearCartItem(cartItems, itemToRemove);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems, itemToDecrement) => {
    const newCartItems = removeFromCart(cartItems, itemToDecrement);
    return setCartItems(newCartItems);
}


export const setIsCartOpen = () => ({
    type: CART_ACTION_TYPES.SET_IS_CART_OPEN
});