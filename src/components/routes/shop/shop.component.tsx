import { useContext, useEffect } from 'react';
import { CategoriesContext } from '../../../contexts/categories.context';
import './shop.styles.scss';

import ProductCard from '../../product-card/product-card.component';

const Shop = () => {

    const { categories } = useContext(CategoriesContext);

    useEffect(() => {
        console.log('in shop page',categories);
    }, []);

    return (
        <div>
            {
                Object.keys(categories).map(title => (
                    <div>
                        <h2>{title}</h2>
                        <div className='products-container'>
                        {categories[title].map((product) => (
                            <ProductCard key={product.id} name={product.name} id={product.id} imageUrl={product.imageUrl} price={product.price} />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
        }


export default Shop;