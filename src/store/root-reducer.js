import {combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { categoriesMapReducer } from './categoriesMap/categoriesMap.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers ({
    user: userReducer,
    categories: categoriesMapReducer,
    cart:  cartReducer,
})