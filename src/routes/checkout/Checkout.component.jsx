import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./chekcout.styles.scss";
import CheckoutItem from "../../Components/checkout/checkoutItem.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectTotal } from "../../store/cart/cart.selector";



const Checkout = () => {
  // const { counterPlus, deleteItemButton, addToCart, deleteCartItem } =
  //   useContext(CartContext);


    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectTotal);


    // calculate total
    const sumTotal = () => {
        const total = cartItems.reduce((total, item) => {
            total += item.quantity * item.price
        }, 0)
        console.log(total)
    }


  return (
    <div className="checkout-container">
      {/* the title descripe the cart below */}
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>

        <div className="header-block">
          <span>desctiption</span>
        </div>

        <div className="header-block">
          <span>quantity</span>
        </div>

        <div className="header-block">
          <span>price</span>
        </div>

        <div className="header-block">
          <span>remove</span>
        </div>
      </div>

      {/* checkout carts section */}
      {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}


      <span className="total" onClick={sumTotal}>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
