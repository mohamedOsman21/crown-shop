import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/product-card/ProductCard.component";
import { CategoriesMapContext } from './../../context/categoriesMapContext';
import './category.styles.scss'
import { useSelector } from "react-redux";
import { categoryMapSelector } from "../../store/categoriesMap/categoriesMap.selector";




const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesMapContext)

    const  categoriesMap = useSelector(categoryMapSelector);

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return(
        <Fragment>
            <div className="category-title">
                <h2>{category.toUpperCase()}</h2>
            </div>
            <div className="category-container">
                {products && products.map((product) =>  <ProductCard key={product.id} product={product} />)}
            </div>
        </Fragment>
    )
}

export default Category;