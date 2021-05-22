import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType"

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};


export const authReducer = (state = initialState, action) => {
    const {type} = action

    switch(type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
                
            }
        case LOGIN_SUCCESS: 
        return{
            loggedIn: true,
            user: action.user
        }
        case LOGIN_FAIL: 
        return{}
        case LOG_OUT:
            return {};
        
            default:
                return state
    }

} 