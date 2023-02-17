import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/categories/category.selector';
import CategoryPreview from '../../category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap)

    return (
        <div className='category-preview-container'>
            {
                Object.keys(categories).map(title => (
                     <CategoryPreview key={title} title={title} products={categories[title]}/>
                ))
            }
        </div>
    );
        }

export default CategoriesPreview;