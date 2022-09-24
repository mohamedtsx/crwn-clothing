import { NavigationSt, NavLinksContainer, NavLink, LogoContainer } from './navigation.style.jsx'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { userContext } from '../../context/users.context';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {

    const {currentUser} = useContext(userContext);
    const { isCartOpen } = useContext(CartContext);

    return(
        <Fragment>

            <NavigationSt>
                <LogoContainer to='/'><CrwnLogo className='logo'/></LogoContainer>
                <NavLinksContainer>
                    <NavLink to='shop'>Shop</NavLink>
                    {currentUser ? (<span onClick={signOutUser}>SIGN OUT</span>)
                    :<NavLink to='authentication'>Sign In</NavLink>}
                    <CartIcon/>
                </NavLinksContainer>
            </NavigationSt>
        
            {isCartOpen && <CartDropdown/>}
        
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;