import * as Styled from './checkout-item.style';

import { useDispatch } from 'react-redux';
import {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
} from '../../store/cart/cart.actions';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';

import { FC, memo } from 'react';
import { CartItem } from '../../store/cart/cart.types';

type CheckoutProps = {
    item: CartItem
}

const CheckoutItem: FC<CheckoutProps> = memo(({item}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const {imageUrl, name, quantity, price} = item;

    const incrementHandler = () => dispatch(addItemToCart(cartItems, item));
    const decrementHandler = () => dispatch(removeItemFromCart(cartItems, item));
    const removeHandler = () => dispatch(clearItemFromCart(cartItems, item));

    return(
        <Styled.CheckoutItemContainer>
            <Styled.ImageContainer>
                <img src={imageUrl} alt={name}/>
            </Styled.ImageContainer>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div className='arrow' onClick={decrementHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementHandler}>&#10095;</div>
            </span>

            <span className='price'>{price}</span>
            <button type='button' className='removeBtn' onClick={removeHandler}>&#10005;</button>
        </Styled.CheckoutItemContainer>
    )
});

export default CheckoutItem;

