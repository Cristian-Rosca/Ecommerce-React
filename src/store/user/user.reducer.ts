import { User } from "../../types/User"
import { USER_ACTION_TYPES } from "./user.types"


type USER_ACTION = {
    type: USER_ACTION_TYPES,
    payload: any
}

type UserState = {
    currentUser: User | null
}

const INITIAL_STATE = {
    currentUser: null
}


export const userReducer = (state : UserState = INITIAL_STATE, action: USER_ACTION, ) => {

    const { type, payload } = action;

    switch (type) {
        case "user/SET_CURRENT_USER":
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}