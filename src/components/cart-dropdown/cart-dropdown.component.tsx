import { CartDropdownContainer, CartItems, Back, CheckoutButton } from './cart-dropdown.style';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.actions';



const CartDropdown = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    

    return(
        <>
            <Back onClick={
                () => dispatch(setIsCartOpen())
            }></Back>

            <CartDropdownContainer>

                <CartItems>
                    {cartItems.length ? cartItems.map(item => (
                        <div key={item.id}>
                            <CartItem cartItem={item}/>
                        </div>
                    )): <span className='empty-message'>Your cart is empty</span>}
                </CartItems>
                
                <CheckoutButton type='button' className='button' onClick={() => {
                    dispatch(setIsCartOpen())
                    navigate('/checkout')
                }}>checkout</CheckoutButton>
            </CartDropdownContainer>
        </>
    )
}

export default CartDropdown;