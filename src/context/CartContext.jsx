import { createContext, useEffect, useState } from "react";


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
    isCartOpen: true,
    setIsCartOpen: () => {},

    cartItems: [],
    setCartItems: () => {},

    cartItemsCounter: 0,

    cartTotal: 0

})



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCounter, setCartItemsCounter] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCount= cartItems.reduce((total, cartItem)=> total + cartItem.quantity ,0);
        setCartItemsCounter(newCount);
    }, [cartItems])

    useEffect(()=>{
        const total = cartItems.reduce((total, item) => total + item.quantity * item.price , 0)
        setCartTotal(total);
    }, [cartItems])
    
    const addToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const deleteCartItem = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteItemButton = (productToRemove) => {
        setCartItems(deleteButtonHandler(cartItems, productToRemove));
    }

    

    
    const value = {isCartOpen, setIsCartOpen, addToCart, cartItems , cartItemsCounter, cartTotal, deleteCartItem, deleteItemButton};

    return <CartContext.Provider value={value} > {children} </CartContext.Provider>
}