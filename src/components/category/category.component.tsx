import './category.style.scss';

import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { 
    selectCategoriesIsLoading, 
    selectCategoriesMap 
} from '../../store/categories/categories.selectors';
import { useEffect, useState } from 'react';


type CategoryRouteParams = {
    category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;

    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);


    return(
        isLoading ? <Spinner/> : 
        <div>
            <div className='shop_category-container'>
                {products && products.map(
                    el => <ProductCard product={el} key={el.id}/>
                )}

            </div>
        </div>
    )
}

export default Category;