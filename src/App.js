import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import Category from './components/category/category.component';


import { useEffect } from 'react';
import { 
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from './utils/firebase/firebase';
import { useDispatch } from 'react-redux';
import * as userActions from './store/user/user.actions';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(userActions.setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch])


  return (
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
  );
}

export default App;
