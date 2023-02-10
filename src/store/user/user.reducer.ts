import { User } from "../../types/User"

export type USER_ACTION_TYPES = "SET_CURRENT_USER" | "CLEAR_CURRENT_USER"

type USER_ACTION = {
    type: string,
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

    console.log("action : ", action);
    console.log("state : ", state);


    console.log('type: ',type)


    switch (type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}