import { createContext, useEffect, useReducer, useState } from "react";


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

    const existCartItem = cartItems.find((cartItem) => cartItem.id == product.id);
    
    
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





export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},

    cartItems: [],
    setCartItems: () => {},

    cartItemsCounter: 0,

    cartTotal: 0

})

// ------------------------- reducer Function -------------------------
// states
const CART_ACTION_TYPES = { 
    "SET_IS_CART_OPEN": 'SET_IS_CART_OPEN',
    "SET_CART_ITEMS": 'SET_CART_ITEMS',
    "SET_CART_ITEMS_COUNTER": 'SET_CART_ITEMS_COUNTER',
    "SET_CART_TOTAL": 'SET_CART_TOTAL',
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const {type ,payload} = action

    switch(type){
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state, 
                isCartOpen: payload
            };

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state, 
                ...payload
            };

        default: 
            state;
    }
    
    
}


// ------------------------- End reducer function -------------------------

const INITIAL_STATE = {
    isCartOpen: false,
    setIsCartOpen: () => {},

    cartItems: [],
    setCartItems: () => {},

    cartItemsCounter: 0,

    cartTotal: 0
}




export const CartProvider = ({children}) => {

    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartItemsCounter, setCartItemsCounter] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [{isCartOpen, cartItems, cartItemsCounter, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const setIsCartOpen = (cart) => {
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: cart})
    }


    const updateCartItemsReducer = (newCartItem) => {

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


    // REMOVE
    // const setCartItemsCounter = (cart) => {
    //     dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS_COUNTER, payload: cart})
    // }


    // const setCartTotal = (cart) => {
    //     dispatch({type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: cart})
    // }
    //REMOVE 

    // useEffect(()=>{
    //     const newCount= cartItems.reduce((total, cartItem)=> total + cartItem.quantity ,0);
    //     setCartItemsCounter(newCount);
    // }, [cartItems])

    // useEffect(()=>{
    //     const total = cartItems.reduce((total, item) => total + item.quantity * item.price , 0)
    //     setCartTotal(total);
    // }, [cartItems])
    
    const addToCart = ( productToAdd) => {
        const newCartItem = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItem)
    }

    const deleteCartItem = ( productToRemove) => {
       const newCartItem = removeCartItem(cartItems, productToRemove);
       updateCartItemsReducer(newCartItem)
    }

    const deleteItemButton = ( productToRemove) => {
        const newCartItem =deleteButtonHandler(cartItems, productToRemove);
        updateCartItemsReducer(newCartItem)
    }

    

    
    const value = {isCartOpen, setIsCartOpen, addToCart, cartItems , cartItemsCounter, cartTotal, deleteCartItem, deleteItemButton};

    return <CartContext.Provider value={value} > {children} </CartContext.Provider>
}