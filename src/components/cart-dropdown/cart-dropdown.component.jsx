import { CartDropdownContainer, CartItems } from './cart-dropdown.style.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import * as cartItemsSelectors from '../../store/cart-items/cart-items.selectors';

const CartDropdown = () => {

    const cartItems = useSelector(cartItemsSelectors.selectCartItems);
    const navigate = useNavigate();


    return(
        <CartDropdownContainer>

            <CartItems>
                {cartItems.length ? cartItems.map(item => (
                    <div key={item.id}>
                        <CartItem cartItem={item}/>
                    </div>
                )): <span className='empty-message'>Your cart is empty</span>}
            </CartItems>
            
            <Button type='button' className='button' onClick={() => navigate('/checkout')}>CHECKOUT</Button>           
        
        </CartDropdownContainer>
    )
}

export default CartDropdown;