import { Category } from "../../types/Category";
import { CATEGORIES_ACTION_TYPES } from "./category.types";


export const CATEGORIES_INITIAL_STATE = {
    categories : [],
    isLoading: false,
    error: null
};


type CATEGORIES_ACTION = {
    type: CATEGORIES_ACTION_TYPES,
    payload: any
}

type CategoriesState = {
   categories: Category[],
   isLoading: boolean,
    error: any
}



export const categoriesReducer = (state : CategoriesState = CATEGORIES_INITIAL_STATE, action : CATEGORIES_ACTION ) => {
    const { type, payload } = action;

    switch (type) {
        case "categories/FETCH_CATEGORIES_SUCCESS":
            return {
                ...state,
                isLoading: true
            }
        case "categories/FETCH_CATEGORIES_FAILED":
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case "categories/FETCH_CATEGORIES_SUCCESS":
            return {
                ...state,
                categories: payload,
                isLoading: false
            }
        default:
            return state;
    }
}