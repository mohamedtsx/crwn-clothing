import {CartItemContainer, ItemDetails} from './cart-item.style';
import { FC } from 'react';


import { CartItem as TCartItem } from '../../store/cart/cart.types';

export type CartItemProp = {
    cartItem: TCartItem
}

const CartItem: FC<CartItemProp> = ({ cartItem }) => {
    const {name, price, imageUrl, quantity} = cartItem;

    return(

        <CartItemContainer>
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x &#36;{price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;