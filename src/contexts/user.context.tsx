import { createContext, useEffect, useReducer } from "react"
import { User } from "../types/User"
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils"
import { createAction } from "../utils/reducer/reucer.utils"

type UserContext = {
    currentUser: User | null,
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>
}

const iUserState = {
    currentUser: null,
    setCurrentUser: () => { }
}

export const UserContext = createContext<UserContext>(iUserState)

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


const userReducer = (state: UserState, action: USER_ACTION, ) => {

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
            console.error(`Unhandled action type ${action.type}`);
            return state;
    }
}


export const UserProvider = ({ children }: any) => {

    // useReducer call
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)


    // setCurrentUser function
    const setCurrentUser = (user: User) => dispatch(createAction("SET_CURRENT_USER", user))



    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user: any) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe; // we are calling unsubscribe to clean up the listener and close the connection
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}