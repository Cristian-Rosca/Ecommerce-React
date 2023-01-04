import { createContext, useEffect, useState } from "react"


import PRODUCTS from '../shop-data.json'
import { Product } from "../types/Product"

type ProductsContext = {
    products: Product[] | null,
    setProducts: React.Dispatch<React.SetStateAction<any>>
}

const iProductsState = {
    products: [],
    setProducts: () => { }
}

export const ProductsContext = createContext<ProductsContext>(iProductsState)

const ProductsProvider = ({children} : any) => {

    const [products, setProducts] = useState(PRODUCTS)

    return ( 
    <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider> 
    );
}
 
export default ProductsProvider;