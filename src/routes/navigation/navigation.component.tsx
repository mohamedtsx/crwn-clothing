import * as Styled from './navigation.style';

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
            <Styled.Navigation>
                <Styled.LogoContainer to='/'>
                    <CrownLogo className='logo'/>
                </Styled.LogoContainer>
                <Styled.NavLinksContainer>
                    <Styled.NavLink to='shop'>SHOP</Styled.NavLink>
                    { 
                        currentUser ? 
                        (<Styled.SignInNav onClick={signOutHandler}>SIGN OUT</Styled.SignInNav>)
                        :<Styled.NavLink to='authentication'>Sign In</Styled.NavLink>
                    }
                    <CartIcon/>
                </Styled.NavLinksContainer>
            </Styled.Navigation>
        
            {isCartOpen && <CartDropdown/>}
        
            <Outlet/>
        </>
    )
}

export default Navigation;