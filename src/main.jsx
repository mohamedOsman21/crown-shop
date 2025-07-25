import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/userContext.jsx";

import "./index.css";
import App from "./App.jsx";
import { ProductsProvider } from "./context/productContext.jsx";
import { CartDropDownProvider } from "./context/cartDropDownContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>

        <ProductsProvider>

          <CartDropDownProvider>
            <App />
          </CartDropDownProvider>
          
        </ProductsProvider>

      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
