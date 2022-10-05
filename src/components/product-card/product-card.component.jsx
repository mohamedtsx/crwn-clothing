import './product-card.style.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useDispatch } from 'react-redux';
import * as cartItemsActions from '../../store/cart-items/cart-items.actions';



const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  const {name, price, imageUrl} = product;
  
  const handelAddProduct = () => {
    dispatch(cartItemsActions.addItemToCart(product));
  }


  return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='button' onClick={handelAddProduct}>Add to card</Button>
    </div>
  );

}
      
export default ProductCard;