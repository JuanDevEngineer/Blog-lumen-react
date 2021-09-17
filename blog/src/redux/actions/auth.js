import * as type_auth from '../types/AuthType'

/**
 * actions syncronous
 */
export const loginApp = (token) => ({
    type: type_auth.AUTH_LOGIN,
    payload: {
        userCurrent: token,
        isAuthenticaded: true,
    }
})

export const statusSession = () => {
    if(localStorage.getItem('token') == null) {
        return {
            type: type_auth.AUTH_LOGIN_OUT,
        }
    } else {
        return {
            type: type_auth.AUTH_STATUS,
            payload: {
                userCurrent: localStorage.getItem('token'),
            }
        }
    }
}

export const loginAppError = (data) => ({
    type: type_auth.LOGIN_AUTH_ERROR,
    payload: {
        errors: data
    }
})

