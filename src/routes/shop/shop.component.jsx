import './shop.style.scss'
import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Category from '../../components/category/category.component';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategoriesMap } from '../../store/categories/categories.actions';


const Shop = () => {
  const dispatch = useDispatch();
  //
  //
  let tempSolution = true;

  useEffect(() => {
    if (tempSolution) {
        const getCategories = async () => {
          const categoriesMap = await getCategoriesAndDocuments();
          console.log('%c Dispatch', 'color: red')
          dispatch(setCategoriesMap(categoriesMap));
        }

      getCategories();
      tempSolution = false;
    }
    
  }, []);


  return(
    <Routes>
      <Route index element={<CategoryPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}

export default Shop;