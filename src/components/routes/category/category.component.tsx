import { useState, useEffect } from 'react';
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { Product } from '../../../types/Product';
import ProductCard from '../../product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/categories/category.selector';

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

type CategoryRouteParams = {
    category: string
}

const Category = () => {

    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;

    const categoryTitle = category

    const categories = useSelector(selectCategoriesMap)

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