import { Category } from "../../types/Category";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categoriesArray: Category[]) => createAction("categories/SET_CATEGORIES", categoriesArray);