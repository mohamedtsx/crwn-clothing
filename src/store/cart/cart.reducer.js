import { CART_ACTION_TYPES } from './cart.types';

const CARTITEMS_INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false
}

const cartItemsReducer = (state = CARTITEMS_INITIAL_STATE, action) => {
        const {type, payload} = action;

        switch(type) {
            case CART_ACTION_TYPES.SET_IS_CART_OPEN:
                return {...state, isCartOpen: !state.isCartOpen}
            case CART_ACTION_TYPES.SET_CART_ITEMS:
                return {...state, cartItems: payload}
            default:
                return state;
        }
}
export default cartItemsReducer;