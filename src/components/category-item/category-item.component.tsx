import { BackgroundImage, CategoryContainer, CategoryBodyContainer } from './category-item.style'
import { useNavigate } from 'react-router-dom';

import { FC } from 'react';
import { DirectoryCategory } from '../directory/directory.component';

type CategoryItemProps = {
  item: DirectoryCategory
}

const CategoryItem: FC<CategoryItemProps> = ({item}) => {
    let {title, imageUrl, route} = item;
    const navigate = useNavigate();


    return(
      <CategoryContainer onClick={() => navigate(route)}>
        <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
        <CategoryBodyContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryContainer>
    )
}

export default CategoryItem;