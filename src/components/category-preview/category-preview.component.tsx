import * as Styled from './category-preview.style';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';

import { useSelector } from 'react-redux';
import { 
    selectCategoriesIsLoading, 
    selectCategoriesMap 
} from '../../store/categories/categories.selectors';




const CategoryPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    
    const navigate = useNavigate();


    return(
        isLoading ? <Spinner/> : 
        <Styled.CategoriesContainer>
        {
            Object.keys(categoriesMap).map(title => {
                const categoryShortMap = categoriesMap[title].filter(( _, index) => index < 4);
                return(
                    <div key={title} >
                        <Styled.CategoryHeader onClick={() => navigate(`${title}`)}>{title}</Styled.CategoryHeader>
                        <Styled.CategoryItems>
                            {categoryShortMap.map(el => <ProductCard product={el} key={el.id}/>)}
                        </Styled.CategoryItems>
                    </div>
                );
            })
        }
        </Styled.CategoriesContainer>
    )
}

export default CategoryPreview;