import './product-card.style.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { CategoryItem } from '../../store/categories/categories.types';
import { FC } from 'react';

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({product}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const {name, price, imageUrl} = product;
  
  const handelAddProduct = () => {
    dispatch(addItemToCart(cartItems, product));
  }


  return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        
        <Button 
          buttonType={BUTTON_TYPE_CLASSES.inverted} 
          type='button' 
          onClick={handelAddProduct}
        >Add to card</Button>
    </div>
  );

}
      
export default ProductCard;