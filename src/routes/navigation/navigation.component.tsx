import { 
    NavigationSt, 
    NavLinksContainer, 
    NavLink, 
    LogoContainer, 
    SignInNav 
} from './navigation.style'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { signOutStart } from '../../store/user/user.actions';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';


const Navigation = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutHandler = () => {
        dispatch(signOutStart());
    }


    return(
        <>
            <NavigationSt>
                <LogoContainer to='/'><CrownLogo className='logo'/></LogoContainer>
                <NavLinksContainer>
                    <NavLink to='shop'>SHOP</NavLink>
                    {currentUser ? (<SignInNav onClick={signOutHandler}>SIGN OUT</SignInNav>)
                    :<NavLink to='authentication'>Sign In</NavLink>}
                    <CartIcon/>
                </NavLinksContainer>
            </NavigationSt>
        
            {isCartOpen && <CartDropdown/>}
        
            <Outlet/>
        </>
    )
}

export default Navigation;