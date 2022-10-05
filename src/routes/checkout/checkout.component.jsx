import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import * as cartItemsSelectores from '../../store/cart-items/cart-items.selectores';

const Checkout = () => {

    const cartItems = useSelector(cartItemsSelectores.selectCartItems)

    const totalPrice = cartItems.reduce((acc, current) => {
        const {price, quantity} = current;
        return acc + price*quantity;
    },0) ;

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
                <span className='total'>Totale price ${totalPrice}</span>
            </div>



        </div>
    )
}

export default Checkout;