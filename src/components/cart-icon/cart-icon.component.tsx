import { CartIconContainer, ItemCount } from './cart-icon.style';

import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selectors';

import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const dispatch = useDispatch();
    

    const handelCartIcon = () => {
        dispatch(setIsCartOpen())
    }

    const count = useSelector(selectCartCount);


    return(
        <CartIconContainer onClick={handelCartIcon}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{count}</ItemCount>
        </CartIconContainer>
    )
} 

export default CartIcon;
