import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { createAction,  withMatcher} from '../../utils/reducer/reducer.utils';
import { Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/categories.types';


const addToCartItems = (cartItems: CartItem[], itemToAdd: CategoryItem): CartItem[] => {
    const found = cartItems.find(el => el.id === itemToAdd.id);
    
    return !found ? [...cartItems, {...itemToAdd, quantity: 1}] : cartItems.map(
        el => el.id === itemToAdd.id ? {...el, quantity: ++el.quantity} : el
    );
}

const clearCartItem = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[]=> {
    return cartItems.filter(el => el.id !== itemToRemove.id);;
}

const removeFromCart = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => {

    return cartItems.map(el => {
        if(el.id !== itemToRemove.id) {
            return el;
        }
        return {...el, quantity: el.quantity === 1 ? el.quantity : --el.quantity}
    });
}


type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;
type SetIsCartOpen = Action<CART_ACTION_TYPES.SET_IS_CART_OPEN>;

export const setCartItems = withMatcher(
    (newCartItems: CartItem[]): SetCartItems => (
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems))
);


export const addItemToCart = (cartItems: CartItem[], itemToAdd: CategoryItem) => {
    const newCartItems = addToCartItems(cartItems, itemToAdd);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], itemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem) => {
    const newCartItems = removeFromCart(cartItems, itemToRemove);
    return setCartItems(newCartItems);
}


export const setIsCartOpen = withMatcher(
    (): SetIsCartOpen => 
        createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN)
);