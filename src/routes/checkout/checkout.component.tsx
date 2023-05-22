import * as Styled from './checkout.style';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../store/cart/cart.selectors';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);

    return (
        <Styled.Checkout>
            <Styled.CheckoutHeader>checkout</Styled.CheckoutHeader>
        
            <div className='items-container'>
                {cartItems.map(el => <CheckoutItem item= {el} key={el.id}/>)}
            </div>
            <PaymentForm/>
        </Styled.Checkout>

        
    )
}

export default Checkout;