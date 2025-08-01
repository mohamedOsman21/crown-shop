import ProductCard from "../product-card/ProductCard.component";
import './categoryPreview.styles.scss'

import {useNavigate} from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const redirectTotarget = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={redirectTotarget}>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
        products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        }
      </div>
    </div>
  );
};

export default CategoryPreview;
