import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types/Category";


export const CATEGORIES_INITIAL_STATE : CategoriesState = {
    categories : []
};


type CategoriesState = {
   categories: Category[]
}

export const catagoriesSlice = createSlice({
    name: "categories",
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const { setCategories } = catagoriesSlice.actions

export const categoriesReducer = catagoriesSlice.reducer


// export const categoriesReducer = (state : CategoriesState = CATEGORIES_INITIAL_STATE, action : CATEGORIES_ACTION ) => {
//     const { type, payload } = action;

//     switch (type) {
//         case "categories/SET_CATEGORIES":
//             return {
//                 ...state,
//                 categories: payload
//             }
//         default:
//             return state;
//     }
// }