import { createContext, useState } from "react";

export const CartContext = createContext({});

const handelCartItem = (cartItems, item, action='add') => {
    const itemId = item.id;
    const existingCartItem = cartItems.find(el => el.id === itemId);

    if (existingCartItem) {
        if (action === 'decrement') {
            return cartItems.map(el => el.id === itemId ? {...el, quantity: el.quantity === 1 ? el.quantity : --el.quantity} : el);
        } else if (action === 'remove') {
            return cartItems.filter(el => el.id !== itemId);
        } else { // action should = increment or add
            return cartItems.map(el => el.id === itemId ? {...el, quantity: ++el.quantity} : el);
        }
    }

    // if (existingCartItem) {
    //     return {
    //         ['decrement']: cartItems.map(el => el.id === itemId ? {...el, quantity: el.quantity === 1 ? el.quantity : --el.quantity} : el),
    //         ['remove']: cartItems.filter(el => el.id !== itemId),
    //         ['increment' || 'add']: cartItems.map(el => el.id === itemId ? {...el, quantity: ++el.quantity} : el)
    //     }[action];
    // }


    return [...cartItems, {...item, quantity: 1}];
}


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const cartItemHandeler = (item, action) => {
        setCartItems(handelCartItem(cartItems, item, action));
    }
    
    const value = {isCartOpen, setIsCartOpen, cartItemHandeler, cartItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
