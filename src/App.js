import { useEffect, lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.actions';


import Spinner from './components/spinner/spinner.component';
import Error from './components/error/error.component';

import { useSelector } from 'react-redux';
import { selectAuthError } from './store/user/user.selectors';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Category = lazy(() => import('./components/category/category.component'));



const App = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);


  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
  

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Navigation/>}> 
          <Route index element={<Home/>}/>
          <Route path='authentication' element={<Authentication/>}/>
          <Route path='shop/*' element={<Shop/>}>
            <Route path=':category' element={<Category/>}/>
          </Route> 
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
      {authError? <Error error={authError}/>: null}
    </Suspense>
  );
}

export default App;
