import { useContext, useState, useEffect } from 'react';
import './category.styles.scss';

import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../../contexts/categories.context';
import { Product } from '../../../types/Product';
import ProductCard from '../../product-card/product-card.component';

export const getCategoryString = (category: string) => {
    let result = ""

    switch (category.toLocaleLowerCase()) {
        case "beginner-programs": {
            result = "beginner programs"
            break;
        }
        case "intermediate-programs": {
            result = "intermediate programs"
            break;
        }
        case "advanced-programs": {
            result = "advanced programs"
            break;
        }
    }

    return result
}
export const getCategoryLink = (category: string) => {
    let result = ""

    switch (category.toLocaleLowerCase()) {
        case "beginner programs": {
            result = "beginner-programs"
            break;
        }
        case "intermediate programs": {
            result = "intermediate-programs"
            break;
        }
        case "advanced programs": {
            result = "advanced-programs"
            break;
        }
    }

    return result
}

const Category = () => {

    const { category } = useParams();

    const categoryTitle = category as string

    const { categories } = useContext(CategoriesContext);

    const [products, setProducts] = useState<Product[]>(categories[getCategoryString(categoryTitle)]);

    useEffect(() => {
        setProducts(categories[getCategoryString(categoryTitle)])
    }, [category, categories]);

    return (
        <>
            <h2 className='category-title'>{getCategoryString(categoryTitle).toUpperCase()}</h2>
            <div className='category-container'>
                {

                    products ?

                        products.map(product => (<ProductCard key={product.id} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} />))

                        :

                        <></>
                }

            </div>
        </>
    );
}

export default Category;