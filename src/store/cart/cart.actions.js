import * as cartItemsTypes from './cart.types';


export const addItemToCart = (itemToAdd) => ({
    type: cartItemsTypes.ADD,
    payload: itemToAdd
});

export const removeItemFromCart = (itemToRemove) => ({
    type: cartItemsTypes.REMOVE,
    payload: itemToRemove
})


export const decrement = (itemToDecrement) => ({
    type: cartItemsTypes.DECREMENT,
    payload: itemToDecrement
});

export const increment = (itemToIncrement) => ({
    type: cartItemsTypes.INCREMENT,
    payload: itemToIncrement
})

export const setIsCartOpen = () => ({
    type: cartItemsTypes.isCartOpen
});