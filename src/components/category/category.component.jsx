import './category.style.scss';

import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { 
    selectCategoriesIsLoading, 
    selectCategoriesMap 
} from '../../store/categories/categories.selectors';



const Category = () => {
    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);


    return(
        isLoading ? <Spinner/> : 
        <div>
            <div className='shop_category-container'>
                {!!categoriesMap[category] && categoriesMap[category].map(el => <ProductCard product={el} key={el.id}/>)}
            </div>
        </div>
    )
}

export default Category;