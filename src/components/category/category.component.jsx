import './category.style.scss';

import ProductCard from '../product-card/product-card.component';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';



const Category = () => {
    console.log('%c category use selector without dispatch', 'color: gray')

    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);


    return(
        <div>
            <div className='shop_category-container'>
                {!!categoriesMap[category] && categoriesMap[category].map(el => <ProductCard product={el} key={el.id}/>)}
            </div>
        </div>

    )
}

export default Category;