import { useContext, useState } from "react";
import shoppingIconSvg from "../../assets/shopping-bag.svg";
import "./shoppingIcon.styles.scss";

import CartDropDown from "../cartDropDown/CartDropDown.component";
import { CartContext } from "../../context/CartContext";

const ShoppingIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItemsCounter } =
    useContext(CartContext);

  const toggleCartDropDown = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={`cart-icon-container`} onClick={toggleCartDropDown}>
      <img src={shoppingIconSvg} className="shopping-icon" alt="shoppingIcon" />
      <span className="item-count">{cartItemsCounter}</span>
    </div>
  );
};

export default ShoppingIcon;
