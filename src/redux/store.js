import {createStore, applyMiddleware, combineReducers} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import  thunk  from "redux-thunk"
import { registration } from "./reducers/register.reducer";
import { authReducer } from "./reducers/authentication.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registration,
})

    const store = createStore(
        rootReducer,
         {},
         composeWithDevTools(applyMiddleware(thunk)) 
     )
     
     export default store;
