import { createContext, useState, useEffect } from "react"
import { Product } from "../types/Product";

import { getCategoriesAndCollections } from "../utils/firebase/firebase.utils"

type CategoryMap = {
    [title: string]: Product[];
}

type CategoriesContext = {
    categories: CategoryMap,
    setCategories: React.Dispatch<React.SetStateAction<any>>
}

const iCategoriesState = {
    categories: {},
    setCategories: () => { }
}

export const CategoriesContext = createContext<CategoriesContext>(iCategoriesState)

const CategoriesProvider = ({children} : any) => {

    const [categories, setCategories] = useState<CategoryMap>({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndCollections()            
            setCategories(categoryMap)
        }
        getCategoriesMap();
    }, []);

    return ( 
    <CategoriesContext.Provider value={{categories, setCategories}}>
        {children}
    </CategoriesContext.Provider> 
    );
}
 
export default CategoriesProvider;