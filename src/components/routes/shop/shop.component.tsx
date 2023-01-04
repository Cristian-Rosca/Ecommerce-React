import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import './shop.styles.scss';

import ProductCard from '../../product-card/product-card.component';

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return ( 
        <div className='products-container'>
            { products ? 
            
            products.map((product) => (
                <ProductCard key={product.id} name={product.name} id={product.id} imageUrl={product.imageUrl} price={product.price}/>
            ))
            : 
            <span>Products unavailable</span>}
        </div>
     );
}
 
export default Shop;