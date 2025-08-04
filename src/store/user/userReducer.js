import { USER_ACTION_TYPES } from "./userActionTypes";

export const userReducer = (state = INITIAL_VALUE, action) => {
    
    const {type, payload} = action;
    
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            return state;
        
    }
}



const INITIAL_VALUE = {
    currentUser: null
}