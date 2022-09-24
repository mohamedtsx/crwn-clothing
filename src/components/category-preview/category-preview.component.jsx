import './category-preview.style.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = () => {

    const { categoriesMap } = useContext(CategoriesContext);
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