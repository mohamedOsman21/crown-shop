import './Directory.styles.scss';
import CategoryItem from '../CategoryItem/CategoryItem.component';

function Directory ({categories}) {
    return (
        <div className='categories-container'>
            {categories.map( (category) =>  {
                return(<CategoryItem key={category.id} category={category}/>);
            } ) 
            }
        </div>
    )
}

export default Directory;