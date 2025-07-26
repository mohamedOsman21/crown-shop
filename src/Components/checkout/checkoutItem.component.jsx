import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './checkoutItem.styles.scss'

const CheckoutItem = ({ item }) => {
  const { deleteItemButton, addToCart, deleteCartItem } =
    useContext(CartContext);


  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt="" className="item-image" />
      </div>
      <span className="name">{item.name}</span>

      <div className="quantity">
        <span className="arrow" onClick={() => deleteCartItem(item)}>
          &#10094;
        </span>

        <span className="value">{item.quantity}</span>

        <span className="arrow" onClick={() => addToCart(item)}>
          &#10095;
        </span>
      </div>

      <span className="price">${item.price}</span>
      <span className="remove-button" onClick={() => deleteItemButton(item)}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
