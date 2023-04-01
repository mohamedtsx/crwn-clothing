import './checkout-item.style.scss';

import { useDispatch } from 'react-redux';
import {
    addItemToCart,
    removeItemFromCart, 
    clearItemFromCart
} from '../../store/cart/cart.actions';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';


const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const {imageUrl, name, quantity, price} = item;

    const incrementHandler = () => dispatch(addItemToCart(cartItems, item));
    const decrementHandler = () => dispatch(removeItemFromCart(cartItems, item));
    const removeHandler = () => dispatch(clearItemFromCart(cartItems, item));

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div className='arrow' onClick={decrementHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementHandler}>&#10095;</div>
            </span>

            <span className='price'>{price}</span>
            <button type='button' className='removeBtn' onClick={removeHandler}>&#10005;</button>
        </div>
    )
}

export default CheckoutItem

