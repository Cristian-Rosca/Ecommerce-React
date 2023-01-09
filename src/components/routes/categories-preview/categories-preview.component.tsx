import { useContext, useEffect } from 'react';
import { CategoriesContext } from '../../../contexts/categories.context';

import CategoryPreview from '../../category-preview/category-preview.component';

const CategoriesPreview = () => {

    const { categories } = useContext(CategoriesContext);

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