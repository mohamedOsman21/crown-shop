import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/userContext.jsx";

import "./index.css";
import App from "./App.jsx";
import { CategoriesMapProvider } from "./context/categoriesMapContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesMapProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesMapProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
