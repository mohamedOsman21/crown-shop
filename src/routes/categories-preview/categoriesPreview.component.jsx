import { Fragment, useContext } from "react";
import { CategoriesMapContext } from "../../context/categoriesMapContext";

import ProductCard from "../../Components/product-card/ProductCard.component";

import CategoryPreview from "../../Components/categoryPreview/categoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesMapContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
