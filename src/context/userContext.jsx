import { createContext, useState, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthenticationStateChangedListener } from "../utils/firebase utils/firebase-utils";





export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null
})



// useing reducer

const USER_ACTION_TYPES = {
        'SET_CURRENT_USER' : 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    
    const {type, payload} = action;
    
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload,
            };
        default:
            throw new Error(`un handled ${type} in userReducer`)
        
    }
}



const INITIAL_VALUE = {
    currentUser: null
}

export const UserProvider = ({children}) => {

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_VALUE);
    
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }



    const value = {currentUser, setCurrentUser};

    // useEffect( () => {
    //     const listener = onAuthenticationStateChangedListener((user)=>{
    //         if(user) {
    //             createUserDocumentFromAuth(user)
    //         }
            
    //         // console.log(user);
    //         setCurrentUser(user);
    //     })
        
    //     return listener
    // },[])

    return<UserContext.Provider value={value} >{children}</UserContext.Provider>
}