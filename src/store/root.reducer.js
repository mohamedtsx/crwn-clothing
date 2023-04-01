import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import categoriesReducer from "./categories/categories.reducer";
import cartItemsReducer from "./cart/cart.reducer";


const rootReducer = combineReducers({
    users: userReducer,
    cart: cartItemsReducer,
    categories: categoriesReducer
});


export default rootReducer;