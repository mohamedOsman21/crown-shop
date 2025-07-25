import { useContext, useState } from "react";
import Button from "../buttons/Button.component";
import './cartDropDown.styles.scss';
import { CartDropDownContext } from "../../context/cartDropDownContext";



const CartDropDown = () => {
    
    
    return (
        <div className="cart-dropdown-container">
            <div className={`cart-items`}/>
            <Button >go to checkOut</Button>
        </div>
    )
}

export default CartDropDown;


// ${isOpen ? 'show' : ''}