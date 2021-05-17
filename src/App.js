import "tailwindcss/tailwind.css"
import './App.css';
import HomePage from "./Pages/HomePage";
import LoginPage  from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { history } from '../src/helper/history';
import { PrivateRoute } from '../src/components/PrivateRoute';
import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { alertActions } from "./redux/actions/alert.actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const alert = useSelector(state => state.alert);

  const dispatch = useDispatch();
  
  useEffect(() => {
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}, [dispatch]);

  return (
    
    <div>
       {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
    <Router>
  
      <Switch>
      <Route path="/signup">
     <SignupPage/>
     </Route>
      <Route path="/login">
     <LoginPage/>
     </Route>
      <PrivateRoute path="/">
     <HomePage/>
     </PrivateRoute>
     <Redirect from="*" to="/" />
     </Switch>
   
    </Router>
    </div>
  );
}

export default App;
