
import { USER_ACTION_TYPES } from "./userActionTypes";


const createAction = (type, payload) => ({type, payload});

export const setCurrentUser = (user) => {
        createAction('SET_CURRENT_USER', user);
    }