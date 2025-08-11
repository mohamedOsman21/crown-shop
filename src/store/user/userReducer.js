import { USER_ACTION_TYPES } from "./userActionTypes";

export const userReducer = (state = INITIAL_VALUE, action) => {
    
    const {type, payload} = action;
    
    switch(type) {
        case USER_ACTION_TYPES.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
            };
        case USER_ACTION_TYPES.SIGNIN_FAILED:
            return {
                ...state,
                error: payload
            }
        case USER_ACTION_TYPES.SIGNOUT_USER:
            return {...state, currentUser: null}
        default:
            return state;
        
    }
}



const INITIAL_VALUE = {
    currentUser: null,
    isLoading: false,
    error: null
}