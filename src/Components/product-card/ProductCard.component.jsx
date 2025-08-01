import './productCard.styles.scss';
import Button from '../buttons/Button.component';
import './productCard.styles.scss';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';



const ProductCard = ({product}) => {
    const { name , imageUrl, price } = product;
    const {addToCart, cartItemsCounter} = useContext(CartContext);

    const addProductToCart = () => {
        addToCart(product)
    }
    
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType='secondary' onClick={addProductToCart} > add to cart</Button>
        </div>
    )
}

export default ProductCard