import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/CartContext";

import { signOutUser } from "../../utils/firebase utils/firebase-utils";
import ShoppingIcon from "./../../Components/shppingIcon/ShoppingIcon.component";
import CartDropDown from "../../Components/cartDropDown/CartDropDown.component";

function Navigation() {
  // context
  const { currentUser } = useContext(UserContext);
  const {isCartOpen, setIsCartOpen} = useContext(CartContext)

  const toggleCartDropDown = () => {
    if(isCartOpen) {
      setIsCartOpen(!isCartOpen);
    }
  }
  

  return (
    <Fragment>
      <div className="navigation" onClick={toggleCartDropDown}>
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} className="nav-logo"></img>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              sign in
            </Link>
          )}
          <ShoppingIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
