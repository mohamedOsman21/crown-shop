import { useContext, useState } from "react";
import Button from "../buttons/Button.component";
import './cartDropDown.styles.scss';
import { CartContext } from "../../context/CartContext";

import CartItem from './../cartItem/CartItem.component';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";



const CartDropDown = () => {
    // const {cartItems} = useContext(CartContext);

    const cartItems = useSelector(selectCartItems)
    const isCartOpen = useSelector(selectIsCartOpen)
    const dispatch = useDispatch();


    const toggleCartDropDown = () => {
      // dispatch(setIsCartOpen(!isCartOpen));
      dispatch({type: 'SET_IS_CART_OPEN', payload: !isCartOpen});
  }
    
    return (
        <div className="cart-dropdown-container">
            <div className={`cart-items`}>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Link to='/checkout'>
                <Button onClick={toggleCartDropDown} >go to checkOut</Button>
            </Link>
        </div>
    )
}

export default CartDropDown;


// ${isOpen ? 'show' : ''}