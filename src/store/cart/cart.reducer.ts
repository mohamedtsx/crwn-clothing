import { CartItem } from './cart.types';
import { AnyAction } from 'redux';

import { setIsCartOpen, setCartItems } from './cart.actions';

export type CartState = {
    cartItems: CartItem[];
    isCartOpen: Boolean;
}

const CARTITEMS_INITIAL_STATE: CartState = {
    cartItems: [],
    isCartOpen: false
}

const cartItemsReducer = (state = CARTITEMS_INITIAL_STATE,
    action:  AnyAction 
    ): CartState => {
        if(setCartItems.match(action)) {
            return {...state, cartItems: action.payload}   
        }
        if(setIsCartOpen.match(action)) {
            return {...state, isCartOpen: !state.isCartOpen}
        }
        return state;
}

export default cartItemsReducer;