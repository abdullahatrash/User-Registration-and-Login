import {DELETE_REQUEST, DELETE_SUCCESS,DELETE_FAIL,
        GETALL_REQUEST, GETALL_SUCCESS,GETALL_FAIL, 
        LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT,
         REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } 
         from "../actionType"
import { userService } from '../../services/user.service';
import { history } from '../../helper/history';
import { alertActions } from './alert.actions';


export const userActions = {
    login,
    register,
    logout,
    getAll,
    delete:_delete
};

function login (username, password, from) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push(from);
                   
                },
                
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };


    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAIL, error } }
}

function logout() {
    userService.logout();
    return { type: LOG_OUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: REGISTER_REQUEST, user } }
    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type:REGISTER_FAIL, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: GETALL_REQUEST } }
    function success(users) { return { type: GETALL_SUCCESS, users } }
    function failure(error) { return { type: GETALL_FAIL, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: DELETE_REQUEST, id } }
    function success(id) { return { type: DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: DELETE_FAIL, id, error } }
}