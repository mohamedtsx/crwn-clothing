import { CartDropdownContainer, CartItems } from './cart-dropdown.style.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';



const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
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
            
            <Button type='button' className='button' onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>           
        
        </CartDropdownContainer>
    )
}

export default CartDropdown;