
import { USER_ACTION_TYPES } from "./userActionTypes";


const createAction = (type, payload) => ({type, payload});

export const setCurrentUser = (user) => {
    createAction('SET_CURRENT_USER', user);
}


export const checkUserSession = () => (
    {type: USER_ACTION_TYPES.CHECK_USER_SESSION}
)

export const googleSignInStart = () => {
    return {type: USER_ACTION_TYPES.GOOGLE_SIGNIN_START}
}

export const emailSignInStart = (email, password) => {
    return {type: USER_ACTION_TYPES.EMAIL_SIGNIN_START, payload: {email, password}}
}

export const signInSuccess = (user) => (
    {type: USER_ACTION_TYPES.SIGNIN_SUCCESS, payload: user}
)

export const signInFailed = (user) => (
    {type: USER_ACTION_TYPES.SIGNIN_FAILED, payload: user}
)

export const signUpSuccess = (email, password, displayName) => (
    {type: USER_ACTION_TYPES.SIGNUP_SUCCESS, payload: {email, password, displayName}}
)

export const signOutTheUser = () => (
    {type: USER_ACTION_TYPES.SIGNOUT_USER}
)