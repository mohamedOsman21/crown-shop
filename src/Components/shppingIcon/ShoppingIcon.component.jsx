import { useContext, useState } from "react";
import shoppingIconSvg from "../../assets/shopping-bag.svg";
import "./shoppingIcon.styles.scss";

import CartDropDown from "../cartDropDown/CartDropDown.component";
import { CartDropDownContext } from "../../context/cartDropDownContext";



const ShoppingIcon = () => {
    const {setIsCartOpen, isCartOpen} = useContext(CartDropDownContext)
    
    const toggleCartDropDown = () => setIsCartOpen(!isCartOpen);

    return (
    <div className={`cart-icon-container`}  onClick={toggleCartDropDown}>
        <img src={shoppingIconSvg} className="shopping-icon" alt="shoppingIcon" />
        <span className="item-count">0</span>
    </div>
    );
};

export default ShoppingIcon;
