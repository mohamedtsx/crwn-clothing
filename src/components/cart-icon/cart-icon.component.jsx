import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

import { useSelector } from 'react-redux';
import * as cartItemsSelectors from '../../store/cart/cart.selectors';

import { isCartOpen } from '../../store/cart/cart.types';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.actions';

const CartIcon = () => {
    const dispatch = useDispatch();
    

    const handelCartIcon = () => {
        dispatch(setIsCartOpen())
    }


    const cartItems = useSelector(cartItemsSelectors.selectCartItems);

    const mount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

    return(
        <CartIconContainer onClick={handelCartIcon}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{mount}</ItemCount>
        </CartIconContainer>
    )
} 

export default CartIcon;
