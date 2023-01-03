import { createContext, useState } from "react"
import { User } from "../types/User"

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
    
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}