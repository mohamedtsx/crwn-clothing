import { NavigationSt, NavLinksContainer, NavLink, LogoContainer, SignInNav } from './navigation.style.jsx'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { Outlet } from 'react-router-dom';
import { Fragment, useState } from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useDispatch, useSelector } from 'react-redux';
import * as userSelectors from '../../store/user/user.selectors';
import { signOutStart } from '../../store/user/user.actions.js';

const Navigation = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch();

    const currentUser = useSelector(userSelectors.selectCurrentUser);

    const signOutHandler = () => {
        dispatch(signOutStart());
    }
    

    return(
        <Fragment>

            <NavigationSt>
                <LogoContainer to='/'><CrwnLogo className='logo'/></LogoContainer>
                <NavLinksContainer>
                    <NavLink to='shop'>SHOP</NavLink>
                    {currentUser ? (<SignInNav onClick={signOutHandler}>SIGN OUT</SignInNav>)
                    :<NavLink to='authentication'>Sign In</NavLink>}
                    <CartIcon  isCartOpen={isCartOpen} setIsCartOpen = {setIsCartOpen}/>
                </NavLinksContainer>
            </NavigationSt>
        
            {isCartOpen && <CartDropdown/>}
        
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;