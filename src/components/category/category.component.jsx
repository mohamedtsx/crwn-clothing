import './category.style.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component'; 

import { gql, useQuery } from '@apollo/client';

const COLLECTIONS = gql`
    query($title: String!) {
        getCollectionsByTitle(title: $title) {
        id
        title
        items {
        id
        name
        price
        imageUrl
        }
    } 
    }
`

const Category = () => {
    
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const {loading, data, error} = useQuery(COLLECTIONS, {
        variables: {
            title: category
        }
    });
    
    useEffect(() => {
        if(data) {
            const { getCollectionsByTitle: {items} } = data;
            setProducts(items);
        }
    }, [data, category]);
    
    


    
    return(
        <>
            { loading? <Spinner/> : <div>
                <div className='shop_category-container'>
                    {products && products.map(el => <ProductCard product={el} key={el.id}/>)}
                </div>
            </div> }
        </>
    )
}

export default Category;