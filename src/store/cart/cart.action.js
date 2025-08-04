

import { CART_ACTION_TYPES } from "./cart.actionTypes";
import { cartReducer } from "./cart.reducer";
import { useDispatch, useSelector } from "react-redux";




// const [{isCartOpen, cartItems, cartItemsCounter, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

// const isCartOpen = useSelector(cartisCartOpenSelector);
// const cartItems = useSelector(cartItemsSelector);
// const cartItemsCounter = useSelector(cartItemsCounterSelector);
// const cartTotal = useSelector(cartTotalSelector);



// helper functions 

// array cartItems, Product object ==> cartItems array
const addCartItem = (cartItems, productToAdd) => {
    // check if the cart contain the product of not
    const existCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);

    if(existCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id == productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }else {
    // return array that have the new item in it
    return [...cartItems, {...productToAdd, quantity: 1}];}
};

// decrement
const removeCartItem = (cartItems, product) => {

    // const existCartItem = cartItems.find((cartItem) => cartItem.id == product.id);
    
    
    if(product.quantity === 1) {
        return cartItems.filter((item) => item.id != product.id);
    }


    return cartItems.map((cartItem) => 
        cartItem.id == product.id 
            ? {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );


    
}

// remove item
const deleteButtonHandler = (cartItems, product) => {
        return cartItems.filter((item) => item.id != product.id);
}








const createAction = (type, payload) => ({ type, payload });



export const setIsCartOpen = (cartIsOpen) => {
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartIsOpen);
};




export const updateCartItemsReducer = (cartItems, newCartItem) => {

    const newCount= cartItems.reduce((total, cartItem)=> total + cartItem.quantity ,0);

    const total = cartItems.reduce((total, item) => total + item.quantity * item.price , 0);


    dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, 
        payload: {
            cartItems: newCartItem,
            cartTotal: total,
            cartItemsCounter: newCount
        }
    })

}

// const cartItems = useSelector(cartItemsSelector);

export const addToCart = (cartItems, productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    // updateCartItemsReducer(newCartItem)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItem}
}

export const deleteCartItem = (cartItems, productToRemove) => {
    const newCartItem = removeCartItem(cartItems, productToRemove);
    // updateCartItemsReducer(newCartItem)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItem}
}

export const deleteItemButton = (cartItems, productToRemove) => {
    const newCartItem =deleteButtonHandler(cartItems, productToRemove);
    // updateCartItemsReducer(newCartItem)
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItem}
}
