import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './checkoutItem.styles.scss'

import { addToCart, deleteItemButton, deleteCartItem } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import {  selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch()
  // const { deleteItemButton, addToCart, deleteCartItem } =
  //   useContext(CartContext);
    const cartItems = useSelector(selectCartItems)


  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt="" className="item-image" />
      </div>
      <span className="name">{item.name}</span>

      <div className="quantity">
        <span className="arrow" onClick={() => dispatch(deleteCartItem(cartItems,item))}>
          &#10094;
        </span>

        <span className="value">{item.quantity}</span>

        <span className="arrow" onClick={() => dispatch(addToCart(cartItems, item))}>
          &#10095;
        </span>
      </div>

      <span className="price">${item.price}</span>
      <span className="remove-button" onClick={() => dispatch(deleteItemButton(cartItems,item))}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
