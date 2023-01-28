import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style';

import { useSelector } from 'react-redux';
import * as cartItemsSelectors from '../../store/cart-items/cart-items.selectors';


const CartIcon = (props) => {
    
    const {isCartOpen, setIsCartOpen} = props;

    const handelCartIcon = () => setIsCartOpen(isCartOpen ? false : true);


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
