import './shop.style.scss'
import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Category from '../../components/category/category.component';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import * as categoriesActions from '../../store/categories/categories.actions';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
        const categoriesMap = await getCategoriesAndDocuments();
        dispatch(categoriesActions.setCategoriesMap(categoriesMap));
    }
    getCategories();
  }, [dispatch]);

    return(
      <Routes>
        <Route index element={<CategoryPreview/>}/>
        <Route path=':category' element={<Category/>}/>
      </Routes>
    )
}

export default Shop;