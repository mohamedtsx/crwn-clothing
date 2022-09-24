import { BackgroundImage, CategoryContainer, CategoryBodyContainer } from './category-item.style'
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({item}) => {
    let {title, imageUrl} = item;
    const navigate = useNavigate();


    return(
      <CategoryContainer onClick={() => navigate(`shop/${title}`)}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <CategoryBodyContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryContainer>
    )
}

export default CategoryItem;