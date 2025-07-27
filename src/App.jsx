import Home from "./routes/home/Home.component";
// import Shop from "./routes/shop/Shop.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import UserAuthentication from "./routes/userAuthentication/UserAuthentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";

function App() {
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
