import { NavigationSt, NavLinksContainer, NavLink, LogoContainer, SignInNav } from './navigation.style.jsx'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { Outlet } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useSelector } from 'react-redux';
import * as userSelectores from '../../store/user/user.selectores';

const Navigation = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const currentUser = useSelector(userSelectores.selectCurrentUser);
    

    return(
        <Fragment>

            <NavigationSt>
                <LogoContainer to='/'><CrwnLogo className='logo'/></LogoContainer>
                <NavLinksContainer>
                    <NavLink to='shop'>SHOP</NavLink>
                    {currentUser ? (<SignInNav onClick={signOutUser}>SIGN OUT</SignInNav>)
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