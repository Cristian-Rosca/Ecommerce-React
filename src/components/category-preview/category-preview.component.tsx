import { Product } from '../../types/Product';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

import { Link } from 'react-router-dom';
import { getCategoryLink} from '../routes/category/category.component';

const CategoryPreview = ({title, products} : {title : string, products : Product[]}) => {
    return ( 
        <div className="category-preview-container">
            <h2 className='category-title'>
                <Link to={getCategoryLink(title)} className='title'>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((product, idx) => idx < 4)
                    .map((product) => (<ProductCard key={product.id} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/>))
                }
            </div>

        </div>
     );
}
 
export default CategoryPreview;