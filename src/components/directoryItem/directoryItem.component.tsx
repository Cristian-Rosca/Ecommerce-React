import { Category } from '../../types/Category';
import './directoryItem.styles.scss';

type CategoryItemProps = {
    category: Category;
}

const DirectoryItem: React.FC<CategoryItemProps> = ({category}) => {
    return ( 
        <div key={category.id} className="directory-item-container">
          <div className="background-image"
            style={{
              backgroundImage: `url(${category.imageUrl})`,
            }}
          />
          <div className="directory-item-body">
            <h2>{category.title}</h2>
            <p>View Programs</p>
          </div>
        </div>
     );
}
 
export default DirectoryItem;