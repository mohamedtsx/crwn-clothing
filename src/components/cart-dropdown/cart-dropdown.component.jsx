import { CartDropdownContainer, CartItems, HiddenContainer } from './cart-dropdown.style.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import * as cartItemsSelectors from '../../store/cart/cart.selectors';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.actions.js';
import { useRef } from 'react';



const CartDropdown = () => {
    const dispatch = useDispatch();
    const hideRef = useRef(null);

    const cartItems = useSelector(cartItemsSelectors.selectCartItems);
    const navigate = useNavigate();
    
    const hideDropdownHandler = (e) => {
        dispatch(setIsCartOpen())
    }

    return(
        <>
            <HiddenContainer ref={hideRef}  onClick={hideDropdownHandler}>
            </HiddenContainer>

            <CartDropdownContainer>

                <CartItems>
                    {cartItems.length ? cartItems.map(item => (
                        <div key={item.id}>
                            <CartItem cartItem={item}/>
                        </div>
                    )): <span className='empty-message'>Your cart is empty</span>}
                </CartItems>
                
                <Button type='button' className='button' onClick={() => {
                    dispatch(setIsCartOpen())
                    navigate('/checkout')
                }}>CHECKOUT</Button>           
            </CartDropdownContainer>
        </>
    )
}

export default CartDropdown;