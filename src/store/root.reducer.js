import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import categoriesReducer from "./categories/categories.reducer";
import cartItemsReducer from "./cart-items/cart-items.reducer";


const rootReducer = combineReducers({
    users: userReducer,
    cartItems: cartItemsReducer,
    categories: categoriesReducer
});


export default rootReducer;

