import './checkout-item.style.scss';

import { useDispatch } from 'react-redux';
import * as cartItemsActions from '../../store/cart-items/cart-items.actions';


const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();

    const {imageUrl, name, quantity, price} = item;

    const incrementHandler = () => dispatch(cartItemsActions.increment(item));
    const decrementHandler = () => dispatch(cartItemsActions.decrement(item));
    const removeHandler = () => dispatch(cartItemsActions.removeItemFromCart(item));

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div className='arrow' onClick={incrementHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={decrementHandler}>&#10095;</div>
            </span>

            <span className='price'>{price}</span>
            <button type='button' className='removeBtn' onClick={removeHandler}>&#10005;</button>
        </div>
    )
}

export default CheckoutItem

