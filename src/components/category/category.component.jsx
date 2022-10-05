import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import { useSelector } from 'react-redux';
import * as categoriesSelectores from '../../store/categories/categories.selectores';

import './category.style.scss';

const Category = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const { category } = useParams();

    const categoriesMap = useSelector(categoriesSelectores.categoriesMap);

    return(
        <div>
            <div className='shop_category-container'>
                {categoriesMap[category] && categoriesMap[category].map(el => <ProductCard product={el} key={el.id}/>)}
            </div>
        </div>

    )
}

export default Category;