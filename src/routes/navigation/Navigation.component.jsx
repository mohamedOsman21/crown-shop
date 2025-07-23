import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import './navigation.styles.scss';

function Navigation() {
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
          <Link to="/signIn" className="nav-link">
            sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
