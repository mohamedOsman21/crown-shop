import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase utils/firebase-utils";

function Navigation() {
  // context
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={CrwnLogo} className="nav-logo"></img>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>sign out</span>
          ) : (
            <Link to="/auth" className="nav-link">
              sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
