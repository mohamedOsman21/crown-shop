import { Fragment, useContext } from "react";
import { CategoriesMapContext } from "../../context/categoriesMapContext";

import ProductCard from "../../Components/product-card/ProductCard.component";

import CategoryPreview from "../../Components/categoryPreview/categoryPreview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesMapContext);

  const categoriesMap = useSelector((state) =>  state.categories.categoriesMap);

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
