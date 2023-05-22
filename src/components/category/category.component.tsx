import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { 
    selectCategoriesIsLoading, 
    selectCategoriesMap 
} from '../../store/categories/categories.selectors';
import { useEffect, useState } from 'react';

import styled from 'styled-components';


const StyledCategory = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    row-gap: 5rem;
    column-gap: 1rem;
`;

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
            <StyledCategory>
                {products && products.map(
                    el => <ProductCard product={el} key={el.id}/>
                )}
            </StyledCategory>
        </div>
    )
}

export default Category;