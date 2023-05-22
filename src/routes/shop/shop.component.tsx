import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Category from '../../components/category/category.component';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/categories.actions';


let rock = true;

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(rock) {
      dispatch(fetchCategoriesStart());
    }
    rock = false;
  }, [dispatch]);

  return(
    <Routes>
      <Route index element={<CategoryPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}

export default Shop;