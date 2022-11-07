import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import { useSelector } from 'react-redux';
import * as categoriesSelectors from '../../store/categories/categories.selectors';

import './category.style.scss';

const Category = () => {
    const { category } = useParams();

    const categoriesMap = useSelector(categoriesSelectors.categoriesMap);

    return(
        <div>
            <div className='shop_category-container'>
                {categoriesMap[category] && categoriesMap[category].map(el => <ProductCard product={el} key={el.id}/>)}
            </div>
        </div>

    )
}

export default Category;