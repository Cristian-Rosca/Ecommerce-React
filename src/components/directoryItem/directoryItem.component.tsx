import { Category } from '../../types/Category';
import './directoryItem.styles.scss';

import { useNavigate } from 'react-router-dom';

type CategoryItemProps = {
    category: Category;
    route: string;
}

const DirectoryItem: React.FC<CategoryItemProps> = ({category, route}) => {
  
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
  
  return ( 
        <div key={category.id} className="directory-item-container" onClick={onNavigateHandler}>
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