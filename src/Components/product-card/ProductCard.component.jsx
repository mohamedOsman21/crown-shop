import './productCard.styles.scss';
import Button from '../buttons/Button.component';
import './productCard.styles.scss';



const ProductCard = ({product}) => {
    const { name , imageUrl, price } = product;
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='secondary'>add to cart</Button>
        </div>
    )
}

export default ProductCard