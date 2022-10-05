import './category-preview.style.scss';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import { useSelector } from 'react-redux';
import * as categoriesSelectores from '../../store/categories/categories.selectores';

const CategoryPreview = () => {

    const categoriesMap = useSelector(categoriesSelectores.categoriesMap);
    const navigate = useNavigate();

    return(
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