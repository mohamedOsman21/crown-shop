// import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";
import { ProductsContext } from "../../context/productContext";

import ProductCard from "../../Components/product-card/ProductCard.component";

import './shop.styles.scss'

const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/> 
      ))}
    </div>
  );
}

export default Shop;
