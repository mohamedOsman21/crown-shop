import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthenticationStateChangedListener } from "../utils/firebase utils/firebase-utils";


export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect( () => {
        const listener = onAuthenticationStateChangedListener((user)=>{
            if(user) {
                createUserDocumentFromAuth(user)
            }
            
            // console.log(user);
            setCurrentUser(user);
        })
        
        return listener
    },[])

    return<UserContext.Provider value={value} >{children}</UserContext.Provider>
}