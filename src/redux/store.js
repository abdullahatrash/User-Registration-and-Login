import {createStore, applyMiddleware, combineReducers} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import  thunk  from "redux-thunk"
import { registration } from "./reducers/register.reducer";
import { authReducer } from "./reducers/authentication.reducer";
import { users } from "./reducers/users.reducer";
import { alert } from "./reducers/alert.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registration,
    users,
    alert
})

    const store = createStore(
        rootReducer,
         {},
         composeWithDevTools(applyMiddleware(thunk)) 
     )
     
     export default store;
