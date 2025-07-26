import { useNavigate } from 'react-router-dom';
import './CategoryItem.styles.scss';

function CategoryItem ({category}) {
    const {title, imageUrl} = category;
    const navigator = useNavigate();

    const handleNavigationTarget = () => {
        navigator(`/shop/${title}`)
    }

    return (
        <div className='category-item-container' onClick={handleNavigationTarget}>
            <div className="background-image"  style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>shop now</p>
            </div>
        </div>
    );
}

export default CategoryItem;