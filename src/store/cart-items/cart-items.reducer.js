import * as cartItemsTypes from './cart-items.types';

const CARTITEMS_INITIAL_STATE = {
    cartItems: []
}

const cartItemsReducer = (state = CARTITEMS_INITIAL_STATE, action) => {

        const {cartItems} = state;
        const {type, payload} = action;
        const found = cartItems.length && payload ? cartItems.find(el => el.id === payload.id): false;

        // be carful there are explosive mines !!
        switch(type) {
            case cartItemsTypes.DECREMENT: 
                return {...state, cartItems: cartItems.map(el => el.id === payload.id ? {...el, quantity: el.quantity === 1 ? el.quantity : --el.quantity} : el)};
            case cartItemsTypes.REMOVE:
                return {...state, cartItems: cartItems.filter(el => el.id !== payload.id)};
            case cartItemsTypes.ADD:
                return !found 
                ? {...state, cartItems: [...cartItems, {...payload, quantity: 1}]} 
                :{...state, cartItems: cartItems.map(el => el.id === payload.id ? {...el, quantity: ++el.quantity} : el)};
            case cartItemsTypes.INCREMENT :
                return {...state, cartItems: cartItems.map(el => el.id === payload.id ? {...el, quantity: ++el.quantity} : el)};
            default:
                return state;
        }
}
export default cartItemsReducer;