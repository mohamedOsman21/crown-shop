import './productCard.styles.scss';
import Button from '../buttons/Button.component';
import './productCard.styles.scss';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

import { addToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';



const ProductCard = ({product}) => {
    const { name , imageUrl, price } = product;
    const dispatch = useDispatch();
    // const {addToCart, cartItemsCounter} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems)


    const addProductToCart = () => {
        dispatch(addToCart(cartItems, product))
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