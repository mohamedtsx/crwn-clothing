import { DirectoryContainer } from './directory.style.jsx'
import CategoryItem from '../category-item/category-item.component';
import { uuidv4 } from '@firebase/util';


const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]

const Directory = () => {
    return(
      <DirectoryContainer>
        {categories.map(category => (
          <CategoryItem key={uuidv4()} item={category}/>
        ))}
      </DirectoryContainer>
    )
}

export default Directory;