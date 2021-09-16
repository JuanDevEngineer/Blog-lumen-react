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

export const statusSession = () => ({
    type: type_auth.AUTH_STATUS
})

