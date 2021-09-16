import * as type_auth from '../types/AuthType'

const initState = {
    user_current: null,
    isAuthenticaded: false,
    errorsApi: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case type_auth.AUTH_LOGIN:
            return {
                ...state,
                user_current: action.payload.userCurrent,
                isAuthenticaded: true,
                errorsApi: null
            }
        
        case type_auth.AUTH_STATUS:
            return {
                ...state,
                user_current: localStorage.getItem('token'),
                isAuthenticaded: true,
                errorsApi: null
            }

        case type_auth.AUTH_LOGIN_REFRESH:
            return {
                ...state,
                user_current: action.payload,
                isAuthenticaded: true,
            }

        case type_auth.LOGIN_AUTH_ERROR:
            return {
                ...state,
                errorsApi: action.payload.errors
            }
            
        case type_auth.AUTH_LOGIN_OUT:
            return {
                ...state,
                user_current: null,
                isAuthenticaded: false,
                errorsApi: null
            }
            
        default:
            return state
    }
}

export default authReducer