import './product-card.style.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
  const { cartItemHandeler } = useContext(CartContext);
  
  const handelAddProduct = () => {
    cartItemHandeler(product, 'add');
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