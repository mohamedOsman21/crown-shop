import { useContext, useState } from "react";
import shoppingIconSvg from "../../assets/shopping-bag.svg";
import "./shoppingIcon.styles.scss";

import CartDropDown from "../cartDropDown/CartDropDown.component";
import { CartContext } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen, selectItemsCount } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const ShoppingIcon = () => {
   // context
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  // const {setIsCartOpen} = useContext(CartContext)


  // redux 
  const currentUser = useSelector(selectCurrentUser);

  const toggleCartDropDown = () => {
      // dispatch(setIsCartOpen(!isCartOpen));
      dispatch({type: 'SET_IS_CART_OPEN', payload: !isCartOpen});
  }
  

  // const { setIsCartOpen } =
  //   useContext(CartContext);

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItemsCounter = useSelector(selectItemsCount);

  return (
    <div className={`cart-icon-container`} onClick={toggleCartDropDown}>
      <img src={shoppingIconSvg} className="shopping-icon" alt="shoppingIcon" />
      <span className="item-count">{cartItemsCounter}</span>
    </div>
  );
};

export default ShoppingIcon;
