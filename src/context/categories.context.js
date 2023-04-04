import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';
import { gql, useQuery } from '@apollo/client';

export const CategoriesContext = createContext({
    categoriesMap: {}
});

const COLLECTIONS = gql`
    query {
        collections {
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

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    // useEffect(() => {
    //     const getCategories = async () => {
    //         const categoriesMap = await getCategoriesAndDocuments();
    //         setCategoriesMap(categoriesMap)
    //     }
    //     getCategories();
    // }, []);

    const {loading, data, error} = useQuery(COLLECTIONS);

    useEffect(() => {
        if(data) {
            const {collections} = data;
            const collectionMap = collections.reduce((acc, collection) => {
                const {title, items} = collection;
                acc[title.toLowerCase()] = items;
                return acc;
            }, {});
            setCategoriesMap(collectionMap);
        }
    }, [data]);

    const value = {categoriesMap, setCategoriesMap, loading}

    return( 
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}


