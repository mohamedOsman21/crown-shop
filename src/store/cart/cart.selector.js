import { createSelector } from "reselect";


// export const cartTotalSelector  = (state) => state.cart.cartTotal;
// export const cartisCartOpenSelector  = (state) => state.cart.isCartOpen;
// export const cartItemsSelector  = (state) => state.cart.cartItems;
// export const cartItemsCounterSelector  = (state) => state.cart.cartItemsCounter;

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectItemsCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((total, cartItem)=> total + cartItem.quantity ,0)
);

export const selectTotal = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((total, item) => total + item.quantity * item.price , 0)
);


//  const newCount= cartItems.reduce((total, cartItem)=> total + cartItem.quantity ,0);
//  const total = cartItems.reduce((total, item) => total + item.quantity * item.price , 0);