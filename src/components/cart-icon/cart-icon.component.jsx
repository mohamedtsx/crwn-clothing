import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.style.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const handelCartIcon = () => setIsCartOpen(isCartOpen ? false : true);
    const mount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

    return(
        <CartIconContainer onClick={handelCartIcon}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{mount}</ItemCount>
        </CartIconContainer>
    )
} 

export default CartIcon;
