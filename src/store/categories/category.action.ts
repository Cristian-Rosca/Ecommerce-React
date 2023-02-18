import { Category } from "../../types/Category";
import { createAction } from "../../utils/reducer/reducer.utils";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { getCategoriesAndCollections } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => createAction("categories/FETCH_CATEGORIES_START", null);

export const fetchCategoriesSuccess = (categoriesArray: Category[]) => createAction("categories/FETCH_CATEGORIES_SUCCESS", categoriesArray);

export const fetchCategoriesFailed = (error: any) => createAction("categories/FETCH_CATEGORIES_FAILED", error);

export const fetchCategoriesAsync : any = () => async (dispatch : Dispatch<AnyAction>) => {
    dispatch (fetchCategoriesStart());
    try {
        const categoriesArray : any = await getCategoriesAndCollections();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
};