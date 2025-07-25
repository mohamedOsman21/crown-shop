import { useContext, useState } from "react";
import Button from "../buttons/Button.component";
import './cartDropDown.styles.scss';
import { CartContext } from "../../context/CartContext";

import CartItem from './../cartItem/CartItem.component';
import { Link } from "react-router-dom";



const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);

    
    return (
        <div className="cart-dropdown-container">
            <div className={`cart-items`}>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Link to='/checkout'>
                <Button >go to checkOut</Button>
            </Link>
        </div>
    )
}

export default CartDropDown;


// ${isOpen ? 'show' : ''}