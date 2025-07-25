import Home from "./routes/home/home.component";
// import Shop from "./routes/shop/Shop.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import UserAuthentication from "./routes/userAuthentication/UserAuthentication.component";
import Shop from "./routes/shop/Shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<UserAuthentication />} />
      </Route>
    </Routes>
  );
}

export default App;
