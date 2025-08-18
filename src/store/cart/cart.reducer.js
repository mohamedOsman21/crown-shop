import { CART_ACTION_TYPES } from "./cart.actionTypes";

const INITIAL_STATE = {
    isCartOpen: false,
    setIsCartOpen: () => {},

    cartItems: [],
    setCartItems: () => {},

    // cartItemsCounter: 0,

    // cartTotal: 0
}


export const cartReducer = (state = INITIAL_STATE, action) => {
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
                cartItems: payload
            };

        default: 
            return state;
    }
    
    
}






// // helper functions 

// // array cartItems, Product object ==> cartItems array
// const addCartItem = (cartItems, productToAdd) => {
//     // check if the cart contain the product of not
//     const existCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);

//     if(existCartItem){
//         return cartItems.map((cartItem) => 
//             cartItem.id == productToAdd.id
//             ? {...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//     }else {
//     // return array that have the new item in it
//     return [...cartItems, {...productToAdd, quantity: 1}];}
// };

// // decrement
// const removeCartItem = (cartItems, product) => {

//     // const existCartItem = cartItems.find((cartItem) => cartItem.id == product.id);
    
    
//     if(product.quantity === 1) {
//         return cartItems.filter((item) => item.id != product.id);
//     }


//     return cartItems.map((cartItem) => 
//         cartItem.id == product.id 
//             ? {...cartItem, quantity: cartItem.quantity - 1 }
//             : cartItem
//     );


    
// }

// // remove item
// const deleteButtonHandler = (cartItems, product) => {
//         return cartItems.filter((item) => item.id != product.id);
// }








// const cartSlice = createSlice({
//     name: cart,
//     initialState: {
//         isCartOpen: false,
//         cartItems: []
//     },
//     reducers: {
//         setCartItems(state, action) {
//             state.cartItems = action.payload
//         }
        
//         setCartIsOpen(state, action) {
//             state.cartIsOpen = action.payload
//         }

//         addToCart(state, action) {
//             state.cartItems = addCartItem(state.cartItems, action.payload)
//         }

//         deleteCartItem(state, action) {
//             state.cartItems = removeCartItem(state.cartItems, action.payload)
//         }

//         deleteItemButton(state, action) {
//             state.cartItems = deleteButtonHandler(state.cartItems, action.payload)
//         }
//     }
// })

// export {setCartItems, setCartIsOpen, addToCart, deleteCartItem, deleteItemButton} = cartSlice.action;

// export const cartReducer = cartSlice.reducer;

