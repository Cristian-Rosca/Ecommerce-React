import { Category } from "../../types/Category";
import { CATEGORIES_ACTION_TYPES } from "./category.types";


export const CATEGORIES_INITIAL_STATE = {
    categories : []
};


type CATEGORIES_ACTION = {
    type: CATEGORIES_ACTION_TYPES,
    payload: any
}

type CategoriesState = {
   categories: Category[]
}



export const categoriesReducer = (state : CategoriesState = CATEGORIES_INITIAL_STATE, action : CATEGORIES_ACTION ) => {
    const { type, payload } = action;

    switch (type) {
        case "categories/SET_CATEGORIES":
            return {
                ...state,
                categories: payload
            }
        default:
            return state;
    }
}