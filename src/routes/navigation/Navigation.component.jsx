import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/CartContext";
import { selectCurrentUser } from "../../store/user/user.selector";


import ShoppingIcon from "../../Components/shppingIcon/ShoppingIcon.component";
import CartDropDown from "../../Components/cartDropDown/CartDropDown.component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutTheUser } from "../../store/user/user.action";

function Navigation() {
  // context
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  // const {setIsCartOpen} = useContext(CartContext)

  const isCartOpen = useSelector(selectIsCartOpen)
  console.log(isCartOpen)

  // redux 
  const currentUser = useSelector(selectCurrentUser);

  const toggleCartDropDown = () => {
      // dispatch(setIsCartOpen(!isCartOpen));
      dispatch({type: 'SET_IS_CART_OPEN', payload: !isCartOpen});
  }

  const handleSignOut= () => {
    dispatch(signOutTheUser())
  }
  

  return (
    <Fragment>
      <div className="navigation"
      //  onClick={toggleCartDropDown}
       >
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} className="nav-logo"></img>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              sign in
            </Link>
          )}
          <ShoppingIcon />
        </div>
        {isCartOpen &&
         <CartDropDown />
         }
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
