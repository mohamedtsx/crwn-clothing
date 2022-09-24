import './checkout-item.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({item}) => {

    const { cartItemHandeler } = useContext(CartContext);
    const {imageUrl, name, quantity, price} = item;

    const incrementHandeler = () => cartItemHandeler(item, 'increment');
    const decrementHandeler = () => cartItemHandeler(item, 'decrement');
    const removeHandeleer = () => cartItemHandeler(item, 'remove');

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div className='arrow' onClick={incrementHandeler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={decrementHandeler}>&#10095;</div>
            </span>

            <span className='price'>{price}</span>
            <button type='button' className='removeBtn' onClick={removeHandeleer}>&#10005;</button>
        </div>
    )
}

export default CheckoutItem

