import * as Styled from './checkout.style';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../store/cart/cart.selectors';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <Styled.Checkout>

            <header>
                <Styled.MetaData>
                    <li>Product</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Remove</li>
                </Styled.MetaData>
            </header>
        
            <div className='items-container'>
                {cartItems.map(el => <CheckoutItem item= {el} key={el.id}/>)}
                <Styled.TotalPrice>Total price ${totalPrice}</Styled.TotalPrice>
            </div>
            <PaymentForm/>
        </Styled.Checkout>
    )
}

export default Checkout;