import './category-preview.style.scss';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';

import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selectors';


const CategoryPreview = () => {
    console.log('%c categoryPreview use selector with dispatch', 'color: gray')

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    
    const navigate = useNavigate();


    return(
        isLoading ? <Spinner/> : 
        <div className='categories-container'>
        {
            Object.keys(categoriesMap).map(title => {
                const categoryShortMap = categoriesMap[title].filter(( _, index) => index < 4);
                
                return(
                    <div key={title} >
                        <h2 onClick={() => navigate(`${title}`)} className='category-header'>{title}</h2>
                        <div className='category-items'>
                            {categoryShortMap.map(el => <ProductCard product={el} key={el.id}/>)}
                        </div>
                    </div>
                );
            })
        }
        </div>
    )
}

export default CategoryPreview;