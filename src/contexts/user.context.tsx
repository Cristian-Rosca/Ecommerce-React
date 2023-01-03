import { createContext, useEffect, useState } from "react"
import { User } from "../types/User"
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils"

type UserContext = {
    currentUser: User | null,
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>
}

const iUserState = {
    currentUser: null,
    setCurrentUser: () => { }
}

export const UserContext = createContext<UserContext>(iUserState)

export const UserProvider = ({ children }: any) => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user : any) => {
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