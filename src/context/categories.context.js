import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';


export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    useEffect(() => {
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap)
        }
        getCategories();
    }, []);

    
    const value = {categoriesMap, setCategoriesMap}
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}


