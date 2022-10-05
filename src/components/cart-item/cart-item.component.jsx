import {CartItemContainer, ItemDetails} from './cart-item.style';

const CartItem = (prop) => {
    const {name, price, imageUrl, quantity} = prop.cartItem;

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