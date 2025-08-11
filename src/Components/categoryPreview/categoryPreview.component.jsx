import { useSelector } from "react-redux";
import ProductCard from "../product-card/ProductCard.component";
import "./categoryPreview.styles.scss";

import { useNavigate } from "react-router-dom";
import { selectIsLoading } from "../../store/categoriesMap/categoriesMap.selector";
import Spinner from "../spinner/spinner.component";
import { Fragment } from "react";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const redirectTotarget = () => {
    navigate(`/shop/${title}`);
  };

  const categoryIsLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {categoryIsLoading ? (
        <Spinner />
      ) : (
        <div className="category-preview-container">
          <h2>
            <span className="title" onClick={redirectTotarget}>
              {title.toUpperCase()}
            </span>
          </h2>

          <div className="preview">
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
