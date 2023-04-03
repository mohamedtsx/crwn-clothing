import './category.style.scss';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../product-card/product-card.component';


const Category = () => {

    const { categoriesMap } = useContext(CategoriesContext);
    const { category } = useParams();

    return(
        <div>
            <div className='shop_category-container'>
                {categoriesMap[category]&& categoriesMap[category].map(el => <ProductCard product={el} key={el.id}/>)}
            </div>
        </div>

    )
}

export default Category;