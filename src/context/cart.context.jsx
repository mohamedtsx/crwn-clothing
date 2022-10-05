import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    

    
    // const value = {isCartOpen, setIsCartOpen};
    return <CartContext.Provider value={''}>{children}</CartContext.Provider>;
}

// cartHandler what is your key words for action types
// where i imported
// import cartItemTypes
// replace 

// or

// search for cartItemHandler and replance it with dispatch ok
// {type: itemCartTypes.---, payload: item || itemId || item}