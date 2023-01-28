import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import * as cartItemsSelectors from '../../store/cart-items/cart-items.selectors';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {

    const cartItems = useSelector(cartItemsSelectors.selectCartItems);
    const totalPrice = useSelector(cartItemsSelectors.selectTotalPrice);

    return (
        <div className='checkout-container'>

            <header>
                <ul className='header_nav'>
                    <li>Product</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Remove</li>
                </ul>
            </header>
        
            <div className='items-container'>
                {cartItems.map(el => <CheckoutItem item= {el} key={el.id}/>)}
                <span className='total'>Total price ${totalPrice}</span>
            </div>
            <PaymentForm/>
        </div>
    )
}

export default Checkout;