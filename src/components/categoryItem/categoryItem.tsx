import { Category } from '../../types/Category';
import './categoryItem.styles.scss';

type CategoryItemProps = {
    category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({category}) => {
    return ( 
        <div key={category.id} className="category-container">
          <div className="background-image"
            style={{
              backgroundImage: `url(${category.imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>View Programs</p>
          </div>
        </div>
     );
}
 
export default CategoryItem;