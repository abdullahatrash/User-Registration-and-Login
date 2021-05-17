import { DELETE_FAIL, DELETE_REQUEST, DELETE_SUCCESS, GETALL_FAIL, GETALL_REQUEST, GETALL_SUCCESS } from "../actionType";

export function users(state = {}, action) {
    switch (action.type) {
        case GETALL_REQUEST:
            return {
                loading: true
            };
        case GETALL_SUCCESS:
            return {
                items: action.users
            };
        case GETALL_FAIL:
            return {
                error: action.error
            };
        case DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(user =>
                    user.id === action.id
                        ? { ...user, deleting: true }
                        : user
                )
            };
        case DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter(user => user.id !== action.id)
            };
        case DELETE_FAIL:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting,   ...userCopy } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }

                    return user;
                })
            };
        default:
            return state
    }
}