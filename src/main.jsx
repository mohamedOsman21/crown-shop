import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";

import "./index.css";
import App from "./App.jsx";
// import { CategoriesMapProvider } from "./context/categoriesMapContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor = {persistor}>
      <BrowserRouter>
        {/* <CategoriesMapProvider> */}
          {/* <CartProvider> */}
            <App />
          {/* </CartProvider> */}
        {/* </CategoriesMapProvider> */}
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
