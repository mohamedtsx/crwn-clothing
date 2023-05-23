import CategoryItem from '../category-item/category-item.component';
import { uuidv4 } from '@firebase/util';
import styled from 'styled-components';

const StyledDirectory = styled.section`
  ${({theme}) => theme.mixes.flexBetween}
  flex-wrap: wrap;
  gap: 1.25rem;
`;



export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}



const categories: DirectoryCategory[] =   [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'kids',
    imageUrl: 'https://i.pinimg.com/564x/fc/2e/19/fc2e1946cfe4412238b565f139161d70.jpg',
    route: 'shop/kids',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  }
];

const Directory = () => {
    return(
      <StyledDirectory>
        {categories.map(category => (
          <CategoryItem key={uuidv4()} item={category}/>
        ))}
      </StyledDirectory>
    )
}

export default Directory;