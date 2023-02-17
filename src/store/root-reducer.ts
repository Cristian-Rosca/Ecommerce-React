import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/category.reducer';

import { userReducer } from './user/user.reducer';

export const RootReducer = combineReducers({
    user: userReducer,
    categories : categoriesReducer,
    cart : cartReducer,
});