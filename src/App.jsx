import Home from "./routes/home/Home.component";
// import Shop from "./routes/shop/Shop.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import { useDispatch } from "react-redux";
import UserAuthentication from "./routes/userAuthentication/UserAuthentication.component";
import { createUserDocumentFromAuth, getCurrentuser, onAuthenticationStateChangedListener } from "./utils/firebase utils/firebase-utils";
import Shop from "./routes/shop/Shop.component";

import { getCollectionFromObject } from "./utils/firebase utils/firebase-utils";

import Checkout from "./routes/checkout/Checkout.component";

import { checkUserSession, setCurrentUser } from "./store/user/user.action";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  
  
  useEffect( () => {
          // const listener = onAuthenticationStateChangedListener((user)=>{
          //     if(user) {
          //         createUserDocumentFromAuth(user)
          //     }

          //     dispatch({type: 'SET_CURRENT_USER', payload: user});
          // })
          
          // return listener
          // getCurrentuser().then((user) => dispatch({type: 'SET_CURRENT_USER', payload: user}))
          dispatch(checkUserSession());
      },[])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<UserAuthentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
